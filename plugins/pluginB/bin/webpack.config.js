const path = require("path");
const webpack = require("webpack");

const src = path.resolve(__dirname, "../src");
const entry = path.resolve(src, "index.ts");
const dist = path.resolve(__dirname, "../dist");

module.exports = (_, argv) => {
  const IS_PRODUCTION = argv.mode === "production";
  const WATCH = argv.watch === true;

  console.log("1", WATCH);
  console.log("2", IS_PRODUCTION);

  return {
    entry,
    mode: "development",
    output: {
      path: dist,
      filename: "index.js",
      libraryTarget: "commonjs2",
    },
    resolve: {
      extensions: [".js", ".json", ".ts"],
      alias: {
        "@": src,
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts)x?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "swc-loader",
            options: {
              sourceMap: !IS_PRODUCTION,
              minify: IS_PRODUCTION,
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: false,
                },
              },
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          IS_PRODUCTION ? "production" : "development",
        ),
      }),
    ],
    devtool: IS_PRODUCTION ? false : "eval-cheap-module-source-map",
    watch: WATCH,
  };
};
