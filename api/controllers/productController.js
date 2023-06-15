import { Product } from "../models/Product.js";
import { Review } from "../models/Review.js";
class ProductController {
  //create product
  async create(req, res) {
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async update(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //DELETE
  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //GET PRODUCT
  async showProduct(req, res) {
    try {
      const product = await Product.findById(req.params.id).populate("reviews");
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //GET ALL PRODUCTS
  async showAllProduct(req, res) {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qtitle = req.query.title;
    const re = new RegExp(qtitle, "i");
    try {
      let products;
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        }).populate("reviews");
      } else if (qtitle) {
        products = await Product.find({ title: { $in: re } }).limit(4);
      } else if (req.query.pageSize) {
        const { pageSize = 10, page = 1 } = req.query;
        const totalProducts = await Product.countDocuments({});
        const pageCount = Math.ceil(totalProducts / pageSize);
        products = await Product.find()
          .populate("reviews")
          .skip((page - 1) * pageSize)
          .limit(pageSize);
        return res.status(200).json({
          data: products,
          pagination: {
            total: totalProducts,
            pageCount,
            pageSize: +pageSize,
            page: +page,
          },
        });
      } else {
        products = await Product.find();
      }
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
export const productController = new ProductController();
// { name: { $regex: 'acme.*corp', $options: 'i', $nin: [ 'acmeblahcorp' ] } }

// {
//   $in: [qtitle],
// },
