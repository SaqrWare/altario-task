import {Request, Response} from "express";
import SuccessMessages from "../../constants/SuccessMessages";


export function postUploadFile(req: Request, res: Response) {
    console.log(req.file)
    console.log(req.files)
    console.info("File uploaded successfully")
    res.send(SuccessMessages.FILE_UPLOADED);
}