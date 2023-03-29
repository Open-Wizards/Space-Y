/** @format */

import redisClient from '../index';
import logger from '../utils/logger';


//As the Data is pretty non changing data we can store it in the cache for a day


//Keeping it pretty simple here by using the redis client directly.

// Setting the cache

export async function setCache(key: string, value: any) {
  return await redisClient.set(key, JSON.stringify(value));
}


export async function setCacheList(key: string, value: any) {
  if(Array.isArray(value)){
    value.forEach(async (item: any) => {
      await redisClient.lPush(key, JSON.stringify(item));
    });
    return;
  }
  return await redisClient.lPush(key, JSON.stringify(value));

 
}

//retrieving the cache
export async function getCacheList(key: string) {
  //checking if the key exists
  const exists = await redisClient.exists(key);
  if (!exists) {
    logger.info('Cache miss');
    return null;
  }
  const data = await redisClient.lRange(key, 0, -1);
  if (data.length === 0) {
    logger.info('Cache miss');
    return null;
  }
  return data.map((item: any) => JSON.parse(item));
 
}

export async function getCache(key: string) {
  const data = await redisClient.get(key);
  if (!data) {
    logger.info('Cache miss');
    return null;
  }
  return JSON.parse(data);
}