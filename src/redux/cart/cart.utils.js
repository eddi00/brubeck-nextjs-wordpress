// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   const existingCartItem = cartItems.find(
//     cartItem => cartItem.id === cartItemToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map(cartItem =>
//       cartItem.id === cartItemToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...cartItemToAdd }];
// };

// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     cartItem => cartItem.id === cartItemToRemove.id &&
//   );

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
//   }

//   return cartItems.map(cartItem =>
//     cartItem.id === cartItemToRemove.id
//       ? {
//           ...cartItem,
//           quantity: cartItem.quantity - 1,
//         }
//       : cartItem
//   );
// };

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem =>
    compareItems(cartItem, cartItemToAdd)
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      compareItems(cartItem, cartItemToAdd)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem =>
    compareItems(cartItem, cartItemToRemove)
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem =>
      differentItems(cartItem, cartItemToRemove)
    );
  }

  return cartItems.map(cartItem =>
    compareItems(cartItem, cartItemToRemove)
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

export const compareItems = (item1, item2) => {
  return (
    item1.id === item2.id &&
    item1.size === item2.size &&
    item1.color === item2.color
  );
};

export const differentItems = (item1, item2) => {
  return (
    item1.id !== item2.id ||
    item1.size !== item2.size ||
    item1.color !== item2.color
  );
};
