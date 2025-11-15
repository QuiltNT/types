import LLPackage from './packages/liteloader';
import { QQNTPackage } from './packages/qqnt';
import { Platforms } from './others';
import PluginManifest from './plugin_manifest';

/// <reference path="electron.d.ts" />

/** @type 路径, 没什么好说的 */
type Paths = {
	root: string;
	profile: string;
	data: string;
	plugins: string;
}

/** @type 版本号, 没什么好说的 */
type Versions = {
	qqnt: string;
	liteloader: string;
	node: string;
	chrome: string;
	electron: string;
}

type Plugin = {
	/**
	 * @prop 是否为内置插件(仅uno版本可用)
	 * @deprecated 已废弃: uno 版本已停止维护
	 */
	builtin?: true,
	/** @prop 插件清单文件内容 */
	manifest: PluginManifest,
	/** @prop 不兼容标志 */
	incompatible: boolean,
	/** @prop 禁用标志 */
	disabled: boolean,
	/** @prop 路径信息, 没什么好说的 */
	path: {
		plugin: string,
		data: string,
		injects: {
			main: string | null,
			preload: string | null,
			renderer: string | null
		}
	}
}

interface LiteLoader {
	path: Paths;
	versions: Versions;
	os: {
		platform: Platforms;
	};
	/** @prop package.json内容 */
	package: {
		liteloader: LLPackage;
		qqnt: QQNTPackage;
	};
	/** @prop 插件列表 */
	plugins: {
		[slug: string]: Plugin;
	};
	api: {}
}

interface LiteLoaderMain extends LiteLoader {
	/** @prop 主进程 API */
	api: {
		config: {
			/** @method 获取插件配置 */
			get: (slug: string, default_config: any) => any;
			/** @method 设置插件配置 */
			set: (slug: string, new_config: any) => void;
		},
		plugin: {
			/** @method 安装插件 */
			install: (plugin_path: string, undone?: boolean) => boolean;
			/** @method 删除插件 */
			delete: (slug: string, delete_data?: boolean, undone?: boolean) => boolean;
			/** @method 禁用插件 */
			disable: (slug: string, undone?: boolean) => void;
		},
		/** @method 打开路径 */
		openPath: (path: string) => Promise<string>;
		/** @method 打开外部 URL */
		openExternal: (url: string, options?: Electron.OpenExternalOptions) => Promise<void>;
	}
}

interface LiteLoaderPreload extends LiteLoader {
	/** @prop 渲染/预载进程 API */
	api: {
		config: {
			/** @method 获取插件配置 */
			get: (slug: string, default_config: any) => Promise<any>;
			/** @method 设置插件配置 */
			set: (slug: string, new_config: any) => Promise<void>;
		},
		plugin: {
			/** @method 安装插件 */
			install: (plugin_path: string, undone?: boolean) => Promise<boolean>;
			/** @method 删除插件 */
			delete: (slug: string, delete_data?: boolean, undone?: boolean) => Promise<boolean>;
			/** @method 禁用插件 */
			disable: (slug: string, undone?: boolean) => Promise<void>;
		},
		/** @method 打开路径 */
		openPath: (path: string) => Promise<string>;
		/** @method 打开外部 URL */
		openExternal: (url: string, options?: Electron.OpenExternalOptions) => Promise<void>;
	}
}

export type { LiteLoaderMain, LiteLoaderPreload }
