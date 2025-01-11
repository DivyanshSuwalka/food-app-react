import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-1 p-1">
      {/* <p className="text-2xl font-extralight text-center pt-4">Cart Component</p> */}
      <div className="flex justify-evenly">
        <h1 className="text-center font-light text-lg pt-6 ">
          No. of Cart Items - {cartItems.length}
        </h1>
        <div className="pt-4">
          <button
            className=" font-light text-md bg-zinc-300 hover:bg-zinc-400 rounded-md px-6 py-2 "
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="flex p-3 justify-around flex-col">
        <div className="flex m-5 p-2 bg-zinc-100 rounded-md w-auto flex-wrap justify-around">
          {cartItems.map((cartItems) => (
            <FoodItem {...cartItems} key={cartItems.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cart;
