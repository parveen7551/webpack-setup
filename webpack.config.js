/**
 * Created by intelligrape on 3/5/17.
 */
const config = {
    entry : './src/main.js' ,
    output: {
        filename: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }

};

module.exports = config;