import LLPackage from './packages/liteloader';
import { QQNTPackage } from './packages/qqnt';
import { Platforms } from './others/other';
import PluginManifest from './others/plugin_manifest';

type Paths = {
	/** 框架安装路径 */
	root: string;
	/** 框架数据路径 */
	profile: string;
	/** 插件数据路径 */
	data: string;
	/** 插件安装路径 */
	plugins: string;
}

type Versions = {
	/** QQNT 版本 */
	qqnt: string;
	/** LiteLoader 版本 */
	liteloader: string;
	/** Node.js 版本 */
	node: string;
	/** Chrome 版本 */
	chrome: string;
	/** Electron 版本 */
	electron: string;
}

type Plugin = {
	/**
	 * 是否为内置插件 (仅 uno 版本可用)
	 * @deprecated 已弃用: uno 版本已停止维护
	 */
	builtin?: true,
	/** 插件清单文件内容 */
	manifest: PluginManifest,
	/** 不兼容 */
	incompatible: boolean,
	/** 禁用 */
	disabled: boolean,
	/** 路径 */
	path: {
		/** 插件安装路径 */
		plugin: string,
		/** 插件数据路径 */
		data: string,
		/** 插件注入脚本 */
		injects: {
			/** 主进程注入脚本 */
			main: string | null,
			/** 预载进程注入脚本 */
			preload: string | null,
			/** 渲染进程注入脚本 */
			renderer: string | null
		}
	}
}

interface LiteLoader {
	/** 路径 */
	path: Paths;
	/** 版本信息 */
	versions: Versions;
	/** 系统信息 */
	os: {
		/**
		 * 操作系统
		 * @deprecated 于 1.4.0 版本移除
		 */
		os: string;
		/** 平台 */
		platform: Platforms;
	};
	/** package.json 内容 */
	package: {
		/** LiteLoaderQQNT package.json */
		liteloader: LLPackage;
		/** QQNT package.json */
		qqnt: QQNTPackage;
	};
	/** 插件列表 */
	plugins: Record<string, Plugin>;
}

interface LiteLoaderMain extends LiteLoader {
	/**
	 * 主进程 API
	 * @see {@link https://liteloaderqqnt.github.io/docs/liteloader-api.html#用法}
	 */
	api: {
		/** 配置 API */
		config: {
			/** 获取插件配置 */
			get: (slug: string, config: any) => any;
			/** 设置插件配置 */
			set: (slug: string, config: any) => void;
		},
		/** 插件 API */
		plugin: {
			/** 安装插件 */
			install: (plugin_path: string) => boolean;
			/**
			 * 删除插件
			 * @param slug 插件标识
			 * @param self 是否删除插件本体
			 * @param data 是否删除插件数据
			 * @param now 是否立即删除插件 (否则在重启后删除)
			 */
			delete: (slug: string, [self, data]: (boolean | undefined)[], now?: boolean) => boolean;
			/**
			 * 禁用插件
			 * @param slug 插件标识
			 * @param disabled 是否取消禁用插件
			 */
			disable: (slug: string, disabled?: boolean) => void;
		},
		/** 打开路径 */
		openPath: (path: string) => boolean;
		/** 打开外部 URL */
		openExternal: (url: string) => boolean;
	}
}

interface LiteLoaderPreload extends LiteLoader {
	/**
	 * 渲染/预载进程 API
	 * @see {@link https://liteloaderqqnt.github.io/docs/liteloader-api.html#用法}
	 */
	api: {
		/** 配置 API */
		config: {
			/** 获取插件配置 */
			get: (slug: string, config: any) => Promise<any>;
			/** 设置插件配置 */
			set: (slug: string, config: any) => Promise<void>;
		},
		/** 插件 API */
		plugin: {
			/** 安装插件 */
			install: (plugin_path: string) => Promise<boolean>;
			/**
			 * 删除插件
			 * @param slug 插件标识
			 * @param self 是否删除插件本体
			 * @param data 是否删除插件数据
			 * @param now 是否立即删除插件 (否则在重启后删除)
			 */
			delete: (slug: string, [self, data]: [boolean?, boolean?], now?: boolean) => Promise<boolean>;
			/**
			 * 禁用插件
			 * @param slug 插件标识
			 * @param disabled 是否取消禁用插件
			 */
			disable: (slug: string, disabled?: boolean) => Promise<void>;
		},
		/** 打开路径 */
		openPath: (path: string) => Promise<boolean>;
		/** 打开外部 URL */
		openExternal: (url: string) => Promise<boolean>;
	}
}

export type { LiteLoaderMain, LiteLoaderPreload }
