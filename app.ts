import dotenv from 'dotenv';
import Connection from './config/db/connection-db';
import Server from './init/server';
dotenv.config();

const server = new Server();
server.listen();

const connection = new Connection();
connection.connect();