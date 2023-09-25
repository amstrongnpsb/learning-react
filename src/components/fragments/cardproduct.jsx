const Cardproduct = () => {
  return <p className="text-5xl font-bold text-blue-950">No Product</p>;
};

export const ProductLight = ({
  status,
  productName,
  productDesc,
  productPrice,
  productImage = "./images/no_image.png",
}) => {
  return (
    <div
      href="image"
      className="bg-white w-3/12 h-auto rounded-lg flex flex-col p-4  "
    >
      <div className=" w-full h-[200px] flex justify-center mx-auto ">
        <img src={`${productImage}`} alt="" className="self-center h-full " />
      </div>
      <div className="flex flex-col h-full justify-between w-full mt-4 px-4">
        <div>
          <h1 className="text-blue-950 text-xl font-bold capitalize">
            {productName}
          </h1>
          <p className="text-blue-950 text-base">{productDesc}</p>
          <span className="text-blue-950 font-bold text-xl ">
            <i className="fa-solid fa-rupiah-sign"></i>
            {productPrice}
          </span>
        </div>
        {status === "available" && (
          <button
            to="product"
            className="font-bold text-xl text-white bg-blue-950 w-3/6 p-2 rounded-lg self-end text-center  "
          >
            <i className="fa-solid fa-cart-plus text-white"></i>
            {" Add to Cart"}
          </button>
        )}
        {status === "sold" && (
          <button
            to=""
            className="font-bold text-xl text-white bg-blue-950 w-3/6 p-2 rounded-lg self-end text-center  "
          >
            <i className="fa-solid fa-cart-plus text-white"></i>
            {" sold"}
          </button>
        )}
      </div>
    </div>
  );
};
export const ProductDark = ({
  productName,
  productDesc,
  productPrice,
  productImage,
  addToCart,
  id,
}) => {
  return (
    <div
      href="image"
      className="bg-blue-950 w-3/12 h-auto rounded-lg flex flex-col p-4  "
    >
      <div className=" w-full h-[200px] flex justify-center mx-auto ">
        <img src={`${productImage}`} alt="" className="min-h-full" />
      </div>
      <div className="flex flex-col h-full justify-between w-full mt-4 px-4">
        <div>
          <h1 className="text-white text-xl font-bold capitalize">
            {productName.substr(0, 20)}...
          </h1>
          <p className="text-white text-base">
            {productDesc.substr(0, 100)}...
          </p>
          <span className="text-white font-bold text-xl ">
            <i className="fa-solid fa-dollar-sign"></i>
            {productPrice}
          </span>
        </div>

        <button
          onClick={() => addToCart(id)}
          to="product"
          className="font-bold text-base text-blue-950 bg-white w-3/6 p-2 rounded-lg self-end text-center  "
        >
          <i className="fa-solid fa-cart-plus text-blue-950"></i>
          {" Add to Cart"}
        </button>
      </div>
    </div>
  );
};

Cardproduct.ProductLight = ProductLight;
Cardproduct.ProductDark = ProductDark;

export default Cardproduct;
