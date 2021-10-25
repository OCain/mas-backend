import {Router} from 'express';
import { UserController } from './controller/UserController';
import { AuthenticateController } from './controller/AuthenticateController';
import { ActivyController } from './controller/ActivyController';
import { CourseUnitController } from './controller/CourseUnitController';
import authenticated from './middlewares/authenticated'

interface UserRequest {
    name: string,
    email: string,
    password: string
}

const userController = new UserController();
const activyController = new ActivyController();
const courseUnitController = new CourseUnitController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.get('/user', (request, response) => {
    const {nome, idade} = request.query;
    response.json({
        idade,
        nome
    });
});

routes.get('/user/:id/', (request, response) => {
    const {id} = request.params;
    response.json({
        userId: id
    });
});

routes.post('/user', userController.create);
routes.post('/auth', authenticateController.create);
routes.post('/activy', authenticated, activyController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);

export default routes;