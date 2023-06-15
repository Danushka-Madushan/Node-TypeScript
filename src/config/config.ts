export const PORT = 8080

export const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: process.env.PORT,
    NPM_VERSION: process.env.npm_package_version
}
