import { configureStore } from "@reduxjs/toolkit";

// slices
import personalReducer from "./features/personal/personalSlice";

export const store = configureStore({
  reducer: {
    personal: personalReducer,
  },
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
