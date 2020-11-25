import expPromiseRouter from 'express-promise-router';
import Controller from './controller';

const router = expPromiseRouter();

class Routes{

    public register = () : any =>{
        try {
            router.post('/signup', Controller.signUp);
            router.post('/signin/username', Controller.signIn);
            return router
        }catch(e){
            console.log(e);
        }
    }

}

export default new Routes();


