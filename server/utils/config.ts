import dotEnv from 'dotenv';
import logger from './logger';

dotEnv.config();

interface IConfig {
  PORT: number | string;
  JWT_SECRET: string;
  [key: string]: string | number;
}

const config: IConfig = {
  PORT: process.env.PORT! || 8888,
  JWT_SECRET: process.env.JWT_SECRET! || 'secret',
};

export function checkEnvironmentVariables() {
  Object.keys(config).forEach((key: string) => {
    if (!config[key]) {
      logger.error(`Environment variable ${key} is not defined.`);
    }
  });
}

export default config;