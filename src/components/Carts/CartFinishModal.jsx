import { getImgUrl } from "../../utils/utils";
import { currencyFormat } from "../../utils/utils";
import ButtonBig from "../ButtonBig";

const CartFinishModal = (props) => {
  const { carts, payment, setShowModalFinishOrder, resetCart } = props;
  
  const closeFinish = () => {
    setShowModalFinishOrder(false);
  };

  const submitFinish = () => {
    setShowModalFinishOrder(false);
    resetCart();
  };

  return (
    <>
      <div className="relative z-10" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity block"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center text-center items-center px-4">
            <div className="w-full transform text-left text-base transition my-32 max-w-2xl p-2 bg-white">
              <div className="px-4 pt-4">
                <h1 className="text-base font-semibold text-gray-900 border-b-2 pb-4">
                  Order Confirmation
                </h1>
              </div>
              <button
                onClick={closeFinish}
                type="button"
                className="absolute text-gray-400 hover:text-gray-500 right-4 top-4"
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
              <div className="relative flex w-full items-center overflow-hidden p-4">
                <ul role="list" className="divide-y divide-gray-100">
                  {carts.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex justify-between gap-x-8 py-4"
                      >
                        <div className="flex min-w-0 gap-x-4 w-96">
                          <img
                            className="
                                        h-24 w-24 flex-none 
                                        bg-gray-50"
                            src={getImgUrl(item.image)}
                            alt={item.name}
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {item.name}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              Size: {item.size}{" "}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              QTY : {item.qty}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              Price: $ {currencyFormat(item.price)}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="m-4 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="py-3 flex items-center justify-between">
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Total{" "}
                    </dt>
                    <dd className="text-lg leading-6 text-gray-700 col-span- mt-0">
                      $ {currencyFormat(payment.total)}
                    </dd>
                  </div>
                </dl>
              </div>
              <ButtonBig action={submitFinish} disable={false} label="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartFinishModal;
