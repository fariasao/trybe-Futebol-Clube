import { Router } from "express";
import LeaderboardController from "../controllers/leaderboardController";

const leaderboardRouter = Router();

const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/home', leaderboardController.homePoints);

leaderboardRouter.get('/away', leaderboardController.awayPoints);

leaderboardRouter.get('/', leaderboardController.allGames);

export default leaderboardRouter;