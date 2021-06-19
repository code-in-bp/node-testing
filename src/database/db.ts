import * as mongoose from 'mongoose';

const dbCredentials = require('../database/config.json');

export const dbConnect = async () : Promise<any> => {
    console.log("DB credentials " + dbCredentials.mongoDBLink);


    await mongoose.connect(dbCredentials.mongoDBLink, {
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