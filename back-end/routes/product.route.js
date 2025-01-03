import express from "express";
import { 
    createProduct, 
    deleteProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct
} from "../controller/product.controller.js";

const router = express.Router();

router.get('/', getAllProducts);

router.get('/', getSingleProduct);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;