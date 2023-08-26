import PageLayout from "../components/Layouts/PageLayout";
import Cardproduct from "../components/fragments/cardproduct";
const ProductPage = () => {
  return (
    <PageLayout title="Product">
      <Cardproduct.ProductDark status="available" />
      <Cardproduct.ProductLight status="available" />
      <Cardproduct.ProductDark status="sold" />
      <Cardproduct.ProductLight status="sold" />
      <Cardproduct.ProductDark />
    </PageLayout>
  );
};

export default ProductPage;
