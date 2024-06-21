import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";

const router = express.Router();

router.post("/upload/single", single, async(req, res) => {
    if(!req.file){
        return res.status(400).json({error : "No file uploaded"});
    }
    try {
        const result = await handleUpload(req.file.buffer,req.file.originalname);
        res.status(201).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "ERROR"});
    }
});

router.post("/upload/multiple", multiple, async (req, res) => {
    if(!req.files){
        return res.status(400).json({error : "No file uploaded"})
    }
    try {
        const files = req.files as Express.Multer.File[];        
        for(const file of files){
            const result = await handleUpload(file.buffer, file.originalname);
        }
        res.status(201).json({message : "upload success"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "ERROR"});
    }
});

export default router;
