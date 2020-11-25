import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './api/User/routes';


class Server{
    public start= async() =>{
        try {
            const port = process.env.PORT || 3000
            const app = express();
            app.use(bodyParser.json());
            app.use(cors());
            app.use(morgan('dev'));
            await app.use('/api/v1', userRoutes.register())
            await app.listen(port, () => {
                console.log(`[server]: Server is running at ${port}`);
            });
        }catch(error){
            console.log("Error starting server", error);
        }
    }
}

export default new Server();
