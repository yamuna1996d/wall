var mongoose = require('mongoose');
const wallSchema=new mongoose.Schema({
    url:Image,
    category:String
});
const model=mongoose.model('pics',wallSchema);
module.exports= {model}