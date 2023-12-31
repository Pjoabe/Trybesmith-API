import { Request, Response } from 'express';
import productService from '../services/product.service';
import IProduct from '../interfaces/product.interface';

const createProduct = async (req:Request, res: Response) => {
  const newProductData: IProduct = req.body;
  const response = await productService.createProductInDatabase(newProductData);
  res.status(201).json(response);
};

const getProducts = async (req: Request, res: Response) => {
  const products = await productService.retrieveAllProducts();
  return res.status(200).json(products);
};

export default { createProduct, getProducts };