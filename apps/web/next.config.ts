/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // Static export so the site can be served from GitHub Pages at
  // https://olitreadwell.github.io/uk-tech-for-good/.
  output: 'export',
  basePath: '/uk-tech-for-good',
};

export default nextConfig;
