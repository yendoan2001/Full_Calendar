import { Router } from 'express';
import EventController from "../controllers/event.controller";
const eventRouter = Router();
eventRouter.post('/',EventController.createEvent);
eventRouter.get('/', EventController.showEvent);

export default eventRouter;