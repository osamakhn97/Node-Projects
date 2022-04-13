const express = require('express')
const path = require('path')
const app = express();
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const port = 3001;
app.use(express.static(path.join(__dirname,'public')));
app.use('/about',express.static(path.join(__dirname,'public')));
app.use(require(path.join(__dirname,'routes/site.js')));

app.listen(port,()=>{
    console.log(`Blog app listening at http://localhost:${port}`);
})
