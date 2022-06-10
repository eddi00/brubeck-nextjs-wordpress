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

export const modifyItemFromCart = (cartItems, cartItemToModify, newItem) => {
  // const existingCartItem = cartItems.find(cartItem =>
  //   compareItems(cartItem, cartItemToModify)
  // );

  // if (existingCartItem.quantity === 1) {
  return cartItems.map(cartItem =>
    compareItems(cartItem, cartItemToModify)
      ? {
          // ...cartItem,
          ...newItem,
        }
      : cartItem
  );
  // }
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
