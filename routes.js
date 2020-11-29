//imports
const { Router } = require('express');

const ProductSchema = require('./model');

const router = Router();

//routes
router.post('/add', async(req, res) => {
    const { name, photo, description } = req.body;

    const newData = new ProductSchema({
        name,
        photo,
        description
    });
    await newData.save();

    return res.json('done');
});

router.put('/add', async(req, res) => {
    const Edit = await ProductSchema.findById(id)
    Edit.name = nameEdit;
    Edit.photo = photoEdit;
    await newCosa.save();
})

const nameEdit = 'none (edit)';
const photoEdit = 'none (edit)';




/*                                              commands                                                 */

ProductSchema.findById(id);
ProductSchema.find({});
ProductSchema.findByIdAndDelete(id)


module.exports = router;