var path = require("path");
module.exports = {
    context: __dirname,
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: __dirname + "/src/public/javascript",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
           exclude: /(node_modules|server|public)/,
            loader: 'babel'
            
        }]
    }
}