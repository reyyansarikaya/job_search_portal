import {
    ADVERT_LIST_REQUEST,
    ADVERT_LIST_SUCCESS,
    ADVERT_LIST_FAIL,

    ADVERT_DETAILS_REQUEST,
    ADVERT_DETAILS_SUCCESS,
    ADVERT_DETAILS_FAIL
} from '../constants/advertConstants'

export const advertListReducer = (state = {adverts: []}, action) => {
    switch (action.type) {
        case ADVERT_LIST_REQUEST:
            return {loading: true, adverts: []}
        case ADVERT_LIST_SUCCESS:
            return {loading: false, adverts: action.payload}
        case ADVERT_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const advertDetailsReducer = (state = {advert: {reviews:[]}}, action) => {
    switch (action.type) {
        case ADVERT_DETAILS_REQUEST:
            return {loading: true, ...state}
        case ADVERT_DETAILS_SUCCESS:
            return {loading: false, advert: action.payload}
        case ADVERT_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}