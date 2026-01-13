import { LiteLoaderPreload } from '../index';

declare global {
	interface Window {
		readonly LiteLoader: LiteLoaderPreload;
	}
	const LiteLoader: LiteLoaderPreload;
}

