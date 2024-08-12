const generateJwtImpl = require('./functions/generateJwt')
console.log(generateJwtImpl)

const FUNCTION_MAPPER = {"FUNCTION_ID": generateJwtImpl}

//Mocking createExecution. this will directly call the function 
const createExecution = async (functionId, body, async = false, xpath='', method='POST') => {
    console.log({functionId, body, async, xpath, method})
    try {
        return FUNCTION_MAPPER[functionId]({
            req: {body, method}, 
            res:{
                json: async(obj) => {
                    console.log(obj)
                    return {response: JSON.stringify(obj)}
                }
            },
            error: console.error,
            log: console.log
        })
        
    } catch (err) {
        console.log(err)
        return {error: err}
    }
}

module.exports = {createExecution}