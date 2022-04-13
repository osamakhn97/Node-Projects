const express = require('express')
const path = require('path')
const app = express()
const port = 3002
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
// mongoose.connect('mongodb://localhost:27017/Blog',{
//     useNewUrlParser:true,
   
// })
// .then(()=>{
//     console.log("successfully connected to mongodb server");
// })

// app.listen(port, () => {
//     console.log(`Blog app listening at http://localhost:${port}`)
//   })
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
        // await createListing(client,{
        //     name:"osama khan",
        //     summary:"a charming loft in paris",
        //     badrooms:1,
        //     bathrooms:1
        // })
        // 2 await createMultipleListing(client,[{
        //     name:"osama khan",
        //     summary:"a charming loft in paris",
        //     badrooms:1,
        //     bathrooms:1
        // },
        // {
        //     name:"Haris",
        //     summary:"a charming loft in paris",
        //     badrooms:2,
        //     bathrooms:5
        // },
        // {
        //     name:" khan",
        //     summary:"a charming loft in paris",
        //     badrooms:7,
        //     bathrooms:1,
        //     office:1
        // }]);

        // 3 await findOneListingByName(client,"Haris");
        // 4 await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
        //     minimumNumberOfBedrooms: 2,
        //     minimumNumberOfBathrooms: 5,
        //     maximumNumberOfResults: 5
        // });
        // 5 await updateListingByName(client,"Haris",{
        //     last_review: new Date(),
        //     bedrooms:9
        // })
        // 6 await upsurtListingByName(client,"Syed Basit",{
        //     name:"Syed Basit",
        //     summary:"Dhok ratta",
        //     bedrooms:23,
        //     last_review: new Date(),
            
        // })
        // 7 await updateAllListingsToHavePropertyType(client);
        // 8 await deleteListingByName(client,' khan');
        // 9 await deleteListingsBedsLessThan(client,5);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);

async function createListing(client,newListing){
const results = await client.db('Blog').collection('listings and reviews')
.insertOne(newListing);
console.log(`entitiy entered successfully with ${results.insertedId}`);

}
async function createMultipleListing(client,newListing){
    const results = await client.db('Blog').collection('listings and reviews')
    .insertMany(newListing);
    console.log(`${results.insertedCount} entities have been added in the database`)
    console.log(results.insertedIds);
    
    }
    async function findOneListingByName(client , nameOfListing){
      const results = await  client.db('Blog').collection('listings and reviews').findOne({name:nameOfListing});
  if(results){
    console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
    console.log(results);
  }
  else {
    console.log(`No listings found with the name '${nameOfListing}'`);
}
    }

    async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client,{
        minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
    }={}){
        const cursors = client.db('Blog').collection('listings and reviews').find(
            {
                bedrooms:{ $gte:minimumNumberOfBedrooms},
                bathrooms:{$gte:minimumNumberOfBathrooms}
            }
        )
        .sort({last_review:-1})
        .limit(maximumNumberOfResults)
       
const results = await cursors.toArray();
console.log(results);
if(results.length>0){
    console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
results.forEach((result,i)=>{
    let date = new Date(results.last_review);
    console.log();
    console.log(`${i + 1}. name: ${result.name}`);
    console.log(`   _id: ${result._id}`);
    console.log(`   bedrooms: ${result.bedrooms}`);
    console.log(`   bathrooms: ${result.bathrooms}`);
    console.log(`   most recent review date: ${date}`);
});
}else{
    console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
}

    }    
async function updateListingByName(client,nameOfListing,updateListing){
    const result = await client.db('Blog').collection('listings and reviews').
    updateOne({name:nameOfListing},{$set:updateListing});
    console.log(result.matchedCount);
    console.log(result.modifiedCount);

}
async function upsurtListingByName(client,nameOfListing,updateListing){
    const result = await client.db('Blog').collection('listings and reviews').
    updateOne({name:nameOfListing},{$set:updateListing},{upsert:true});
    if(result.upsertedCount>0){
        console.log(`One document was inserted with the id ${result.upsertedId._id}`)
    }
    else{
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }

}
async function updateAllListingsToHavePropertyType(client){
    const result = await client.db('Blog').collection('listings and reviews')
    .updateMany({property_type:{$exists:false}},{$set:{property_type:"unknown"}});
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
async function deleteListingByName(client, nameOfListing) {
    const result = await client.db("Blog").collection("listings and reviews")
            .deleteOne({ name: nameOfListing });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
async function deleteListingsBedsLessThan(client, beds) {
    const result = await client.db("Blog").collection("listings and reviews")
        .deleteMany({ "bedrooms": { $lt: beds } });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`)
  })
