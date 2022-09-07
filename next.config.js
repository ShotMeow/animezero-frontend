/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		API_URL: process.env.API_URL
	},
	webpack: config => {
		config.resolve.alias['@'] = path.resolve(__dirname);
		return config;
	}
}

module.exports = nextConfig
