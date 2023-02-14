const router = require('express').Router();
const Artists = require('../models/Artists.js');


//JSON: /2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json
//XML: /2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY

router.get('/', async (req, res, next) => {
const{artist} = req.query
console.log(artist)
try{
const artistdata=await Artists.find({
    name:artist
})
if(artistdata.length==0){
    res.json( [
        'artistName1',
        'artistName2',
        'artistName3',
        'artistName4',
    ])
} else {
    res.json(artistdata)
}}
catch(error){
console.log(error.message)
}
});



module.exports=router;