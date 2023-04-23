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
const handleDelete = (state, { payload }) => {
    state.isLoading = false
    state.items = state.items.filter(item => item.id !== payload.id)
    state.error = ''
}

const handleRejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}
export { handleRejected, handleDelete, handleUpdate, handleFulfilled, handlePending }