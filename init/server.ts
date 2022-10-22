import express, { Application } from 'express';
import ConfigMiddleware from '../common/middlewares/config.middleware';
import router from '../common/routes/user.routes';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }

    middlewares() {
        const configMiddlewares = new ConfigMiddleware();
        configMiddlewares.setBasicMiddlewares(this.app);
    }

    routes() {
        this.app.use('/api/v1/user', router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo el server en puerto ' + this.port);
        })
    }

}

export default Server;