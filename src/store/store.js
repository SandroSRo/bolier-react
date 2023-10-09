import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth.slice'
import menuReducer from './features/menu.slice'

export default configureStore({
  reducer: {
    auth:authReducer,
    menu:menuReducer
  },
})
