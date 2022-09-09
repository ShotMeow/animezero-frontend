/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	images: {
		domains: ['st.kp.yandex.net', 'shikimori.one']
	},
	env: {
		API_URL: process.env.API_URL
	}
}

module.exports = nextConfig
