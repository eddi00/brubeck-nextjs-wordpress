import { createSlice, current } from "@reduxjs/toolkit";
import {
  countByCategory,
  countByGender,
  countBySize,
  returnFilterColor,
  returnFilteredProductsByCategory,
  returnFilteredProductsByColor,
  returnFilteredProductsBySize,
} from "./shop.utils";

const initialState = {
  filterByGender: {
    men: { checked: false, count: 0 },
    women: { checked: false, count: 0 },
    unisex: { checked: false, count: 0 },
    boys: { checked: false, count: 0 },
    girls: { checked: false, count: 0 },
  },

  filterByCategory: {
    thermal: { checked: false, count: 0 },
    fitness: { checked: false, count: 0 },
    underware: { checked: false, count: 0 },
    accessories: { checked: false, count: 0 },
    new: { checked: false, count: 0 },
    sale: { checked: false, count: 0 },
  },

  filterByColor: {},
  filterBySize: {
    XS: { checked: false, count: 0 },
    S: { checked: false, count: 0 },
    M: { checked: false, count: 0 },
    L: { checked: false, count: 0 },
    XL: { checked: false, count: 0 },
  },
  page: 1,
  sliceProductsBy: 6,
  products: [],
  productsFilteredByGenCatSize: null,
  filteredProducts: null,
};

