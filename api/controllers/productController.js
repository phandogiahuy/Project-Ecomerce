import { Product } from "../models/Product.js";
import { Review } from "../models/Review.js";
import { catchAsync } from "../utils/catchAsync.js";
const productController = {
  //create product
  async create(req, res) {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  },
  async update(req, res) {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  },
  //DELETE
  async delete(req, res) {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  },
  //GET PRODUCT
  async showProduct(req, res) {
    const product = await Product.findById(req.params.id).populate("reviews");
    res.status(200).json(product);
  },
  async showCommentProduct(req, res) {
    const product = await Product.find({
      $expr: { $gt: [{ $size: "$reviews" }, 0] },
    });
    res.status(200).json(product);
  },
  //RECOMMEND PRODUCT
  async recommendProduct(req, res) {
    const product = await Product.find();
    const { flavor, process, place } = req.body.selections;
    const matchingProducts = [];

    product.forEach((product) => {
      let matchCount = 0;

      if (product.flavor === flavor) {
        matchCount++;
      }
      if (product.process === process) {
        matchCount++;
      }
      if (product.place === place) {
        matchCount++;
      }
      if (matchCount > 0) {
        matchingProducts.push({ ...product, matchCount });
      }
    });

    matchingProducts.sort((a, b) => b.matchCount - a.matchCount);
    res.status(200).json(matchingProducts);
  },

  //GET ALL PRODUCT
  async getAllProduct(req, res) {
    const flavor = [];
    const place = [];
    const process = [];
    const product = await Product.find();
    for (const i in product) {
      if (!flavor.includes(product[i].flavor)) {
        flavor.push(product[i].flavor);
      }
      if (!place.includes(product[i].place)) {
        place.push(product[i].place);
      }
      if (!process.includes(product[i].process)) {
        process.push(product[i].process);
      }
    }
    const feature = { flavor, place, process };
    res.status(200).json(feature);
  },
  //GET ALL PRODUCTS
  async showAllProduct(req, res) {
    const qNew = req.query.new;
    const { category, sort } = req.query;
    const qtitle = req.query.title;
    const re = new RegExp(qtitle, "i");

    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (category && sort) {
      if (["ASC", "DESC"].includes(sort.toUpperCase())) {
        products = await Product.aggregate([
          {
            $addFields: {
              currentPrice: {
                $multiply: [
                  {
                    $first: "$price",
                  },
                  {
                    $subtract: [
                      1,
                      {
                        $divide: ["$sale", 100],
                      },
                    ],
                  },
                ],
              },
            },
          },
          {
            $sort: {
              currentPrice: sort.toUpperCase() === "ASC" ? 1 : -1,
            },
          },
          {
            $limit: 8,
          },
        ]);
      } else {
        products = await Product.find({
          categories: category,
        })
          .populate("reviews")
          .limit(8)
          .sort({ createdAt: -1 });
      }
    } else if (category) {
      products = await Product.find({
        categories: {
          $in: [category],
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
  },
};
Object.keys(productController).forEach((key) => {
  productController[key] = catchAsync(productController[key]);
});
export { productController };
