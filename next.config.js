/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'sangw.in', 'localhost', 'picsum.photos','sa-east-1.graphassets.com'],
  },
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: ['media.graphassets.com'],
//   },
// }

// module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: ['media.graphassets.com'],
//   },
// }

// module.exports = nextConfig


// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.example.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }

// module.exports = {
//   images: {
//     domains: ['media.graphcms.com','media.graphassets.com'],
//   }
// };