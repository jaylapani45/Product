import express from 'express';
import { ShowProduct, AddProduct } from '../userController/index';
import ProductValidation from '../utils/productValidation';
const routes = express.Router();

routes.post('/addProduct',ProductValidation, AddProduct);  //give name:"test", price:1, size:2} as post request to check

routes.post('/showAll', ShowProduct); //give url only

export default routes;
