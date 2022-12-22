// import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;
// // console.log("processmongo",process.env.MONGODB_URI)

// if(!MONGODB_URI){
//     throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
// }

// if(!MONGODB_DB){
//     throw new Error("Please define the MONGODB_DB database environment variable inside .env.")
// }

// let cached = global.mongo

// if(!cached){
//     cached = global.mongo = {conn: null, promise: null}
// }

// export async function connectToDatabase(){
//     if(cached.conn){
//         return cached.conn
//     }

//     if(!cached.promise){
//         const opts = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }

//         cached.promise = MongoClient.connect(MONGODB_URI,opts).then((client) => {
//             return {
//                 client,
//                 db: client.db(MONGODB_DB)
//             }
//         })
//     }
//     cached.conn = await cached.promise
//     return cached.conn
// }

// const MongoClient = require('mongodb').MongoClient;

export default async function connectToDatabase() {
    try{
        mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
        });
//         return {
//           client,
//           db: client.db(MONGODB_DB),
//         };
    }catch(err){
        console.log(err)
    }
}


// const MongoClient = require('mongodb').MongoClient;

// export default async function connectToMongo() {
//   const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true });
//   try {
//     await client.connect();
//     // return 
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.close();
//   }
// }


// connectToMongo()

import mongoose from "mongoose";

mongoose.connect(MONGODB_URI, {useNewUrl})




