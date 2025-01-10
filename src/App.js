import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
// import Instamart from "./components/Instamart";    // instead

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Divyansh",
    email: "learning@react",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />, // user={{ name: "Divyansh", address: "Kota" }}
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //Note: not "/profile" then it will be localhost:1234/profile (direct)
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

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
//
//
//dynamic bundling/Import , code splitting, chunking, lazy loading, on-demand loading,
//

// const heading = <h1 id="title" key="h1">Hello</h1>// heading one and 2 are same as in this is a jsx, babel magic
// const heading2 = React.createElement("h2",{"key":"h2"},"World!");
// const container = React.createElement("div",{id: "container",helow: "abc"},[heading,heading2])
// console.log(heading);

// const burgerKing = {
//   image:
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_101665.JPG",
//   name: "Burger King",
//   cuisines: ["Burgers", "American"],
//   rating: "4.2",
// };

// const Body = () => (
//   <div className="restaurant-list">
//     {/* <ReatrauntCard {...restaurantList[0].info} />
//     <ReatrauntCard {...restaurantList[1].info} />
//     <ReatrauntCard {...restaurantList[2].info} />
//     <ReatrauntCard {...restaurantList[3].info} />
//     <ReatrauntCard {...restaurantList[4].info} />
//     <ReatrauntCard {...restaurantList[5].info} />
//     <ReatrauntCard {...restaurantList[6].info} /> */}
//     {restaurantList.map((restaurant) => {
//       return <RestaurantCard {...restaurant.info} key={restaurant.info?.id} />;
//     })}
//   </div>
// );
