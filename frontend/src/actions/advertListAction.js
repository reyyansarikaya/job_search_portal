import {
    ADVERT_LIST_REQUEST,
    ADVERT_LIST_SUCCESS,
    ADVERT_LIST_FAIL,

    ADVERT_DETAILS_REQUEST,
    ADVERT_DETAILS_SUCCESS,
    ADVERT_DETAILS_FAIL
} from '../constants/advertConstants'
import axios from 'axios'

export const ListAdverts = () => async (dispatch) => {
    try {
        dispatch({type: ADVERT_LIST_REQUEST})
        const {data} = await axios.get('/api/adverts')

        dispatch({
            type: ADVERT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADVERT_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const ListAdvertsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: ADVERT_DETAILS_REQUEST})
        const {data} = await axios.get('/api/adverts/${id}')

        dispatch({
            type: ADVERT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ADVERT_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}