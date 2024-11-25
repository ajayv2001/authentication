import mongoose from "mongoose";
export async function connect (){
    try {
        await mongoose.connect(process.env.mongo_URL!)
        const connection = mongoose.connection
        
        connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });
        connection.on("error", () =>{
            console.log("Error connecting to MongoDB");
            process.exit();
        })
        
    } catch (error) {
        console.error("something went");
        console.error(error);
        
    }
}