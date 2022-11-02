// add item to cart
export const addCart= (product)=>{
    return{
        type: "ADD_ITEM",
        payload: product
    }
}


// delete item from cart

export const delCart= (product)=>{
    return{
        type: "DELETED_ITEM",
        payload: product
    }
}
// minus item from cart
export const minCart= (product)=>{
    return{
        type: "MINUS_ITEM",
        payload: product
    }
}