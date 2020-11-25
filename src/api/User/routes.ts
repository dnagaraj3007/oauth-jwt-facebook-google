import expPromiseRouter from 'express-promise-router';
import passport from 'passport';
import Controller from './controller';
import Validator from './validator';


const router = expPromiseRouter();

class Routes{

    public register = () : any =>{
        try {
            var profileSchema = Validator.profile;
            router.post('/signup', Validator.validateSchema(profileSchema), Controller.signUp);
            router.post('/signin/username', Controller.signIn);
            router.post('/user/resource', passport.authenticate('jwt', {session: false}), Controller.accessResource);
            return router;
        }catch(e){
            console.log(e);
        }
    }

}

export default new Routes();


