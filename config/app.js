const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,
    htmlmin: {
        collapseWhitespace: isProd,
    },
    pug: {
        pretty: isDev,
    },
    webpack: {
        mode: isDev ? 'production' : 'development',
        resolve: {
            alias: {
            //   'jquery-ui': 'jquery-ui/dist/jquery-ui.js',
              'jquery-ui': 'jquery-ui-dist/jquery-ui.js',
            }
        }
    },
    imagemin: {
        verbose: true,
    },
    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg'],
    },
}