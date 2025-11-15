import { LiteLoaderPreload } from './index';

declare global {
	interface Window {
		LiteLoader: LiteLoaderPreload;
	}
	const LiteLoader: LiteLoaderPreload;
}

