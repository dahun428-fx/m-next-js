/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const nextConfig = {
    // reactStrictMode: false,
    async rewrites() {
        return [
            {
                source : '/api/s1/vona2/token/check',
                destination : 'https://local.misumi-ec.com/vona2/token/check/',
                // destination : 'https://stg0-kr.misumi-ec.com/vona2/token/check',
            },
            // {
            //     source : '/api/v1/category/search',
            //     destination : `https://${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/search`
            // }
            // {
            //     source : '/api/v1/brand/search',
            //     destination : `https://${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/search`,
            // }
        ];
    },
    
}
// const withStylus = require('@zeit/next-stylus');
// module.exports = withPlugins([
//     [withStylus, {}],
// ], nextConfig);

// module.exports = phase => {
//     const withStylus = require('@zeit/next-stylus');
//     return withStylus(nextConfig); 
// }
// const withStylus = require('@zeit/next-stylus');
// module.exports = withStylus({
//     // cssModules: true
// });
module.exports = nextConfig
// module.exports = withStylus({
    // cssModules: true
// });
