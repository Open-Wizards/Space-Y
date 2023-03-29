import Router from 'express';
import { getRockets } from '../controllers/rockets.controllers';

const rocketsRouter = Router();

rocketsRouter.get('/', getRockets);


export default rocketsRouter;