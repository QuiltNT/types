type PluginType = 'extension' | 'theme' | 'framework';

/**
 * 插件清单
 * @see {@link https://liteloaderqqnt.github.io/docs/new-plugin.html#manifest-json}
 */
type PluginManifest = {
	/** 清单 JSON 校验文件 */
	$schema?: string,
	/** 清单版本 */
	manifest_version: number,
	/** 插件类型 */
	type: PluginType,
	/** 名称 */
	name: string,
	/** 内部标识符 */
	slug: string,
	/**
	 * 启用主进程 ESM (实验性, 1.4.0 开发版 `7575d7b` 加入)
	 * @deprecated 于 1.4.0 正式版移除
	 */
	esm?: boolean,
	/** 描述 */
	description?: string,
	/** 版本 */
	version: string,
	/** 图标 */
	icon?: string | null,
	/** 设置界面预览图标 */
	thumb?: string | null,
	/** 作者信息 */
	authors?: {
		/** 名称 */
		name: string,
		/** 链接 */
		link?: string
	}[],
	/** Github 仓库信息 */
	repository?: {
		/** 仓库短名称 (`<username>/<repo>`) */
		repo: string,
		/** 仓库主分支 */
		branch: string,
		/** 发布版本 */
		release?: {
			/** 发布标签 */
			tag: string,
			/** 发布文件 */
			file?: string
		}
	},
	/** 支持的平台 */
	platform: [
		'win32'?,
		'darwin'?,
		'linux'?
	],
	/** 依赖项 */
	dependencies?: string[],
	/** 注入文件 */
	injects?: {
		/** 渲染进程脚本 */
		renderer?: string,
		/** 主进程脚本 */
		main?: string,
		/** 预加载脚本 */
		preload?: string
	}
}

export default PluginManifest;
