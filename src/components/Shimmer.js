const Shimmer = () => {
  return (
    <>
      <h1 className="my-2 p-5 text-xl text-center font-light"> Shimmer </h1>
      <div className=" flex flex-wrap">
        {Array(20)
          .fill("")
          .map((e, i) => (
              <div key={i} className=" w-[250px] h-auto p-3 m-8 rounded-md shadow-lg bg-zinc-100">
                <img className="img w-full h-[200px] rounded-md bg-zinc-200" />
                <br /><hr /><br /><hr /><br /><hr /><br /><hr /><br /><hr />
              </div>
          ))}
      </div>
    </>
  );
};
export default Shimmer;
