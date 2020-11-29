const { Schema } = require('mongoose');

const ProductSchema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = ProductSchema;