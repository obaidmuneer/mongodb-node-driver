import { MongoClient } from 'mongodb'
import MONGODB_URI from '../config/mongodb.mjs';

export const client = new MongoClient(MONGODB_URI)
console.log('mongodb connected');

const run = async () => {
    try {
        await client.connect()
    } catch (err) {
        console.log(err);
        await client.close()
        process.exit(1)
    }
}

run().catch(console.dir)

process.on('SIGINT', async () => {
    console.log('app is terminating');
    await client.close()
    process.exit(0)
})

//https://github.com/mInzamamMalik/vector-database-CRUD-mongodb/blob/main/mongodb.mjs