import { Plugin } from 'vite';
import { SkinConfig } from '../types/index';
export * from './aliasModules';
export * from './defaultMatch';
export * from './versionConfig';
export * from '../types/index';
export default function millenniumSkin(): Plugin;
export declare function defineConfig(SkinConfig: SkinConfig): SkinConfig;
