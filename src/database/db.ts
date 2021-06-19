import mongoose from 'mongoose';
import { mongoDBLink } from '../database/config.json';

export const dbConnect = async () : Promise<any> => {
    console.log("DB credentials " + mongoDBLink);


    await mongoose.connect(mongoDBLink, {
            useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
    }).then(() => {
        console.log("connected to DB!");
    }).catch((e) => {
        console.log("Connection refused!");
        console.log(e);
    });
}