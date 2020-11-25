import joi from 'joi';

class Validator{

    private registrationProfile: any = joi.object().keys({
        email: joi.string().required().email(),
        password: joi.string().required().min(3).max(10)
    });

    public validateBody: any = () =>{

    }






}




