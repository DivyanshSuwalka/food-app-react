import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ imageId, name, description, price }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (price) => {
    dispatch(removeItem(price));
    console.log(price);
  };
  return (
    <div className=" flex items-center justify-between m-5 py-2 px-6 bg-zinc-100 rounded-md shadow-md w-[40%]">
      <img
        className=" mr-5 bg-zinc-100 rounded-md h-auto w-20"
        alt="image"
        src={IMG_CDN_URL + imageId}
      />
      <div>
        <p className="text-lg font-light">{name}</p>
        <p className="font-light text-base">Price: {price / 100}/-</p>
        {/* <p className="font-light text-base ">Description : {description}</p> */}
      </div>
      <button
        className=" font-light text-md bg-zinc-300 hover:bg-zinc-400 rounded-md px-6 py-2 "
        onClick={() => handleRemoveItem(price)}
      >
        Delete
      </button>
      {/* <p className="font-light">- Avg Rating: {user.name} stars</p> */}
    </div>
  );
};

export default FoodItem;
