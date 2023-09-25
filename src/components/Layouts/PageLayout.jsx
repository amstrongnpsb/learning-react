const PageLayout = ({ children, title }) => {
  return (
    <div className=" max-w-screen-2xl mx-auto flex min-h-min flex-col">
      <div className="  flex justify-center w-full mx-auto flex-col flex-wrap gap-4 rounded-lg py-5 my-5 h-full">
        <h1 className="text-blue-950 text-center font-bold text-3xl">
          {title}
        </h1>
        <div className=" flex justify-start w-11/12 flex-row flex-wrap gap-4 rounded-lg py-5 h-full ml-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
