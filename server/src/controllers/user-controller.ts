// import UserModel from "../models/user-model";
// const UserModel = {};

// import { User as UserModel } from "../models/models";
import Models from "../models/models";
const UserModel = Models.User;
import { Request, Response } from "express";

export async function postUser(req: Request, res: Response): Promise<void> {
  console.log("post user endpoint reached");
  try {
    const user = await UserModel.create(req.body);
    res.status(201);
    res.json(user);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while creating user");
    }
  }
}

export async function getUsers(req: Request, res: Response): Promise<void> {
  console.log("get users endpoint reached");
  try {
    const users = await UserModel.findAll({});
    res.status(200);
    res.json(users);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while fetching all users");
    }
  }
}

export async function getUser(req: Request, res: Response): Promise<void> {
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
      res.status(404);
      res.json(`user ${req.params.id} not found`);
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("ran into error while finding user");
    }
  }
}

/*
note: in sequelize we have the option of chooseing between 'soft destroy' or 'hard destroy',
soft destroy will make it seem like we deleted a record but actually store a copy
wheras hard destroy will completely destroy a record
use soft desotry if in future you might want to recover a deleted record
*/

export async function deleteUser(req: Request, res: Response): Promise<void> {
  console.log("delete user by id endpoint reached");
  try {
    const deletedUser = await UserModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedUser) {
      res.status(200);
      res.json(`successfully deleted user: ${req.params.id}`);
    } else {
      res.status(404);
      res.json("cannot delete non-existent user");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("error encountered when deleting user");
    }
  }
}

export async function updateUser(req: Request, res: Response) {
  console.log("update user by id endpoint reached");
  try {
    const foundUser = await UserModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (foundUser) {
      foundUser.set(req.body);
      await foundUser.save();
      res.status(200);
      res.json(`successfully updated user: ${req.params.id}`);
    } else {
      res.status(404);
      res.json("cannot update non-existent user");
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
      res.status(400);
      res.json("error encountered when updating user");
    }
  }
}
