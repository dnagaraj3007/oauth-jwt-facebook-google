import joi from 'joi';
import {RequestInterface} from '../../interfaces/RequestInterface'
import {Response, NextFunction} from "express";

class Validator{

    public profile: any = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required().min(3).max(10)
    });

    public validateSchema: any = (schema : any) =>{
        return (req: RequestInterface, res: Response, next: NextFunction)=>{
            const result = schema.validate(req.body);

            if(result.error){
                res.status(500).json(result.error)
            }
            if(!req.value){
                req.value={}
            }
            req.value.body = result.value;
            next();
        }
    }


}

export default new Validator();




