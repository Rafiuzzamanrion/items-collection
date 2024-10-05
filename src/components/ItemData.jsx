import React from "react";
import ItemCard from "./ItemCard";

const ItemData = ({data}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-5 md:mx-10 lg:mx-20 content-center">
      {data?.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ItemData;
