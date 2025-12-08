import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './itemSlice';
import fetchStatusSlice from './fetchStatusSlice';

const MyntraStore = configureStore({
    reducer : {
        items : itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer
    }
})

export default MyntraStore;