import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import settingsReducer from "./settingsSlice";
import signupReducer from "./auth/signup/signupSlice";
import loginReducer from "./auth/login/loginSlice";
export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    settings: settingsReducer,
    signup: signupReducer,
    login: loginReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
