const CracoAlias = require("craco-alias")

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components",
          "@actions": "./src/actions",
          "@services": "./src/services",
          "@mocks": "./src/__mocks__",
          "@reducers": "./src/reducers"
        }
      }
    }
  ],
  jest: {
    babel: {
        addPresets: true, /* (default value) */
        addPlugins: true  /* (default value) */
    },
    configure: { /* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */ },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => { return jestConfig; }
}
}