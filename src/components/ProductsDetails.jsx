import { useSelector } from "react-redux";

const ProductsDetails = () => {
  const selectedProduct = useSelector((state) => {
    return state.products.selectedItem;
  });
  return <div>{selectedProduct.title}</div>;
};

export default ProductsDetails;
