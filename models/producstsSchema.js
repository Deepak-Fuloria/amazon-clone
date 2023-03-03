const {Schema, default: mongoose}=require("mongoose")

const productsSchema=new Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String

});


const products=new mongoose.model("products",productsSchema)

module.exports=products;




















