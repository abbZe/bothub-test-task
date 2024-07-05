// eslint-disable-next-line unicorn/no-anonymous-default-export
export const config = () => ({
    mongodb: {
        uri: process.env.MONGO_DB_URI,
    },
    auth: {
        api: {
            clientID: process.env.AVITO_CLIENT_ID,
            clientSecret: process.env.AVITO_CLIENT_SECRET,
        },
    },
});
