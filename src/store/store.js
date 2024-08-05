import { configureStore } from '@reduxjs/toolkit'
import openSidebarList from './Slices/booleanSlice'

export const store = configureStore({
  reducer: {
    boolean: openSidebarList
  },
})