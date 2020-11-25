import { Response, NextFunction} from "express";
import {RequestInterface} from "../../interfaces/RequestInterface";

class Controller{
    public signUp : any = async(req: RequestInterface, res: Response, next: NextFunction): Promise<any> => {

    }
    public signIn: any = async(req: RequestInterface, res: Response, next: NextFunction): Promise<any> => {

    }
}

export default new Controller();
