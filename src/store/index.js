import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "../features/authSlice";
import { authApi } from "./../services/authApi";
import { branchApi } from './../services/branchApi';
import { companyApi } from './../services/companyApi';
import { departmentApi } from "../services/departmentApi";
import { designationApi } from "../services/designationApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [branchApi.reducerPath]: branchApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [designationApi.reducerPath]: designationApi.reducer,
    devTools: true,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      companyApi.middleware,
      branchApi.middleware,
      departmentApi.middleware,
      designationApi.middleware,
      

    ]),
});
setupListeners(store.dispatch);
export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;
