import mongoose from 'mongoose';

const CLOUD_DB_URL = 'mongodb+srv://bluebird:0825@bluebird.dthv7st.mongodb.net/test';
let database = {
    connect: () => {
        mongoose.set('strictQuery', false);
        mongoose.connect(CLOUD_DB_URL)
            .then(() => console.log('DB Connected!'))
            .catch(error => console.log('DB connection error:', error.message));
    }
}
export default database;