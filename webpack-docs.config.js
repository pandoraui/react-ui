module.exports = require("./make-webpack-config")({
  entry: {
    app: "./docs/src/js/app.jsx",
    docs: "./docs/src/less/style.less"
    // 当 React 作为一个 node 模块安装的时候，
    // 我们可以直接指向它，就比如 require('react')
    //vendors: ['react','react-router']
  },
  debug: true,
  separateStylesheet: true,
  externals: {"react": "React", "react-dom": "ReactDOM"},
  path: "./docs/dist"
  //library: "app"
});
