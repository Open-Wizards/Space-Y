import { Request, Response } from 'express';
import http from '../../services/http.service';
import {  getCacheList, setCacheList } from '../../services/redis.service';

export async function getRockets(request: Request, response: Response,) {
  try {
    const cachedRockets = await getCacheList('rockets');
    if (cachedRockets!==null) {
      return response.status(200).json(cachedRockets);
    }
    const rockets = await http.get('/rockets');
    await setCacheList('rockets', rockets.data);
    response.status(200).json(rockets.data);
  } catch (err: any) {
    response.status(err.status ||500).json(err.message || 'Something went wrong');
  }
}


export async function getRocketsById(request: Request, response: Response) {
  try {
    const cachedRockets = await getCacheList('rockets');
    if (cachedRockets !== null) {
      return response.status(200).json(cachedRockets);
    }
    const rockets = await http.get('/rockets');
    await setCacheList('rockets', rockets.data);
    response.status(200).json(rockets.data);
  } catch (err: any) {
    response
      .status(err.status || 500)
      .json(err.message || 'Something went wrong');
  }
}
