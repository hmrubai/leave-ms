import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';



const initialState = {
    user: localStorage.getItem('leve_user') ? JSON.parse(localStorage.getItem('leve_user')) : null,
    permissions: localStorage.getItem('leave_permissions') ? JSON.parse(localStorage.getItem('leave_permissions')) : null,
    token: Cookies.get('leave_token') ? Cookies.get('leave_token') : null,
    role: localStorage.getItem('leve_user') ? JSON.parse(localStorage.getItem('leve_user')).role : null,


}

export const authSlice = createSlice({
   
    name: 'auth',
    initialState,
    reducers: {
        
        authUser: (state, action) => {
        
            Cookies.set('leave_token', action.payload.token);
            localStorage.setItem('leve_user', JSON.stringify(action.payload.user));
            // state.user = action.payload.user;
            // state.token = action.payload.token;
        },
        userPermission: (state, action) => {
            localStorage.setItem('leave_permissions', JSON.stringify(action.payload));
        },
        userRole: (state, action) => {
            localStorage.setItem('leave_user_role', JSON.stringify(action.payload));
        },

        logout: (state) => {
            Cookies.remove('leave_token');
            localStorage.removeItem('leve_user');
            localStorage.removeItem('leave_permissions');
            state.user = null;
            state.Permissions = null;
            state.token = null;
        }

    }
})

export const { authUser,userPermission,userRole} = authSlice.actions;
export default authSlice.reducer;
