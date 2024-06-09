import {getDefaultConfig, mergeConfig} from '@react-native/metro-config';

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};
export default mergeConfig(getDefaultConfig(__dirname), config);

module.exports = {
  resolver: {
    assetExts: [
      'bin',
      'svg',
      'png',
      'jpg',
      'jpeg',
      'gif',
      'webp',
      'bmp',
      'tiff',
      'ico',
      'ttf',
      'otf',
      'woff',
      'woff2',
      'mp4',
      'mpg',
      'mpeg',
      'm4v',
      'mov',
      'mkv',
      'webm',
      'avi',
      'ogv',
      '3gp',
      '3g2',
      'ts',
      'srt',
      'vtt',
      'wav',
      'mp3',
      'ogg',
      'm4a',
      'aac',
      'flac',
      'amr',
      'pdf',
      'zip',
      'gz',
      'bz2',
      '7z',
      'dmg',
      'iso',
      'xz',
      'dll',
      'exe',
      'msi',
      'app',
      'deb',
      'rpm',
      'bin',
      'sh',
      'tar',
      'tgz',
      'bz2',
      '7z',
      'apk',
      'aar',
      'aar',
      'aab',
    ],
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
  },
};
