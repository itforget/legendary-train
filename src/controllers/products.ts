import express, { Request, Response, NextFunction} from "express";
import Product from "../models/product";

async function getProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

async function getProduct(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      res.json(product);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
}

async function addProducts(req: Request, res: Response) {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json({ message: "Product added successfully!" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

async function modifyProduct(req: Request, res: Response) {
  const id = req.params.id;
  const update = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, update, { new: true });
    res.status(200).json({ message: "Product updated successfully!" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteProduct(req: Request, res: Response) {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
  
export { getProducts, getProduct, addProducts, modifyProduct, deleteProduct };