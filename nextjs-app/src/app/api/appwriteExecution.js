import appwriteExecutionHelper from 'appwrite-app'
import {Client, Functions} from 'node-appwrite'
const client = new Client();
const functions = new Functions(client);

client
  .setEndpoint('http://localhost/v1') 
  .setProject('YOUR_PROJECT_ID')      
  .setKey('YOUR_API_KEY');            


export default async function appwriteExecution(functionId, input) {
    //If Production, it will go to server on appwrite via network
    let f = functions.createExecution
    
    if (process.env.NODE_ENV == 'development') {
        // If run on development mode,
        // It will use local executor, function will get executed existing server
        // Use npm link ../appwrite-app (to use this module)
        // This brings appwriteExecutionHelper.createExecution local helper. See implementation for details
        // This avoid deployments and can be used for quicker development.
        console.log("Running in development env")
        f = appwriteExecutionHelper.createExecution
    }

    return f(functionId, JSON.stringify({ input }))
} 