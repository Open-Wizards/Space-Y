import express,{Application} from 'express';
import { createClient, RedisClientType } from 'redis';
import config, { checkEnvironmentVariables } from './utils/config';
import logger from './utils/logger';
import rocketsRouter from './src/routes/rockets.routes';


const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


checkEnvironmentVariables();
app.use('/api', rocketsRouter) ;


const redisClient: RedisClientType = createClient();
//Simply connect to the redis server
redisClient.connect().then(() => {
  logger.info('Redis client connected');
});
redisClient.on('error', (err: any) => {
  logger.error(`Something went wrong ${err}`);
});


app.listen(config.PORT, () => {
  logger.info(`Server is running on port ${config.PORT}`);
})
  .on('error', (err) => {
    logger.error(err);
  });


export default redisClient;