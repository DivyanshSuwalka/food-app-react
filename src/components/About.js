import { Component } from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import UserContext from "../utils/UserContext"

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    // best place for API call
    // console.log("parent componentDidMount");
  }
  render() {
    // console.log("parent render");
    return (
      <div className="m-3 p-3">
        <h1>About Us</h1>

        <UserContext.Consumer>
          {({user})=><p className="font-light text-xl">{user.name} {user.email}</p>}
        </UserContext.Consumer>

        {/* <Profile name="divyansh"/> */}
        <ProfileClass name="Passing Props" />
      </div>
    );
  }
}

export default About;

//
//
//
//
//
//
//
// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <p>About details</p>
//       <Profile name="divyansh"/>
//       <ProfileClass name="divyansh Class"/>
//     </div>
//   );
// };
