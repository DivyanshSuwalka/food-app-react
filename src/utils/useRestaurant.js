// import { useState, useEffect } from "react";
// import { FETCH_MENU_URL } from "../constants";

// const useRestaurant = (resId) => {
//   [menu, setMenu] = useState(null);

//   useEffect(() => {
//     getRestaurantInfo();
//   }, []);

//   async function getRestaurantInfo() {
//     const data = await fetch(
//       FETCH_MENU_URL +
//         resId + //resId:78944
//         "&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     console.log(json.data);
//     // setRestaurant(json.data?.cards[2]?.card?.card?.info);
//     setMenu(
//       json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
//     );
//   }
//   return menu;
// };

// export default useRestaurant;
