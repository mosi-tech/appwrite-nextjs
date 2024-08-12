import appwriteExecutionHelper from 'appwrite-app'
import {Client, Functions} from 'node-appwrite'
const client = new Client();
const functions = new Functions(client);

client
  .setEndpoint('http://localhost/v1') 
  .setProject('YOUR_PROJECT_ID')      
  .setKey('YOUR_API_KEY');            


export default async function appwriteExecution(input) {
    if (process.env.NODE_ENV == 'production') {
        return functions.createExecution('FUNCTION_ID', JSON.stringify({ input }));
    } else {
        console.log("Running in development env")
        return appwriteExecutionHelper.createExecution('FUNCTION_ID', JSON.stringify({ input }))
    }
} 