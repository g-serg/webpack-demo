  module.exports = function(init) {
    var paths = init.paths,
      options = init.options;

    return {
      module: {
        rules: [
          {
            test: /\.js$/,
            include: paths,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: options,
          },
        ],
      },
    };
  };