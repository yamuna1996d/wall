var mongoose = require('mongoose');
const wallSchema=new mongoose.Schema({
    url:String,
    category:String
});
const model=mongoose.model('pics',wallSchema);
module.exports= {model}