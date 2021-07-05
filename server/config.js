import dotenv from 'dotenv';
dotenv.config({path:'./.env'});
export const config = {
    PORT : process.env.PORT || 8080,
    mongoDB:{
        url: process.env.MONGODB_URL_PROD || 'mongodb://localhost:27017/timeline_prod'
    },
    mongoDB_dev:{
        url: process.env.MONGODB_URL_DEV || 'mongodb://localhost:27017/timeline_dev'
    },
    mongoDB_test:{
        url: process.env.MONGODB_URL_TEST || 'mongodb://localhost:27017/timeline_test'
    },
    jwt_secret : process.env.JWT_SECRER || 'c41525a2b88944387e7d@25#%&c1f2',
    salt_rounds : 12
}

