import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {advertListReducer, advertDetailsReducer} from '../reducer/advertListReducer'
import {
    userRecuder,
    userRegisterRecuder,
    userDetailReducer,
    userUpdateProfileReducer,
    userListRecuder,
    userDeleteReducer,
    userUpdateReducer
} from '../reducer/userReducer'

const reducer = combineReducers({
    advertList: advertListReducer,
    advertDetails: advertDetailsReducer,
    userLogin: userRecuder,
    userRegister: userRegisterRecuder,
    userDetails: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListRecuder,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

})



const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    userDetails: {user: userInfoFromStorage},
    userUpdateProfile: {success: userInfoFromStorage}


}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store