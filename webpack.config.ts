import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import "webpack-dev-server";

interface EnvVariables {
  mode: "production" | "development";
  port: number;
}

export default (env: EnvVariables) => {
  const config = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
        {
          test: /\.css$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
    ],
    devtool: "inline-source-map",
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: env.port ?? 3000,
    },
  };
  return config;
};