export const shopSlice = createSlice({
  name: "shopFilter",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      if (state.filteredProducts === null) {
        state.productsFilteredByGenCatSize = action.payload;
        state.filteredProducts = action.payload;

        /* Count products by categories and set the values */
        Object.entries(current(state.filterByGender)).map(([key, value]) => {
          state.filterByGender[key].count = countByCategory(
            action.payload,
            key
          );
        });

        Object.entries(current(state.filterByCategory)).map(([key, value]) => {
          state.filterByCategory[key].count = countByCategory(
            action.payload,
            key
          );
        });

        Object.entries(current(state.filterBySize)).map(([key, value]) => {
          state.filterBySize[key].count = countBySize(action.payload, key);
        });

        state.filterByColor = returnFilterColor(action.payload);
      }
    },

    setFilteredProducts: (state, action) => {
      state.filterProducts = action.payload;
    },
    applyGender: (state, action) => {
      if (state.filterByGender[action.payload]) {
        state.filterByGender[action.payload].checked =
          !state.filterByGender[action.payload].checked;

        if (state.products.length === 0) return;

        // Get products filtered by Gender first
        let genderArray = [];
        Object.entries(current(state.filterByGender)).map(([key, value]) => {
          if (value.checked === true) genderArray.push(key);
        });

        let categoryArray = [];
        Object.entries(current(state.filterByCategory)).map(([key, value]) => {
          if (value.checked === true) categoryArray.push(key);
        });

        let sizeArray = [];
        Object.entries(current(state.filterBySize)).map(([key, value]) => {
          if (value.checked === true) sizeArray.push(key);
        });

        let temp = current(state.products);
        if (genderArray.length > 0) {
          temp = returnFilteredProductsByCategory(temp, genderArray);
        }

        if (categoryArray.length > 0) {
          temp = returnFilteredProductsByCategory(temp, categoryArray);
        }

        if (sizeArray.length > 0) {
          temp = returnFilteredProductsBySize(temp, sizeArray);
        }

        // Apply results if there are any
        state.productsFilteredByGenCatSize = temp;
        state.filteredProducts = temp;

        // Re-assign count values in filters taking into account the new filtered array
        // Object.entries(current(state.filterByGender)).map(([key, value]) => {
        //   state.filterByGender[key].count = countByGender(temp, key);
        // });
        Object.entries(current(state.filterByCategory)).map(([key, value]) => {
          state.filterByCategory[key].count = countByCategory(temp, key);
        });
        Object.entries(current(state.filterBySize)).map(([key, value]) => {
          state.filterBySize[key].count = countBySize(temp, key);
        });
        state.filterByColor = returnFilterColor(temp);
      }
    },
    applyCategory: (state, action) => {
      if (state.filterByCategory[action.payload]) {
        state.filterByCategory[action.payload].checked =
          !state.filterByCategory[action.payload].checked;

        // First
        let genderArray = [];
        Object.entries(current(state.filterByGender)).map(([key, value]) => {
          if (value.checked === true) genderArray.push(key);
        });

        let categoryArray = [];
        Object.entries(current(state.filterByCategory)).map(([key, value]) => {
          if (value.checked === true) categoryArray.push(key);
        });

        let sizeArray = [];
        Object.entries(current(state.filterBySize)).map(([key, value]) => {
          if (value.checked === true) sizeArray.push(key);
        });

        let temp = current(state.products);
        if (genderArray.length > 0) {
          temp = returnFilteredProductsByCategory(temp, genderArray);
        }
        if (categoryArray.length > 0) {
          temp = returnFilteredProductsByCategory(temp, categoryArray);
        }
        if (sizeArray.length > 0) {
          temp = returnFilteredProductsBySize(temp, sizeArray);
        }

        // Apply results if there are any
        state.productsFilteredByGenCatSize = temp;
        state.filteredProducts = temp;

        // Re-assign count values in filters taking into account the new filtered array
        Object.entries(current(state.filterByGender)).map(([key, value]) => {
          state.filterByGender[key].count = countByGender(temp, key);
        });
        // Object.entries(current(state.filterByCategory)).map(([key, value]) => {
        //   state.filterByCategory[key].count = countByCategory(temp, key);
        // });
        Object.entries(current(state.filterBySize)).map(([key, value]) => {
          state.filterBySize[key].count = countBySize(temp, key);
        });
        state.filterByColor = returnFilterColor(temp);
      }
    },
    applySize: (state, action) => {
      if (state.filterBySize[action.payload]) {
        state.filterBySize[action.payload].checked =
          !state.filterBySize[action.payload].checked;

        // Get products filtered by Gender first
        let genderArray = [];
        Object.entries(current(state.filterByGender)).map(([key, value]) => {
          if (value.checked === true) genderArray.push(key);
        });

        let categoryArray = [];
        Object.entries(current(state.filterByCategory)).map(([key, value]) => {
          if (value.checked === true) categoryArray.push(key);
        });

        let sizeArray = [];
        Object.entries(current(state.filterBySize)).map(([key, value]) => {
          if (value.checked === true) sizeArray.push(key);
        });

        let temp = current(state.products);
        if (genderArray.length > 0) {
          temp = returnFilteredProductsByCategory(temp, genderArray);
        }

        if (categoryArray.length > 0) {
          temp = returnFilteredProductsByCategory(temp, categoryArray);
        }

        if (sizeArray.length > 0) {
          temp = returnFilteredProductsBySize(temp, sizeArray);
        }

        // Apply results if there are any
        state.productsFilteredByGenCatSize = temp;
        state.filteredProducts = temp;

        // Re-assign count values in filters taking into account the new filtered array
        Object.entries(current(state.filterByGender)).map(([key, value]) => {
          state.filterByGender[key].count = countByGender(temp, key);
        });
        Object.entries(current(state.filterByCategory)).map(([key, value]) => {
          state.filterByCategory[key].count = countByCategory(temp, key);
        });
        // Object.entries(current(state.filterBySize)).map(([key, value]) => {
        //   state.filterBySize[key].count = countBySize(temp, key);
        // });
        state.filterByColor = returnFilterColor(temp);
      }
    },
    applyColor: (state, action) => {
      if (state.filterByColor[action.payload]) {
        state.filterByColor[action.payload].checked =
          !state.filterByColor[action.payload].checked;

        let colorArray = [];
        Object.entries(current(state.filterByColor)).map(([key, value]) => {
          if (value.checked === true) colorArray.push(key);
        });

        let temp = current(state.productsFilteredByGenCatSize);
        if (colorArray.length > 0) {
          temp = returnFilteredProductsByColor(temp, colorArray);
        }
        state.filteredProducts = temp;
      }
    },
    recount: (state, action) => {
      let temp = current(state.products);
      // Re-assign count values in filters taking into account the new filtered array
      Object.entries(current(state.filterByGender)).map(([key, value]) => {
        state.filterByGender[key].count = countByGender(temp, key);
      });
      Object.entries(current(state.filterByCategory)).map(([key, value]) => {
        state.filterByCategory[key].count = countByCategory(temp, key);
      });
      Object.entries(current(state.filterBySize)).map(([key, value]) => {
        state.filterBySize[key].count = countBySize(temp, key);
      });
      state.filterByColor = returnFilterColor(temp);
    },

    addCategory: (state, action) => {
      if (state.filterByCategory[action.payload]) {
        state.filterByCategory[action.payload].checked = true;
      }
    },
    removeCategory: (state, action) => {
      if (state.filterByCategory[action.payload]) {
        state.filterByCategory[action.payload].checked = false;
      }
    },

    addColor: (state, action) => {
      if (state.filterByColor[action.payload]) {
        state.filterByColor[action.payload].checked = true;
      }
    },
    removeColor: (state, action) => {
      if (state.filterByColor[action.payload]) {
        state.filterByColor[action.payload].checked = false;
      }
    },

    resetFilter: state => {
      return {
        ...state,
        filterByCategory: initialState.filterByCategory,
        filterBySize: initialState.filterBySize,
        filterByGender: initialState.filterByGender,
        filterByColor: {},
      };
    },
    resetFilterWithProducts: (state, action) => {
      state.filterByCategory = initialState.filterByCategory;
      state.filterByColor = {};
      state.filterByGender = initialState.filterByGender;
      state.filterBySize = initialState.filterBySize;

      state.products = action.payload;
      state.productsFilteredByGenCatSize = action.payload;
      state.filteredProducts = action.payload;

      state.page = 1;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    resetPage: state => {
      state.page = 1;
    },
  },
});

export const {
  addCategory,
  removeCategory,
  addColor,
  removeColor,
  changePage,
  resetPage,
  resetFilter,
  setProducts,
  setFilteredProducts,
  applyGender,
  applyCategory,
  applySize,
  applyColor,
  recount,
  resetFilterWithProducts,
} = shopSlice.actions;

export default shopSlice.reducer;
