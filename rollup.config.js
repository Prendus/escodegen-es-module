const rollupPluginNodeResolve = require('rollup-plugin-node-resolve');
const rollupPluginCommonJS = require('rollup-plugin-commonjs');
const rollupPluginNodeBuiltins = require('rollup-plugin-node-builtins');
const rollupPluginNodeGlobals = require('rollup-plugin-node-globals');
const rollupPluginJSON = require('rollup-plugin-json');

export default {
    input: 'node_modules/escodegen/escodegen.js',
    output: {
        file: 'escodegen.js',
        format:'es'
    },
    plugins: [
        rollupPluginJSON(),
        rollupPluginNodeResolve({
            preferBuiltins: false,
            browser: true
        }),
        rollupPluginCommonJS(),
        rollupPluginNodeBuiltins(),
        rollupPluginNodeGlobals()
    ]
}
