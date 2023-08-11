/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
            {
                source : '/api/s1/vona2/token/check',
                destination : 'https://local.misumi-ec.com/vona2/token/check/',
                // destination : 'https://stg0-kr.misumi-ec.com/vona2/token/check',
            },
            {
                source : '/auth/refresh/token',
                destination : 'https://stg0-kr.mauth.misumi-ec.com/api-auth-v1/auth/api/token/refresh',
            }
            // {
            //     source : '/api/v1/brand/search',
            //     destination : `https://${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/search`,
            // }
        ];
    }
}

module.exports = nextConfig
