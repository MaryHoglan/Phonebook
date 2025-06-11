import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations"
import { logout } from "../auth/operations"; 


const initialState = {
    items: [],
    isLoading: false,
    error: null,
    };

const slice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
                
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
                
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                 state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
                
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                 state.error = null;
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, () => initialState); 
            
    },
});

 export default slice.reducer;   

