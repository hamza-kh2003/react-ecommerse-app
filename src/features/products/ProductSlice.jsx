import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filteredItems: [],
  searchItem: "",
  selectedCateogry: "All",
  /**/ selectedItem: "",
};

const filterProducts = (state) => {
  return state.items.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(state.searchItem.toLowerCase());
    const matchCategory =
      state.selectedCateogry === "All" ||
      item.category === state.selectedCateogry;
    return matchSearch && matchCategory;
  });
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setSearchItem: (state, action) => {
      state.searchItem = action.payload;
      state.filteredItems = filterProducts(state);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCateogry = action.payload;
      state.filteredItems = filterProducts(state);
    },
    setSelectesItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const {
  setSearchItem,
  setProducts,
  setSelectedCategory,
  setSelectesItem,
} = productsSlice.actions;
export default productsSlice.reducer;
