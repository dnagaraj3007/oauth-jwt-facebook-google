import { Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';
import {RequestInterface} from "../../interfaces/RequestInterface";
import User from '../../models/user'



class Controller{
    private signToken(id: String): String {
       const token= jwt.sign({
            iss: 'NagaRaj',
            sub: id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate()+1)
        }, 'thisisasecret'); // should be pulled from environment variables.
       return token;
    }

    public signUp : any = async(req: RequestInterface, res: Response, next: NextFunction): Promise<any> => {

        const {email, password} = req.value.body;
        const userExists= await User.findOne({email});
        if(userExists){
           return res.status(403).json({
                error: "Email already exists"
            })
        }

        const user = new User({email, password});
        await user.save();
        const token = await this.signToken(user.id);
        res.status(201).json({token})
    }
    public signIn: any = async(req: RequestInterface, res: Response, next: NextFunction): Promise<any> => {

    }

    public accessResource: any = async(req: RequestInterface, res: Response, next: NextFunction): Promise<any> => {
        res.status(200).json({
            message: 'Secret route can be accessed'
        })
    }
}

export default new Controller();
