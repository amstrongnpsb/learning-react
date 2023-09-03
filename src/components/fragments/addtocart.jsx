function addtocart({ children }) {
  return (
    <div className="w-2/12  bg-blue-950 text-white text-lg fixed right-0 min-h-[600px] rounded-l-xl flex flex-col items-center font-bold py-5 ">
      Cart List
      {children}
    </div>
  );
}

export default addtocart;
