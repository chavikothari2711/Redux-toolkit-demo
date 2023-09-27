const store = require('../redux-toolkit/app/store')
const cakeActions = require('../redux-toolkit/features/cake/cakeSlice').cakeActions
const iceCreamActions = require('../redux-toolkit/features/icecream/icecreamSlice').iceCreamActions
const fetchUsers = require('../redux-toolkit/features/user/userSlice').fetchUsers 

console.log('Initial State',store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('Update state',store.getState())
})

store.dispatch(cakeActions.ordered(3))
store.dispatch(iceCreamActions.ordered(3))
store.dispatch(iceCreamActions.restocked(3))
store.dispatch(cakeActions.restocked(3))

store.dispatch(fetchUsers())

//unsubscribe();