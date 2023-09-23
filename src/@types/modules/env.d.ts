export {}

// Type declerations for process.env
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'production' | 'development',
            PORT: number,
            npm_package_version: string,
            CONNECTION_URI: string,
            /* Panel */
            PANEL_JWT: string,
            PANEL_USERNAME: string,
            PANEL_PASSWORD: string  
        }
    }
}
