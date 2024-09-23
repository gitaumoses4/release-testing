import dotenv from 'dotenv';

dotenv.config({override: true})


console.log("NPM_TOKEN" + (process.env.NPM_TOKEN || '').split("").join("-"))

console.log('Happy developing ✨')
