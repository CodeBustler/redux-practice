import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action) => {
			state.push(action.payload);
		},
		// remove: (state, action) => {
		// 	return state.filter((item) => item.id !== action.payload);
		// },
		remove: (state, action) => {
			const indexToRemove = state.findIndex(
				(item) => item.id === action.payload,
			);

			if (indexToRemove !== -1) {
				state.splice(indexToRemove, 1);
			}
		},
	},
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
