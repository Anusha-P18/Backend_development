const mongoose = require("mongoose");
/***
 * ProductModel -> 
 * schema
 *      uniqueID -> mongodb
 *      item name
 *      description 
 *      price
 *      discount
 * 
 * ***/
/**
 * rules that an entity should follow
 * **/

const productSchemaRules = {
    producedBy: String,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    discount: {
        type: Number,
        validate: function () {
            return this.price > this.discount;
        }
    }
}

const productSchema = new mongoose.Schema(productSchemaRules);

const ProductModel = new mongoose.model("ProductModel", productSchema);

module.exports = ProductModel;