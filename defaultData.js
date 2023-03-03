const products=require("./models/producstsSchema")
const productsData=require("./constant/productsData")

const DefaultData = async()=>{
    try {
         await products.deleteMany({});
       
        const storeData = await products.insertMany(productsData);
        
       
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;





















