const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADD_ITEM":
            // check if Product is Alredy Exist
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;
        case "MINUS_ITEM":
            // check if Product is Alredy Exist
            const exist2 = state.find((x) => x.id === product.id)
            if (exist2) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;
        case "DELETED_ITEM":
            const exist1 = state.find((x)=>x.id === product.id);
            if(exist1.qty === 1){
                return state.filter((x)=>x.id !== exist1.id);

            }else{
                return state.map((x)=>x.id ===product.id ?{...x,
                qty: x.qty - 1}:x)
            }
            break;


            default:
                return state;
                break;
    }
  
}

export default handleCart