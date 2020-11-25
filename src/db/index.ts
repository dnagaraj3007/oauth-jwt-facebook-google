import mongoose from 'mongoose';
class Db{
    public connect = async(): Promise<void> =>{
        await mongoose.connect("mongodb://localhost:27017/authentication", {
            'useNewUrlParser': true
        }).then(() => {
            console.log('Successfully connected to the database');
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        });
    }
}

export default new Db();
