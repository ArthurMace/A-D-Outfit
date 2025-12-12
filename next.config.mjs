const nextConfig = {
  // Configuração para exportar como site estático
  output: 'export',
  images: {
    unoptimized: true, // Necessário para exportação estática
    remotePatterns: [{ protocol: "https", hostname: "*" }]
  }
};
export default nextConfig;
