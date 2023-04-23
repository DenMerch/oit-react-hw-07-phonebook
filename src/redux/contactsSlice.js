import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./initialState";
import { fetchContacts, addContact, deleteContact } from ";service/apiContacts";

const handlePending = (state) => {

    state.isLoading = true
}

const handleFulfilled = (state, { payload }) => {
    state.isLoading = false

    state.items = payload
    state.error = ''
}
const handleUpdate = (state, { payload }) => {
    state.isLoading = false

    state.items.push(payload)
    state.error = ''
}

const handleRejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, handleFulfilled)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, handleUpdate)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, handleFulfilled)
            .addCase(deleteContact.rejected, handleRejected)
    }
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             state.items.push(action.payload)
    //         },
    //         prepare(name, number) {
    //             return {
    //                 payload: {
    //                     id: nanoid(),
    //                     name,
    //                     number,
    //                 }
    //             }
    //         }
    //     },
    //     deleteContact(state, action) {
    //         const index = state.items.findIndex(contact => contact.id === action.payload);
    //         state.items.splice(index, 1);
    //     },

    // }
})

export const contactsReducer = contactsSlice.reducer