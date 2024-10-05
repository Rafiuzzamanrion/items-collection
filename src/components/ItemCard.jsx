'use client'
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const ItemCard = ({ data }) => {
  const { name, description, createdAt, _id } = data;

  const handleDelete = async (id) => {
   
  };
  return (
    <div>
      <Card className="w-[360px]">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <h1>{description}</h1>
          <h1>Time: {new Date(createdAt).toLocaleString()}</h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={() => handleDelete(_id)}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemCard;
