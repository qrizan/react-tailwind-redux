export const fetchProductByCategoryAction = (category) => {
    return {
        type: "FETCH_PRODUCTS_BY_CATEGORY",
        payload: category
    }
}

export const fetchProductByIdAction = (id) => {
    return {
        type: "FETCH_PRODUCT_BY_ID",
        payload: id
    }
}

export const addToCartAction = (id, size) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            id,
            size
        }
    }
}

export const updateQtyAction = (id, product_id, qty) => {
    return {
        type: "UPDATE_QTY",
        payload: {
            id,
            product_id,
            qty
        }
    }
}

export const incrementCounterAction = (id, product_id) => {
    return {
      type: "INCREMENT",
      payload: {
        id,
        product_id
      }
    }
  }
  
export const decrementCounterAction = (id, product_id) => {
    return {
      type: "DECREMENT",
      payload: {
        id,
        product_id
      }
    }
}

export const updatePaymentAction = (amount) => {
    return {
        type: "UPDATE_PAYMENT",
        payload: amount
    }
}

export const removeItemAction = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: {
            id
        }
    }
}

export const resetCartAction = () => {
    return {
        type: "RESET_CART"
    }
}

export const activeMenuAction = (menu) => {
    return {
        type: "ACTIVE_MENU",
        payload: menu
    }
}