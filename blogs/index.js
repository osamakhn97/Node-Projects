const express = require('express')
const path = require('path')
const app = express()
const bodyPArser = require('body-parser');
var exphbs  = require('express-handlebars');
const { options } = require('./routes/blog');
const hbs = exphbs.create({
  defaultLayout:'main',
  layoutsDir:path.join(__dirname,'views/layouts'),

  helpers:{
    cal:function(value){
      return value+7

    },
    check:function(value,options){
      if(value == 'Karachi'){
        return `  <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Select City</legend>
        <div class="col-sm-10">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="city" id="gridRadios1" value="Rawalpindi"
                    >
                <label class="form-check-label" for="gridRadios1">
                    Rawalpindi
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="city" id="gridRadios2" value="Islamabad">
                <label class="form-check-label" for="gridRadios2">
                    Islamabad
                </label>
            </div>
             <div class="form-check">
                <input class="form-check-input" type="radio" name="city" id="gridRadios2" value="Karachi" checked>
                <label class="form-check-label" for="gridRadios2 ">
                    Karachi
                </label>
            </div>

        </div>
    </fieldset>`
      }
      else if(value == "Rawalpindi"){
return `  <fieldset class="row mb-3">
<legend class="col-form-label col-sm-2 pt-0">Select City</legend>
<div class="col-sm-10">
    <div class="form-check">
        <input class="form-check-input" type="radio" name="city" id="gridRadios1" value="Rawalpindi"
            checked>
        <label class="form-check-label" for="gridRadios1">
            Rawalpindi
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="city" id="gridRadios2" value="Islamabad">
        <label class="form-check-label" for="gridRadios2">
            Islamabad
        </label>
    </div>
     <div class="form-check">
        <input class="form-check-input" type="radio" name="city" id="gridRadios2" value="Karachi">
        <label class="form-check-label" for="gridRadios2">
            Karachi
        </label>
    </div>

</div>
</fieldset>`

      }
      else if (value == "Islamabad"){

        return `  <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Select City</legend>
        <div class="col-sm-10">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="city" id="gridRadios1" value="Rawalpindi"
                    >
                <label class="form-check-label" for="gridRadios1">
                    Rawalpindi
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="city" id="gridRadios2" value="Islamabad" checked>
                <label class="form-check-label" for="gridRadios2">
                    Islamabad
                </label>
            </div>
             <div class="form-check">
                <input class="form-check-input" type="radio" name="city" id="gridRadios2" value="Karachi">
                <label class="form-check-label" for="gridRadios2">
                    Karachi
                </label>
            </div>

        </div>
    </fieldset>`
      }
      // return ` <h2> ${ options.fn({test:value})} </h2>`
      // return `<input type="radio" name="option" ${ options.fn({test:value})} >`
    }
  }
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
const port = 3002
app.use(bodyPArser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"static")))
app.use('/json',express.static(path.join(__dirname,"static")))

app.use(require(path.join(__dirname,'routes/blog.js')))


app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})