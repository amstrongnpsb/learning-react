import PageLayout from "../components/Layouts/PageLayout";
import Cardproduct from "../components/fragments/cardproduct";
const ProductPage = () => {
  return (
    <PageLayout title="Product">
      <Cardproduct.ProductLight status="available" />
      <Cardproduct.ProductLight status="sold" />
      <Cardproduct.ProductDark status="available" />
      <Cardproduct.ProductDark status="sold" />
    </PageLayout>
  );
};

export default ProductPage;
