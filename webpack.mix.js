const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    // .webpackConfig({
    //     rules: [{
    //         test: /\.s(c|a)ss$/,
    //         use: [
    //             'vue-style-loader',
    //             'css-loader',
    //             {
    //                 loader: 'sass-loader',
    //                 options: {
    //                     implementation: require('sass'),
    //                     fiber: require('fibers'),
    //                     indentedSyntax: true // optional
    //                 }
    //             }
    //         ]
    //     }],
    //     resolve: {
    //         alias: {
    //             '@': path.resolve('resources/assets/sass')
    //         }
    //     }
    // })
    .sass('resources/sass/app.scss', 'public/css');
