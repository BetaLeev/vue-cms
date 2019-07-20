const path = require('path')

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('api', path.resolve(__dirname, 'src/api'))
            .set('utils', path.resolve(__dirname, 'src/utils'))

        // const splitOptions = config.optimization.get('splitChunks')
        //     // 这里的 appStyles 中的 app 是入口文件的配置名称(从 vue inspect 中可以得到)
        // splitOptions.cacheGroups.appStyles = {
        //     name: 'styles',
        //     test: (m, c, entry = 'app') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
        //     chunks: 'all',
        //     minChunks: 1,
        //     enforce: true
        // }
        // config.optimization.splitChunks(splitOptions)


    },
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}