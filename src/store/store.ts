import { configureStore } from '@reduxjs/toolkit'

import { booksApi } from '@/api/books-api'

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(booksApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
