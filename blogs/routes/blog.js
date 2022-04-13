
const express = require('express');

const router = express.Router();

const {MongoClient} = require('mongodb');

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    
    res.render('home',{
      author:"checked"
    })
  })
  // router.get('/blog', (req, res) => {
  //   // res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
  //   res.render('blogHome',{
  //   blogs:blogs
  //   });
  // });
  // router.get('/blogpage/:slug', (req, res) => {
  //     let myBlog = blogs.filter(e=>{
  //         return e.slug ==req.params.slug;
  //     })
  //     console.log(myBlog);

  //   // res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
  //   res.render("blogpage.handlebars",{
  //     title:myBlog[0].title,
  //     content:myBlog[0].content
  //   })

  // })
  router.post('/success',(req,res)=>{
    async function main(){
      /**
       * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
       * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
       */
      const uri = "mongodb://localhost:27017/Blog";
   
  
      const client = new MongoClient(uri);
   
      try {
          // Connect to the MongoDB cluster
          await client.connect();
   
          // Make the appropriate DB calls
          // 1 await  listDatabases(client);
          await createListing(client,{
              name:req.body.name,
              email:req.body.email,
              city:req.body.city
              
              })
    
      } catch (e) {
          console.error(e);
      } finally {
          await client.close();
      }
  }
  
main().catch(console.error);
    

    res.render('success.handlebars');
  })
  router.get('/show',(req,res)=>{
    
    
    async function main(){
  
      const uri = "mongodb://localhost:27017/Blog";
      const client = new MongoClient(uri);
      
      try {
          await client.connect();
        const data = await findListing(client);
       
        res.render('show',{
          obj:data
        });
       
    
      } catch (e) {
          console.error(e);
      } finally {
          await client.close();
      }
  }
  main().catch(console.error);
  })
  router.get('/delete/:name',(req,res)=>{
    let name = req.params.name
    console.log(name);
    async function main(){
  
      const uri = "mongodb://localhost:27017/Blog";
      const client = new MongoClient(uri);
      
      try {
          await client.connect();
        await deleteListing(client,name);
       
      
    
      } catch (e) {
          console.error(e);
      } finally {
          await client.close();
      }
  }
  main().catch(console.error);
  res.redirect('/show')
  })
router.get('/upd/edt/:email',(req,res)=>{

  let email = req.params.email

  console.log(email);
async function main(){
  
  const uri = "mongodb://localhost:27017/Blog";
  const client = new MongoClient(uri);
  
  try {
      await client.connect();
      const data = await findOneListingByName(client,email);
     
      res.render('edit',{
        name:data.name,
        email:data.email,
        city:data.city
      })
  
  

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}
main().catch(console.error);


})
router.post('/update/:email',(req,res)=>{
let email = req.params.email;
console.log(email);
async function main(){
  
  const uri = "mongodb://localhost:27017/Blog";
  const client = new MongoClient(uri);
  
  try {
      await client.connect();
      await updateListingByName(client,email,{
        name:req.body.name,
        email:req.body.email,
        city:req.body.city
        
        })
      res.redirect('/show');
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}
main().catch(console.error);

})
  async function createListing(client,newListing){
    const results = await client.db('Blog').collection('listings and reviews')
    .insertOne(newListing);
    console.log(`entitiy entered successfully with ${results.insertedId}`);
    
    }
    async function findListing(client){
      const results = await  client.db('Blog').collection('listings and reviews').find({}).toArray();
  if(results){
    console.log(`Found a listing in the collection `);
    // console.log(results);
    return results;
  }
  else {
    console.log(`No listings found `);
}
    }

    async function deleteListing(client, name) {
      const result = await client.db("Blog").collection("listings and reviews")
              .deleteOne({ name : name });
      console.log(`${email}  deleted.`);
  }
  async function updateListingByName(client,nameOfListing,updateListing){
    const result = await client.db('Blog').collection('listings and reviews').
    updateOne({email:nameOfListing},{$set:updateListing});
    console.log(result.matchedCount);
    console.log(result.modifiedCount);

}
async function findOneListingByName(client , nameOfListing){
  const results = await  client.db('Blog').collection('listings and reviews').findOne({email:nameOfListing});
if(results){
console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
console.log(results);
return results
}
else {
console.log(`No listings found with the name '${nameOfListing}'`);
}
}
  module.exports = router