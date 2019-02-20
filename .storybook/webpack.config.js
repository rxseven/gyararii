const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

// Regular expression
const regexCSSmodule = /\.module\.(scss|sass)$/;
const regexSASS = /\.(scss|sass)$/;
const regexStorybook = /\.stories\.jsx?$/;

// Full control mode and Storybook’s default config
const webpackConfig = (baseConfig, env, defaultConfig) => {
  // Common function to get style loaders
  const getStyleLoaders = (cssOptions, preProcessor = 'sass-loader') => {
    const loaders = [
      // Style loader
      {
        loader: require.resolve('style-loader')
      },

      // CSS loader
      {
        loader: require.resolve('css-loader'),
        options: cssOptions
      },

      // PostCSS loader
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009'
              },
              stage: 3
            })
          ],
          sourceMap: false
        }
      }
    ].filter(Boolean);

    // CSS Pre-processor
    if (preProcessor) {
      loaders.push({
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: false
        }
      });
    }

    return loaders;
  };

  // Extend the default configuration
  defaultConfig.module.rules.push(
    // Storybook Storysource addon
    {
      enforce: 'pre',
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            injectDecorator: true,
            parser: 'typescript',
            prettierConfig: {
              bracketSpacing: true,
              printWidth: 120,
              singleQuote: true,
              tabWidth: 2,
              trailingComma: 'es5'
            },
            uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
          }
        }
      ],
      test: regexStorybook
    },

    // SASS
    {
      exclude: regexCSSmodule,
      sideEffects: true,
      test: regexSASS,
      use: getStyleLoaders({
        importLoaders: 2,
        sourceMap: false
      })
    },

    // SASS and CSS Modules
    {
      test: regexCSSmodule,
      use: getStyleLoaders({
        getLocalIdent: getCSSModuleLocalIdent,
        importLoaders: 2,
        modules: true,
        sourceMap: false
      })
    }
  );

  return defaultConfig;
};

module.exports = webpackConfig;
