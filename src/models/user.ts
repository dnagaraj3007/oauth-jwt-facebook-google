import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    strategy:{
        type: String,
        enum: ['local', 'facebook', 'google']
    },
    email: {
        type: String,
        lowercase:true
    },
    password: {
        type: String,
    },
    userId: {
        type: String
    }
})

const User = mongoose.model('user', userSchema);
export default User;
