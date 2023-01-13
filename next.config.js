/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,// 초기 세팅에 이미 포함된 내용
  swcMinify: true,      // 코드 경량화 작업에 Terser가 아닌 SWC를 사용
  // experimental: {
  //   urlImports:['https://cdn.tailwindcss.com'],
  // }
}

module.exports = nextConfig
