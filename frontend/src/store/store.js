import { configureStore } from '@reduxjs/toolkit'
/*
import blogReducer from '../reducers/blogReducer'
import notificationReducer from '../reducers/notificationReducer'
import userReducer from '../reducers/userReducer'
import tokenReducer from '../reducers/tokenReducer'
*/

import personReducer from '../reducers/personReducer'
import generatorReducer from '../reducers/generatorReducer'
import dbPersonReducer from '../reducers/dbPersonReducer'
import hashReducer from '../reducers/hashReducer'

const store = configureStore({
  reducer:{

    persons: personReducer,
    generator: generatorReducer,
    dbpersons: dbPersonReducer,
    hash: hashReducer

  }
})

export default store