const createSlice = require('@reduxjs/toolkit').createSlice

//initial State
const initialState = {
    numOfCakes:10
}

// redux toolkit create slice which takes 3 parameter and automatically creates action creator and main reducer function
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state,action) =>{
            state.numOfCakes -= action.payload
        },
        restocked:(state,action) =>{
            state.numOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
