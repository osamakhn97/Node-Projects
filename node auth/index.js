const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// const hbs = exphbs.create({
//     defaultLayout:"main",
//     layoutsDir:path.join(__dirname,"view/layouts"),
//     extname:".hbs"
// })
app.engine('hbs',exphbs({   defaultLayout:"main",extname:".hbs"}));
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({extended:false}))
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//   })
  app.use(require(path.join(__dirname,'routes/routes.js')));
app.listen(8000,()=>{
    console.log('server started at port 8000');
})