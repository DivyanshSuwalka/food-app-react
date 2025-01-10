import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black rounded-md p-3 m-3">
      <h3 className="text-lg ">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  // {
  //   showAbout: false,
  //   showTeam: false,
  //   showCareers: false,
  // }
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="ml-3 p-3 text-2xl">Instamart</h1>
      <div className="mx-4 px-4">
        <Section
          title={"About Instamart"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          isVisible={visibleSection === "about"}
          setIsVisible={() => setVisibleSection("about")}
        />
        <Section
          title={"Team Instamart"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          isVisible={visibleSection === "team"}
          setIsVisible={() => setVisibleSection("team")}
        />
        <Section
          title={"Careers"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          isVisible={visibleSection === "careers"}
          setIsVisible={() => setVisibleSection("careers")}
        />
      </div>
    </div>
  );
};

export default Instamart;
