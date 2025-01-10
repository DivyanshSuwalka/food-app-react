import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ imageId, name, description, price }) => (
  <div className=" p-3 mx-8 my-2 rounded-md shadow-lg bg-zinc-100 text-pretty flex w-full">
    <img
      className=" mr-5 bg-zinc-100 rounded-md h-auto w-20"
      alt="image"
      src={IMG_CDN_URL + imageId}
    />
    <div>
      <p className="text-lg font-light">{name}</p>
      <p className="font-light text-base">Price: {price/100}/-</p>
      <p className="font-light text-base ">
        Description : {description}
      </p>
    </div>
    {/* <p className="font-light">- Avg Rating: {user.name} stars</p> */}
  </div>
);

export default FoodItem;
