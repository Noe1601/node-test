import { DatabaseConfig } from "../models/database-config.model";

export interface Environment {
  databaseConfig: DatabaseConfig;

};

class ConfigEnvironment {

  envConfig() {
    const databaseConfig: DatabaseConfig = {
      dbUrl: process.env.DB_URL
    } as DatabaseConfig;
  
    return {
      databaseConfig,
    } as Environment;
  }
  
}

export default ConfigEnvironment;