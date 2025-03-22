/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
    },
    {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin',
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    }
];

const nextConfig = {
    // Esto habilita la compilación estática al ejecutar `npm run build`. No funciona con
    // esta solución por el uso de funcionalidades dinámicas (las cookies por ejemplo).
    // output: "export"
    // Teóricamente esto es requerido para publicarlo en Azure, ya que se hace uso del archivo
    // server.js que produce para tenerlo como punto de inicio con nodejs.
    output: "standalone",
    poweredByHeader: false,
    images: {
        domains: ['localhost', 'fantastic-paradise-ff2101feee.media.strapiapp.com']
    },
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: securityHeaders,
          },
        ];
    }
};

export default nextConfig;
