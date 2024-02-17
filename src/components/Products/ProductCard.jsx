import { getImgUrl } from "../../utils/utils";
import { currencyFormat } from "../../utils/utils";

const ProductCard = (props) => {
  const { onClick, item } = props

  return (
    <>
      <div className="p-2">
        <div
          onClick={onClick}
          className="
          c-card block 
          bg-white shadow-sm 
          hover:shadow-md 
          overflow-hidden 
          cursor-pointer
          border border-gray-200"
        >
          <div className="relative pb-48">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={getImgUrl(item.image)}
              alt={item.name}
            />
          </div>
          <div className="p-2 flex justify-between">
            <h5 className="mt-2">{item.name}</h5>
            <h5 className="mt-2">
              <span className="
                    inline-flex 
                    items-center 
                    rounded-md bg-yellow-50 
                    px-2 py-1 text-xs 
                    font-medium text-yellow-800 ring-1 
                    ring-inset ring-yellow-600/20">
                $ {currencyFormat(item.price)}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
