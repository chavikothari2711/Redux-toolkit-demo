# Redux-toolkit-demo
A demo project with the help of youtube channel.

## How to use
1. Fork the code or download it to your local file then after directing to your file type the followinng in cmd or terminal:

   ```
   npm init
   npm install
   ```

2. To run the file write command
  
   ```
   node index
   ```

### File Structure in reduxjs -toolkit demo generally used
- index.js : Subscribe | Unsubscribe and action dispath takes place
- (Folder)app >> store.js : store is configured in format of name and reducers pair with middleware(optional)
- (Folder)features : It includes folders of different reducer and action creators(Slice)

### Create Slice
It is a method comes under @reduxjs/toolkit package which takes 3 parameter as input name, initial state, reducers (in complex situation extrareducers is also used). name and initial state are same used in redux. Reducers contains an object of actions. It automaically generates action creator and main reducer function

### Configure Store
It contains all the reducer and key to it along with middleware(optional)

### Middleware
Provides a third party extension point between dispatching an action and moment it reaches reducer. For logging, reporting crashing etc. redux-logger package is used

### Async Actions (fetch data)
Package used:
- axios: used to request an API end point
- redux-thunk: define asnc action creator middleware(default)
Fake RESTapi end point: https://jsonplaceholder.typicode.com/

## Redux
[Check out the reference](https://github.com/chavikothari2711/Redux-Demo)

### Extra reducers(Create Slice)
Note: In case of redux each reducer can update its state only but can respond to any action type. whereas in case of redux-toolkit it is not possible. To overcome that and in case of complex reducer or async actions situtation extra reducers are used. 

Extra reducers have builder to which case is added and the action taken during such case.(check userSlice or iceCreamSlice). It can also be done without using builder by bracket notation in such case action type must be writter as string inside square bracket followed by the action that should be taken. 
