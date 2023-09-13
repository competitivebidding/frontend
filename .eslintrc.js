const { configure, presets } = require('eslint-kit')

module.exports = configure({
    mode: 'only-errors',
    presets: [
        presets.react({
            // (optional) Allows to specify React version
            version: 'detect',
            // (optional) Allows using JSX without importing `React`
            newJSXTransform: false
        }),
        presets.imports(),
        presets.typescript(),
        presets.prettier(),
        presets.node(),
        presets.react({ version: '18.0' }),
    ],
    extend: {
        root: true
    }
})
