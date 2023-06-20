const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    optimizeFonts: false,
    trailingSlash: true,
}