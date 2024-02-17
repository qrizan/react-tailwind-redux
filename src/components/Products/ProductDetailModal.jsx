import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../store/actions/product";
import { getImgUrl } from "../../utils/utils";
import { currencyFormat } from "../../utils/utils";
import ButtonBig from "../ButtonBig";
import ProductSize from "./ProductSize";

const ProductDetailModal = (props) => {
  const { setShowModalProductDetail, itemDetail } = props;
  const dispatch = useDispatch();
  const [sizeValue, setSizeValue] = useState("");

  const addToCart = (event, id) => {
    event.preventDefault();
    dispatch(addToCartAction(id, sizeValue));
    setShowModalProductDetail(false);
    setSizeValue("");
  };

  return (
    <>
      <div className="relative z-10" role="dialog" aria-modal="true">
        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4">
                    <div className="relative flex w-full items-center overflow-hidden bg-white p-4">
                        <button
                        onClick={() => setShowModalProductDetail(false)}
                        type="button"
                        className="absolute text-gray-400 hover:text-gray-500 sm:right-4 sm:top-4"
                        >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        </button>

                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                        <div className="aspect-h-3 aspect-w-3 overflow-hidden bg-gray-100 sm:col-span-4 lg:col-span-5">
                            <img
                            src={getImgUrl(itemDetail.image)}
                            alt={itemDetail.name}
                            className="object-cover object-center"
                            />
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                            {itemDetail.name}
                            </h2>

                            <section
                            aria-labelledby="information-heading"
                            className="mt-2"
                            >
                            <p className="text-2xl text-gray-900">
                                $ {currencyFormat(itemDetail.price)}
                            </p>
                            </section>

                            <div className="mt-3">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">
                                Size
                                </h4>
                            </div>

                            <ProductSize sizeValue={sizeValue} setSizeValue={setSizeValue}/>
                            </div>
                            <ButtonBig
                            action={() => addToCart(event, itemDetail.id)}
                            disable={sizeValue.length < 1}
                            label="Add to Cart"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailModal;
