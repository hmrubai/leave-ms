import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "./../services/authApi";
import { employeeApi } from "../services/employeeApi";

const store = configureStore({
  reducer: {
    // auth: authReducer,

    [authApi.reducerPath]: authApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,

    devTools: true,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      employeeApi.middleware
    ]),
});
setupListeners(store.dispatch);
export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;
