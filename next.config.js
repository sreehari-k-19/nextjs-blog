/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['images.unsplash.com']
  }
}

module.exports = nextConfig
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//             protocol: 'https',
//             hostname: 'images.unsplash.com',
//             port: '',
//             pathname: '',
//         },
//       ],
//     },
//   }
