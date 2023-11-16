import { configureStore } from "@reduxjs/toolkit";
import homeSlide from "./homeSlice";

export const store = configureStore({
  reducer: {
    // Thêm slice reducer vào root reducer
    // home là tên của state mà homeSlide quản lý
    home: homeSlide,
  },
});
