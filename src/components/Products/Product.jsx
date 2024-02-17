import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdAction } from "../../store/actions/product";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const Product = () => {
  const dispatch = useDispatch();

  const productsFiltered = useSelector(
    (state) => state.product.productsFiltered
  );
  const productsAll = useSelector((state) => state.product.products);
  const products = productsFiltered.length > 0 ? productsFiltered : productsAll;
  const itemDetail = useSelector((state) => state.product.item);
  const [showModalProductDetail, setShowModalProductDetail] = useState(false);

  const showModalProduct = (id) => {
    dispatch(fetchProductByIdAction(id));
    setShowModalProductDetail(true);
  };

  return (
    <div className="bg-white shadow-sm col-span-6">
      <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
        {products.map((product) => (
          <ProductCard
            onClick={() => showModalProduct(product.id)}
            key={product.id}
            item={product}
          />
        ))}
      </div>
      {showModalProductDetail ? (
        <ProductDetailModal
          setShowModalProductDetail={setShowModalProductDetail}
          itemDetail={itemDetail}
        />
      ) : null}
    </div>
  );
}

export default Product;
