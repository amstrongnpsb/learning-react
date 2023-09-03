import { Fragment, useState } from "react";
import PageLayout from "../components/Layouts/PageLayout";
import Cardproduct from "../components/fragments/cardproduct";
import Navbar from "../components/fragments/navbar";
import AddtoCart from "../components/fragments/addtocart";
import { Link } from "react-router-dom";
const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id == id)) {
      setCart(
        cart.map((item) =>
          item.id == id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  const Products = [
    {
      id: 1,
      name: "shoes",
      desc: "dolores quae! Quasi, dignissimos. Cupiditate.",
      price: 1000000,
      image: "./images/shoes-1.png",
      status: "available",
    },
    {
      id: 2,
      name: "watch",
      desc: " veniam dolores quae! Quasi, dignissimos. Cupiditate.",
      price: 2000000,
      image: "./images/watch.png",
      status: "sold",
    },
    {
      id: 3,
      name: "bike",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo quis iure nostrum sed, illo aliquid voluptatem recusandae vitae veniam dolores quae! Quasi, dignissimos. Cupiditate.",
      price: 3000000,
      image: "./images/bike.png",

      status: "sold",
    },
    {
      id: 4,
      name: "car",
      desc: " veniam dolores quae! Quasi, dignissimos. Cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo quis iure nostrum sed, illo aliquid voluptatem recusandae vitae veniam dolores quae! Quasi, dignissimos. Cupiditate.",
      price: 103500000,
      image: "./images/car.png",
      status: "available",
    },
  ];
  return (
    <Fragment>
      <Navbar />
      <PageLayout title="Product">
        {Products.length === 0 && <Cardproduct />}
        {Products.map((product) => (
          <Cardproduct.ProductDark
            key={`${product.id}`}
            status={`${product.status}`}
            productName={`${product.name}`}
            productDesc={`${product.desc}`}
            productPrice={`${product.price.toLocaleString("id-ID", {
              currency: "IDR",
            })}`}
            productImage={
              product.image.length > 0 ? product.image : "./images/no_image.png"
            }
            addToCart={handleAddToCart}
            id={`${product.id}`}
          />
        ))}
        <AddtoCart>
          {cart.length === 0 && <h1>Nothing In Cart</h1>}
          {cart.map((item) => {
            const product = Products.find((product) => product.id == item.id);

            return (
              <Link
                to=""
                className="flex flex-row w-full justify-evenly p-2"
                key={`${item.id}`}
              >
                <h1 className="capitalize">{product.name}</h1>
                <h1>x{item.qty}</h1>
                <h1>
                  {(item.qty * product.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </h1>
              </Link>
            );
          })}
        </AddtoCart>
      </PageLayout>
    </Fragment>
  );
};

export default ProductPage;
