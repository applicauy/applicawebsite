/** @type {import('next').NextConfig} */
const nextConfig = {
    // Esto habilita la compilación estática al ejecutar `npm run build`. No funciona con
    // esta solución por el uso de funcionalidades dinámicas (las cookies por ejemplo).
    // output: "export"
    // Teóricamente esto es requerido para publicarlo en Azure, ya que se hace uso del archivo
    // server.js que produce para tenerlo como punto de inicio con nodejs.
    output: "standalone"
};

export default nextConfig;
