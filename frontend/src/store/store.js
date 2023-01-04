import { configureStore } from '@reduxjs/toolkit'
/*
import blogReducer from '../reducers/blogReducer'
import notificationReducer from '../reducers/notificationReducer'
import userReducer from '../reducers/userReducer'
import tokenReducer from '../reducers/tokenReducer'
*/

import personReducer from '../reducers/personReducer'
import generatorReducer from '../reducers/generatorReducer'

const store = configureStore({
  reducer:{

    persons: personReducer,
    generator: generatorReducer

  }
})

export default store