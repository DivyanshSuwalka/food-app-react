import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { log } from "console";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(useParams());

  const dispatch = useDispatch(); // dispatching an action
  const addFoodItem = (info) => {
    dispatch(addItem(info));
    console.log(info);
  };

  const menu = useRestaurant(resId);

  console.log(menu);

  return menu?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col p-5">
      <div className="m-3 p-3">
        <p className="text-4xl font-extralight text-center">Menu</p>
        <div>
          {menu?.map((res) => {
            return (
              <div
                key={res?.card?.info?.id}
                className="flex items-center justify-between m-5 py-2 px-6 bg-zinc-100 rounded-md shadow-md"
              >
                <img
                  className="h-32 w-32 rounded-md object-cover"
                  src={IMG_CDN_URL + res?.card?.info?.imageId}
                  alt={res?.card?.info?.name}
                />

                <div className="flex-1 mx-5 font-light">
                  <p className="text-xl">{res?.card?.info?.name}</p>
                  <ul className="mt-2">
                    <li className="text-md">
                      <p>Price: ₹{(res?.card?.info?.price)/100}</p>
                    </li>
                    <li className="text-md">
                      <p>Description: {res?.card?.info?.description}</p> 
                    </li>
                    {/* <li className="text-md mt-2">
                      <p>Category: {res?.card?.info?.category}</p> 
                    </li> */}
                  </ul>
                </div>

                <button
                  className="bg-zinc-300 hover:bg-zinc-400 p-2 rounded-md font-light"
                  onClick={() => addFoodItem(res?.card?.info)}
                >
                  Add Item
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
{
  /* <div className="menu-about">
                  <div className="menu-restaurant">
                    <br/><br/>
                    <ul>
                    <h1>{restaurant?.name}</h1>
                    <li><h2>Restaurant Id: {params?.resId}</h2></li>
                    <li><h3>City: {restaurant?.city}</h3></li>
                    <li><h3>CostForTwo: {restaurant?.costForTwo}</h3></li>
                    </ul>
                  </div>
                  <div className="menu-restaurant">
                    <img
                      className="menu-img"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                        restaurant?.cloudinaryImageId
                      }
                    />
                  </div>
                </div> */
}
