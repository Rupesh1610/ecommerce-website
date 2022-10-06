const mongoose = require('mongoose')
const app = require('./app')
const env = require('dotenv')
env.config({ path: 'backend/.env' })

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('mongo connnected'))
    .catch((err) => console.log(err))

app.listen(process.env.PORT, () => console.log('server is running on port', process.env.PORT))


//VqU7eOAfT4oWCiUL