// const jwt = require('jsonwebtoken');
const {Client, Databases} = require('node-appwrite');

const client = new Client();

client
  .setProject(process.env.APPWRITE_PROJECT_ID)      
  .setKey(process.env.APPWRITE_BACKEND_KEY);

const databases = new Databases(client);

module.exports = async function({req, res, log, error}) {
    const method = req.method;
     
    if (method != 'POST') {
      throw('method not supported')
    }

    const body = req.body
    log("ENV:", process.env)
    // const document = await databases.getDocument('some_db', {
    //       userId: input.id
    // });
    
    const secretKey = 'YOUR_SECRET_KEY';
    const jwt = 'random-output'

    return res.json({
      jwt: jwt
    });
};
  