const config = {
    env: process.env.NODE_ENV || "development"
};
const devConfig = {
    db: "mongodb://localhost:27017/password-login",
    jwt_key: "myverysecuresecrer",
    port: 5007
};

const prodConfig = {
    db: process.env.MONGO_URI,
    jwt_key: "newsecret",
    port: process.env.PORT
};

const currentConfig = config.env === "production" ? prodConfig : devConfig;
module.exports = Object.assign({}, config, currentConfig);