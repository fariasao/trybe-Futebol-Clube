import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const matchesRouter = Router();

const matchesController = new MatchesController();

matchesRouter.get('/', matchesController.getAll);
matchesRouter.post('/', matchesController.createMatch);
matchesRouter.patch('/:id', matchesController.editMatch);
matchesRouter.patch('/:id/finish', matchesController.finishMatch);

export default matchesRouter;