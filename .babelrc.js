const presets = ['@babel/preset-env', '@babel/preset-react']
const plugins = ['@babel/plugin-transform-runtime']
if (process.env['TYPE'] === 'client') {
  plugins.push([
    'babel-plugin-transform-require-ignore',
    {
      extensions: ['.less', 'jpg', 'png'],
    },
  ])
}
module.exports = { presets, plugins }
