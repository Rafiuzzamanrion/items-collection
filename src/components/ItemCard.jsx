"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { deleteItem } from "@/controls/deleteItem";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {updateItem} from "@/controls/updateItem";

// =========== CRUD operation ==========
const ItemCard = ({ data }) => {
  const { name, description, createdAt, _id } = data;
  const newId = _id.toString();
  const [updateName, setUpdateName] = useState("");
  const [updateDescription, setUpdatedDescription] = useState("");

  // --------- Delete A item-----------
  const handleDelete = async (id) => {
    const res = await deleteItem(id);
    if (res.status) {
      toast.success("Item has been Deleted successfully!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    if (res.error) {
      toast.error("Item has not been Deleted!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleEdit = async (id) => {
    const upId = id.toString();
    const updatedData = {upId,updateName,updateDescription}
    const res = updateItem(updatedData)
    if (res.status) {
        toast.success("Item has been Updated successfully!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
    }
    if (res.error) {
        toast.error("Item has not been Updated!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
    }
  };
  return (
    <div>
      <ToastContainer />
      <Card className="w-[360px]">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="mb-5">{description}</h1>
          <h1>Time: {new Date(createdAt).toLocaleString()}</h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                Update Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Item</DialogTitle>
                <DialogDescription>
                  Make changes to your Item here. Click save when you are done.
                </DialogDescription>
              </DialogHeader>
              <form className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name of Item
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={updateName}
                    onChange={(e) => setUpdateName(e.target.value)}
                    required
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Description
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    value={updateDescription}
                    required
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <DialogFooter>
                <Button  onClick={() => handleEdit(newId)} type="submit">Save changes</Button>
              </DialogFooter>
              </form>
             
            </DialogContent>
          </Dialog>

          <Button onClick={() => handleDelete(newId)}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemCard;
