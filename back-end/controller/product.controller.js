import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});
    }catch(error){
        console.error(`Erro em GET Products: ${error}`);
        res.status(500).json({ success: false, message: "Server error"});

    }
}

export const getSingleProduct =  async (req, res) => {
    try{
        const { id } = req.query;
        
        if(!id){
            console.error(`Erro: id = ${id}`);
            return res.status(400).json({ success: false, message: "Product without identifier code"});
        }
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            console.error(`Erro: id = ${id}`);
            return res.status(400).json({ success: false, message: "Product code not valid"});
        }
        
        const product = await Product.findById(id);
        
        if(!product){
            console.error(`Erro: id = ${id}`);
            return res.status(400).json({ success: false, message: "Product not found"});
        };

        res.status(200).json({ success: true, data: product});
    }catch(error){
        console.error(`Erro em GET Products: ${error}`);
        res.status(500).json({ success: false, message: "Server error"});

    }
}

export const createProduct = async (req, res) => {
    const product = req.body;

    if(!product?.name || !product?.price || !product?.image){
        return res.status(400).json({ success: false, message: "Please provide  all fields"});
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Erro in Create Product");
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    if(!id){
        console.error(`Erro: id = ${id}`);
        return res.status(400).json({ success: false, message: "Product without identifier code"});
    }
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.error(`Erro: id = ${id}`);
        return res.status(400).json({ success: false, message: "Product code not valid"});
    }
    
    const product = req.body;
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(201).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error(`Erro: id = ${id}`);
        return res.status(400).json({ success: false, message: "Product code not valid"});
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
     console.log(`Delete id: ${id}`);
     try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted"});
    } catch (error) {
        console.error(`Error in DELETE Product ${error.message}`);
        res.status(500).json({ success: true, message: "Server error"});
     }
}