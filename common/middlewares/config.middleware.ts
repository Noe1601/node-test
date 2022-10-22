import cors from 'cors';
import express from 'express';

class ConfigMiddleware {

    setBasicMiddlewares(app: any) {
        app.use(cors());
        app.use(express.json());
    }
}

export default ConfigMiddleware;