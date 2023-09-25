import { Fragment, useState, useEffect } from "react";
import PageLayout from "../components/Layouts/PageLayout";
import Cardproduct from "../components/fragments/cardproduct";
import Navbar from "../components/fragments/navbar";
import AddtoCart from "../components/fragments/addtocart";
import { Link } from "react-router-dom";
import GetProducts from "../services/product.service";
const ProductPage = () => {
  const [Cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    if (Products.length > 0 && Cart.length > 0) {
      const total = Cart.reduce((sum, Cart) => {
        const product = Products.find((product) => product.id == Cart.id);

        return sum + product.price * Cart.qty;
      }, 0);
      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(Cart));
    }
  }, [Cart, Products]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    GetProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (id) => {
    if (Cart.find((item) => item.id == id)) {
      setCart(
        Cart.map((item) =>
          item.id == id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...Cart, { id, qty: 1 }]);
    }
  };

  // const Products = [
  //   {
  //     id: 1,
  //     name: "shoes",
  //     desc: "dolores quae! Quasi, dignissimos. Cupiditate.",
  //     price: 1000000,
  //     image: "./images/shoes-1.png",
  //     status: "available",
  //   },
  //   {
  //     id: 2,
  //     name: "watch",
  //     desc: " veniam dolores quae! Quasi, dignissimos. Cupiditate.",
  //     price: 2000000,
  //     image: "./images/watch.png",
  //     status: "sold",
  //   },
  //   {
  //     id: 3,
  //     name: "bike",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo quis iure nostrum sed, illo aliquid voluptatem recusandae vitae veniam dolores quae! Quasi, dignissimos. Cupiditate.",
  //     price: 3000000,
  //     image: "./images/bike.png",

  //     status: "sold",
  //   },
  //   {
  //     id: 4,
  //     name: "car",
  //     desc: " veniam dolores quae! Quasi, dignissimos. Cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo quis iure nostrum sed, illo aliquid voluptatem recusandae vitae veniam dolores quae! Quasi, dignissimos. Cupiditate.",
  //     price: 103500000,
  //     image: "./images/car.png",
  //     status: "available",
  //   },
  // ];

  // const cartRef = useRef([{ id: 1, qty: 2 }]);
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  // };
  return (
    <Fragment>
      <Navbar />
      <PageLayout title="Product">
        {Products.length <= 0 && <Cardproduct />}
        {Products.length > 0 &&
          Products.map((product) => (
            <Cardproduct.ProductDark
              key={`${product.id}`}
              productName={`${product.title}`}
              productDesc={`${product.description}`}
              productPrice={`${product.price.toLocaleString("id-ID", {
                currency: "IDR",
              })}`}
              productImage={
                product.image.length > 0
                  ? product.image
                  : "./images/no_image.png"
              }
              addToCart={handleAddToCart}
              id={`${product.id}`}
            />
          ))}

        <AddtoCart products={Products}>
          {Cart.length === 0 && <h1>Nothing In Cart</h1>}
          {Products.length > 0 &&
            Cart.map((item) => {
              const product = Products.find((product) => product.id == item.id);

              return (
                <Link
                  to=""
                  className="flex flex-row w-full justify-evenly p-2"
                  key={`${item.id}`}
                >
                  <h1 className="capitalize text-sm">
                    {product.title.substr(0, 20)}
                  </h1>
                  <h1 className=" text-sm">x{item.qty}</h1>
                  <h1 className=" text-sm">
                    {(item.qty * product.price).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h1>
                </Link>
              );
            })}
          {/* total */}
          {Products.length > 0 && Cart.length === 0 ? (
            <p></p>
          ) : (
            <div className="font-bold  text-sm">
              Total Price :{" "}
              {totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          )}
        </AddtoCart>
      </PageLayout>
    </Fragment>
  );
};

export default ProductPage;
