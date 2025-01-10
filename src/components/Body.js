import RestaurantCard from "./RestaurantCard";
import { FETCH_RESTAURANTS_URL, restaurantList } from "../constants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // console.log("render");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(FETCH_RESTAURANTS_URL);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); // optional chaining ?
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // const isOnline = useOnline();
  // if(!isOnline) {
  //   return <h1>you are offline </h1>
  // }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 ">
        <input
          type="text"
          className="bg-zinc-100 p-1 m-2 px-10 rounded-md focus:bg-white font-light"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-2 p-1 px-4 bg-zinc-200 rounded-md hover:bg-zinc-400 font-light"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          className="bg-zinc-100 p-1 m-2 px-10 rounded-md focus:bg-white font-light"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          className="bg-zinc-100 p-1 m-2 px-10 rounded-md focus:bg-white font-light"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

//
//
//
//
//
//
// const isOnline = useOnline();
//   if (!isOnline) {
//     return <h1>no internet connection </h1>;
//   }
//
//
//early return
// if (!allRestaurants) return null;
//
// if(filteredRestaurants?.length===0) return <h1>Oops! no Restaurant Found </h1>;
//
//
//
//
//
//
//
//
// to get the restraunts whose (avgRating > 4.5)
{
  /* <div className="right-part">
  <button
  className="btn"
    onClick={() => {
      if (poll === "true") {
        setFilteredRestaurants(allRestaurants);
        setPoll("false");
      } else {
        const avgFilter = allRestaurants.filter(
          (x) => x?.info?.avgRating > 4.5
        );
        setFilteredRestaurants(avgFilter);
        setPoll("true");
      }
    }}
  >
    {`Search Top Restaurants => ( Rating > 4.5 )  ( '${poll}' )`}
  </button>
</div> */
}
