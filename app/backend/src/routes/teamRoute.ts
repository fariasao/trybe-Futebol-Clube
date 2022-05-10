import { Router } from "express";
import TeamController from '../controllers/teamController';

 const teamRouter = Router();

 const teamController = new TeamController();

 teamRouter.get('/', teamController.getAll);
 teamRouter.get("/:id", teamController.getById ); // prox req

 export default teamRouter;