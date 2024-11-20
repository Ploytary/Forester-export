import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@sprite': path.resolve(paths.root, 'src/assets/images/prepared/common/svg-sprite/sprite.svg'),
      '@image': path.resolve(paths.root, 'src/assets/images'),
      '@video': path.resolve(paths.root, 'src/assets/media/videos'),
      '@audio': path.resolve(paths.root, 'src/assets/media/audios'),
      '@script': path.resolve(paths.root, 'src/assets/scripts/js'),
      '@style': path.resolve(paths.root, 'src/assets/styles'),
    },
  };
}
