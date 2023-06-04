export const DevelopmentLog = (log: string): void => {
    if (process.env.NODE_ENV === 'development') {
        console.log(log)
    }
}
