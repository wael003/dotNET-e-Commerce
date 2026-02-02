import { createSlice } from "@reduxjs/toolkit";

const InitialDarkMode = localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')!) : false;

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loading: false,
        darkMode: InitialDarkMode,
    },
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        },
        toggleDarkMode: (state) => {
            localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
            state.darkMode = !state.darkMode;
        }
    }
})

export const { startLoading, stopLoading, toggleDarkMode } = uiSlice.actions;