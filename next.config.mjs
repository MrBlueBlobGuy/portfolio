/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['ghchart.rshah.org', 'victoreke.com'],
      dangerouslyAllowSVG: true,
    },
}

export default nextConfig;