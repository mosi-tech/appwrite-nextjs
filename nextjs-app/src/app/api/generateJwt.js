import appwriteExecution from './appwriteExecution'

export default async function handler(input) {
    try {
        const execution = await appwriteExecution(input)
        console.log(execution)
        if (execution.response) {
            console.log(execution.response)
            return JSON.parse(execution.response).jwt
        } else if (execution.error) {
            console.log(execution.error)
        }
    } catch(err) {
        console.log(err)
    }
}