import { configureStore } from '@reduxjs/toolkit'
import { LeadsApi } from '../services/LeadsApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [LeadsApi.reducerPath]: LeadsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LeadsApi.middleware),
})
setupListeners(store.dispatch)