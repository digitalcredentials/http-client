import pkg from './package.json' assert {type: 'json'};

export default [
  {
    input: './lib/index.js',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        preserveModules: true
      }
    ],
    external: Object.keys(pkg.dependencies).concat(['crypto', 'util'])
  },
  {
    input: './lib/agentCompatibility-browser.js',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        preserveModules: true
      }
    ],
    external: Object.keys(pkg.dependencies).concat(['crypto', 'util'])
  }
];
