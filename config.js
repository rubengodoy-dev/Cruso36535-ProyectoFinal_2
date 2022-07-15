const admin = require('firebase-admin')
const serviceAccount = require("./DB/basefirebase-f378a-firebase-adminsdk-hjkcx-ca38a8cad4.json")

const MONGO_URI = "mongodb+srv://sa-dev:sa-dev@cluster0.iiyku.mongodb.net/mibase?retryWrites=true&w=majority&ssl=true"
const mongoose = require('mongoose')

const mongoConnection = async() =>{
    try{
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('MongoDB Atlas conectado')
    } catch(e){
        throw new Error(`Error en DB ${e.message}`);
    }
}


// Initialize Firebase
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://basefirebase-f378a-default-rtdb.firebaseio.com"
  });
console.log('Firebase conectado')
const firebaseConnection = admin.firestore()

module.exports = {   
    mongoConnection,
    firebaseConnection
}