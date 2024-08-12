import appwriteExecutionHelper from 'appwrite-app'
import {Client, Functions} from 'node-appwrite'
const client = new Client();
const functions = new Functions(client);

client
  .setEndpoint('http://localhost/v1') 
  .setProject('YOUR_PROJECT_ID')      
  .setKey('YOUR_API_KEY');            


export default async function appwriteExecution(input) {
    //If Production, it will go to server on appwrite via network
    if (process.env.NODE_ENV == 'production') {
        return functions.createExecution('FUNCTION_ID', JSON.stringify({ input }));
    } else {
        // If run on development mode,
        // It will use local executor, function will get executed existing server
        // Use npm link ../appwrite-app
        // This brings appwriteExecutionHelper.createExecution local helper. See implementation for details
        // This avoid deployments and can be used for quicker development.
        console.log("Running in development env")
        return appwriteExecutionHelper.createExecution('FUNCTION_ID', JSON.stringify({ input }))
    }
} 