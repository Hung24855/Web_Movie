import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {}, //Thể loại
};

export const homeSlice = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {
    // Define các actions của reducers . action sẽ tự động convert sang object có dạng {type:"string",payload:any}
    // Trong trường hợp Action dưới được thực thi thì thì action có dạng :
    // {type : "homeReducer/getApiConfiguration" , payload : data}
    getApiConfiguration: (state, action) => {
      return {
        ...state,
        url: action.payload,
      };
    },
    getGenres: (state, action) => {
      return {
        ...state,
        genres: action.payload,
      };
    },
  },
});

// Export các actions của slice reducer để sử dụng
export const { getApiConfiguration, getGenres } = homeSlice.actions;
// Export reducer của slice
export default homeSlice.reducer;
