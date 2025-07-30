export type ProductType = {
  id: number;
  name: string;
  price: number;
  availableCount: number;
  total: number;
  orderedQuantity: number;
  discounted: boolean;
};

export function ProductsReducer(state: ProductType[], action) {
  switch (action.type) {
    case "SET":
      return action.payload.map((product) => ({
        ...product,
        total: 0,
        orderedQuantity: 0,
        discounted: false,
      }));

    case "OPERATION": {
      const newList = [...state];
      const index = newList.findIndex((product) => product.id === action.id);
      const newProduct = { ...newList[index] };
      newProduct.orderedQuantity =
        newProduct.orderedQuantity + action.orderedQuantity;
      calcDiscount(newProduct);
      newList[index] = newProduct;
      return newList;
    }
    default:
      return state;
  }
}

function calcDiscount(product: ProductType) {
  if (product.orderedQuantity * product.price >= 1000) {
    product.total = product.orderedQuantity * product.price * 0.9;
    product.discounted = true;
  } else {
    product.total = product.orderedQuantity * product.price;
    product.discounted = false;
  }
}
