import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";

export default {
    input: ["./src/index.js"],
    output: [
        {
            file: "dist/Utils.es.js",
            format: "es",
        },
        {
            file: "dist/Utils.umd.min.js",
            format: "umd",
            name: "Utils",
        },
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        terser(),
        babel({
            exclude: "**/node_modules/**",
            runtimeHelpers: true, // 配置runtime，不设置会报错
        }),
        json(),
    ],
};
