module.exports = api => {
    api.cache(true)
    const presets = [["@babel/preset-env", {
        "targets": {"node": 20},
        "modules": "commonjs"
    }]]
    const plugins = ["@babel/plugin-transform-modules-commonjs"]

    return { presets, plugins }
}