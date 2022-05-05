const app = require('./src/app')

/*
const https = require('https')
const fs = require('fs')
https.createServer({
    hey: fs.readFileSync(),
    cert: fs.readFileSync()
}, app).listen(app.get("port"), ()=>{
    console.log(`connected in the port ${process.env.PORT}`)
})
*/

app.listen(app.get('port'), () => {
  console.log(`connected in the port ${process.env.PORT}`)
})
