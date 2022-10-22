import mongoose from 'mongoose';
import ConfigEnvironment from '../environment/environment';

class Connection {

    public db = new ConfigEnvironment();

    async connect() {
        await mongoose.connect(this.db.envConfig().databaseConfig.dbUrl || '');
    }

}

export default Connection;