/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	images: {
		domains: ['st.kp.yandex.net']
	},
	env: {
		API_URL: process.env.API_URL
	}
}

module.exports = nextConfig
