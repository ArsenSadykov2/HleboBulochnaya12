import path from 'path';
import {configDotenv} from "dotenv";

const rootPath = __dirname;
configDotenv();

const config = {
    rootPath,
    publicPath: path.join(rootPath, 'public'),
    db: 'mongodb://localhost/Bulochnaya12',
};

export default config;