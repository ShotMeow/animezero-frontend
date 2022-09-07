/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		API_URL: process.env.API_URL
	},
	images: {
		domains: ['st.kp.yandex.net']
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.API_URL}/:path*`
			}
		]
	}
}

module.exports = nextConfig
