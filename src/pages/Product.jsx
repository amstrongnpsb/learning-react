import PageLayout from "../components/Layouts/PageLayout";
import Cardproduct from "../components/fragments/cardproduct";
const ProductPage = () => {
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
    <PageLayout title="Product">
      {Products.length === 0 && <Cardproduct />}
      {Products.map((product) => (
        <Cardproduct.ProductDark
          key={`${product.id}`}
          status={`${product.status}`}
          productName={`${product.name}`}
          productDesc={`${product.desc}`}
          productPrice={`${product.price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          productImage={
            product.image.length > 0 ? product.image : "./images/no_image.png"
          }
        />
      ))}
      {Products.length === 0 && <Cardproduct />}
      {Products.map((product) => (
        <Cardproduct.ProductLight
          key={`${product.id}`}
          status={`${product.status}`}
          productName={`${product.name}`}
          productDesc={`${product.desc}`}
          productPrice={`${product.price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          productImage={
            product.image.length > 0 ? product.image : "./images/no_image.png"
          }
        />
      ))}
    </PageLayout>
  );
};

export default ProductPage;
