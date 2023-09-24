import { useState, useEffect } from "react";

function Addtocart({ children, item, products }) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (item.length > 0) {
      const total = item.reduce((sum, item) => {
        const product = products.find((product) => product.id == item.id);

        return sum + product.price * item.qty;
      }, 0);
      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(item));
    }
  }, [item, products]);
  return (
    <div className="w-2/12  bg-blue-950 text-white text-lg fixed right-0 min-h-[600px] rounded-l-xl flex flex-col items-center font-bold py-5 ">
      Cart List
      {children}
      {item.length === 0 ? (
        <p></p>
      ) : (
        <div className="font-bold">
          Total Price :{" "}
          {totalPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </div>
      )}
    </div>
  );
}

export default Addtocart;
