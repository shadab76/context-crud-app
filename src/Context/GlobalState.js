import React, { createContext, useReducer, useState,useEffect } from "react";
import AppReducers from "./AppReducers";

// intinal state
// const intinalState = {
//     users: [],
//     selectedUserData:[]
// }
const DataKey = "DATAKEY"
const intinalStateData = JSON.parse(localStorage.getItem(DataKey))

// create context


//theme
const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
        if (userMedia.matches) {
            return "dark";
        }
    }

    // If you want to use dark theme as the default, return 'dark' instead
    return "light";
};

export const GlobalContext = createContext();


//global provider

export const GlobalProvider = ({ initialTheme, children }) => {
    const [state] = useReducer(AppReducers, intinalStateData)

    useEffect(() => {
        localStorage.setItem(DataKey, JSON.stringify(state));
      }, [state]);

    //Actions 
    // const RemoveUser = (id) => {
    //     dispatch({
    //         type: 'REMOVE_USERS',
    //         payload: id
    //     })
    // }
    //add users

    // const AddUser = (user) => {
    //     dispatch({
    //         type: 'ADD_USERS',
    //         payload: user
    //     })
    // }

    // update users
    // const updateUser = (user) => {
    //     dispatch({
    //         type: 'EDIT_USERS',
    //         payload: user
    //     })
    // }
    // const selecteduser = (user) => {
    //     console.log("user selected line no 69",user)
    //     dispatch({
    //         type: 'SELECTED_DATA',
    //         payload: user
    //     })
    // }


    //theme
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === "dark";

        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(rawTheme);

        localStorage.setItem("color-theme", rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <GlobalContext.Provider
            value={{
                // users: state.users,
                // RemoveUser,
                // AddUser,
                // selecteduser,
                // updateUser,
                theme,
                setTheme
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

