import { default as UserModel } from "../models/user-model";
import { Request, Response } from "express";

export async function postUser(req: Request, res: Response) {
  console.log("post user endpoint reached");
  try {
    const user = await UserModel.create(req.body);
    res.status(201);
    res.json(user);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("could not create user");
    }
  }
}

export async function getUsers(req: Request, res: Response) {
  console.log("get users endpoint reached");
  try {
    const users = await UserModel.findAll({});
    res.status(200);
    res.json(users);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error");
    }
  }
}

export async function getUser(req: Request, res: Response) {
  console.log("get user by id endpoint reached");
  try {
    const foundUser = await UserModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (foundUser) {
      res.status(200);
      res.json(foundUser);
    } else {
      throw new Error("user not found");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error");
    }
  }
}
