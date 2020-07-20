const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

const output_dir = "public";

module.exports = {
    target: "web",
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, output_dir)
    },
    devServer: {
        contentBase: output_dir,
        host: "0.0.0.0"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
        extensions: [".js", ".vue", ".ts"],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    }
};
