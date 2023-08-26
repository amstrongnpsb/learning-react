import { Link } from "react-router-dom";
const Cardproduct = () => {
  return <p className="text-5xl font-bold text-blue-950">No Product</p>;
};

export const ProductLight = ({ status }) => {
  return (
    <a
      href=""
      className="bg-white w-3/12 min-h-min rounded-lg flex flex-col p-4 gap-2"
    >
      <img src="./images/shoes-1.png" alt="" className="w-3/6 self-center" />
      <h1 className="text-blue-950 text-xl font-bold">Shoes 1</h1>
      <p className="text-blue-950 text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
        sint rerum impedit animi iusto architecto reprehenderit in maiores,
        excepturi veritatis velit commodi molestias qui eaque?
      </p>
      <span className="text-blue-950 font-bold text-xl">
        <i className="fa-solid fa-rupiah-sign text-blue-950"></i>1.000.000
      </span>
      {status === "available" && (
        <Link
          to=""
          className="font-bold text-xl text-white bg-blue-950 w-3/6 p-2 rounded-lg self-end text-center"
        >
          <i className="fa-solid fa-cart-plus text-white"></i>
          {" Add to Cart"}
        </Link>
      )}
      {status === "sold" && (
        <Link
          to=""
          className="font-bold text-xl text-white bg-blue-950 w-3/6 p-2 rounded-lg self-end text-center"
        >
          <i className="fa-solid fa-xmark"></i>
          {" sold"}
        </Link>
      )}
    </a>
  );
};
export const ProductDark = ({ status }) => {
  return (
    <a
      href=""
      className="bg-blue-950 w-3/12 min-h-min rounded-lg flex flex-col p-4 gap-2"
    >
      <img src="./images/shoes-1.png" alt="" className="w-3/6 self-center" />
      <h1 className="text-white text-xl font-bold">Shoes 1</h1>
      <p className="text-white text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
        sint rerum impedit animi iusto architecto reprehenderit in maiores,
        excepturi veritatis velit commodi molestias qui eaque?
      </p>
      <span className="text-white font-bold text-xl">
        <i className="fa-solid fa-rupiah-sign"></i>1.000.000
      </span>
      {status === "available" && (
        <Link
          to=""
          className="font-bold text-xl text-blue-950 bg-white w-3/6 p-2 rounded-lg self-end text-center"
        >
          <i className="fa-solid fa-cart-plus text-blue-950"></i>
          {" Add to Cart"}
        </Link>
      )}
      {status === "sold" && (
        <Link
          to=""
          className="font-bold text-xl text-blue-950 bg-white w-3/6 p-2 rounded-lg self-end text-center"
        >
          <i className="fa-solid fa-xmark text-blue-950"></i>
          {" sold"}
        </Link>
      )}
    </a>
  );
};

Cardproduct.ProductLight = ProductLight;
Cardproduct.ProductDark = ProductDark;

export default Cardproduct;
