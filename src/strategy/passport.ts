import passport from 'passport';
import passportJwt from 'passport-jwt'
import {ExtractJwt} from 'passport-jwt';

import User from '../models/user'

class PassportStrategy{

    public register(){
        const jwtStrategy = passportJwt.Strategy;
        passport.use(new jwtStrategy({
                jwtFromRequest: ExtractJwt.fromHeader('authorization'),
                secretOrKey: 'thisisasecret' //should be taken from environment variable
            },
            async(payload, done)=>{
                try{
                    const user = await User.findById(payload.sub);
                    if(!user){
                        return done(null,false);
                    }
                    done(null, user);
                }catch(error){
                    done(error,false);
                }
            }))
    }
}

export default new PassportStrategy();


