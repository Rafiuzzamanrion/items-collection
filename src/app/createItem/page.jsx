"use client";
import * as React from "react";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createItem } from "@/controls/createItem";
import { Bounce, toast, ToastContainer } from "react-toastify";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, description };
    const res = await createItem(formData);

    if (res.status) {
      toast.success("Item has been created successfully!", {
        position: "top-center",
        autoClose: 2000,
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
        toast.error("Item has not been created!", {
            position: "top-center",
            autoClose: 2000,
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
    <div className="flex justify-center my-16">
      <ToastContainer />
      <Card className="w-[360px]">
        <CardHeader>
          <CardTitle>Create Your Items</CardTitle>
          <CardDescription>Fill this form and create an item</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  required
                  placeholder="Name of your Item"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  required
                  placeholder="Type Item description here."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <CardFooter className="flex justify-end my-3">
              <Button type="submit">Create</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateItem;
