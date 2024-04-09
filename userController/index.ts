import { userModel } from "../dbmodels/userModel";
import { Request, Response } from "express";

export const AddProduct = async (req: Request, res: Response) => {
  const UserModel = new userModel(req.body);
  try {
    const response = await UserModel.save();
    return res.status(201).json({ message: "success", data: response });
  } catch (err) {
    return res.status(500).json({ message: "error", data: err });
  }
};
export const ShowProduct = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    return res
      .status(200)
      .json({ message: "success",data:user });
  } catch (err) {
    return res.status(500).json({ message: "error", data: err });
  }
};

