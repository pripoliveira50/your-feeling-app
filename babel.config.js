module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',

        {
          root: './',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@config': './src/config',
            '@utils': './src/utils',
            '@assets': './assets',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@global': './src/global',
            '@routes': './src/routes',
            '@context': './src/context',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
