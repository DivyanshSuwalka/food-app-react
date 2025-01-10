import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
        avatar_url: "img",
      },
    };
    console.log("child constructor - " + this.props.name);
  }

  //API Calls
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/divyanshsuwalka");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    // console.log("child componentDidMount - " + this.props.name);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate"); 
  }

  componentWillUnmount() {
    // cleaning the event when we move to other component (timer)
    console.log("componentWillUnmount");
  }

  render() {
    console.log("child render - " + this.props.name);
    return (
      <div className=" text-center flex flex-col items-center bg-zinc-200 mx-[450px] rounded-md">
        <h1>Profile Class Component</h1>
        <p>Github API details</p>
        <img
          className="w-52 h-[200px] rounded-md mx-auto"
          src={this.state.userInfo.avatar_url}
          alt="Github User"
        />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default ProfileClass;
