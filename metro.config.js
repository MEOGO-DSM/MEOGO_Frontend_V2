/* Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: {sourceExts, assetExts},
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);

// module.exports = {
//   resolver: {
//     assetExts: [
//       'bin',
//       'svg',
//       'png',
//       'jpg',
//       'jpeg',
//       'gif',
//       'webp',
//       'bmp',
//       'tiff',
//       'ico',
//       'ttf',
//       'otf',
//       'woff',
//       'woff2',
//       'mp4',
//       'mpg',
//       'mpeg',
//       'm4v',
//       'mov',
//       'mkv',
//       'webm',
//       'avi',
//       'ogv',
//       '3gp',
//       '3g2',
//       'ts',
//       'srt',
//       'vtt',
//       'wav',
//       'mp3',
//       'ogg',
//       'm4a',
//       'aac',
//       'flac',
//       'amr',
//       'pdf',
//       'zip',
//       'gz',
//       'bz2',
//       '7z',
//       'dmg',
//       'iso',
//       'xz',
//       'dll',
//       'exe',
//       'msi',
//       'app',
//       'deb',
//       'rpm',
//       'bin',
//       'sh',
//       'tar',
//       'tgz',
//       'bz2',
//       '7z',
//       'apk',
//       'aar',
//       'aar',
//       'aab',
//     ],
//     sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
//   },
// };
