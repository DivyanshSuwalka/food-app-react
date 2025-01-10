import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  cloudinaryImageId,
  name,
  costForTwo,
  cuisines,
  sla,
  avgRating,
  user // from app.js as props drilling 
}) => {
  return (
    <div className="w-[250px] p-3 m-8 leading-9 rounded-md shadow-lg bg-zinc-100 text-pretty" >
      <img className="w-full h-[200px] rounded-md mb-3" alt="image " src={IMG_CDN_URL + cloudinaryImageId} />
      <p className="text-xl font-normal text-center">{name}</p>
      <p className="font-light">- {costForTwo} Members</p>
      <p className="font-light">- Cuisines: {cuisines?.join(", ")}</p>
      <p className="font-light">- Delivery: {sla?.deliveryTime} Minutes</p>
      <p className="font-light">- Avg Rating: {avgRating} stars</p>
      {/* <p className="font-light">- Avg Rating: {user.name} stars</p> */}
    </div>
  );
};

export default RestrauntCard;
