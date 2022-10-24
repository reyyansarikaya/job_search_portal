import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import '../my.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import {Row} from 'react-bootstrap'
import {ListAdvertsDetails} from "../actions/advertListAction";
import Loader from "../component/Loader";
import Message from "../component/Message";
import Advert from "../component/Advert";


function AdvertScreen() {
    const {id} = useParams();
    const dispatch = useDispatch()
    const advertDetails = useSelector(state => state.advertDetails)
    const {loading, error, advert} = advertDetails
    useEffect(() => {
        dispatch(ListAdvertsDetails('${id}'))
    }, [])

    return (
        <div>
            {loading ? <Loader/>
                : error ? <Message variant={'danger'}>{error}</Message>
                    :
                    <Row>
                        <div className='header'>
                            <div className='row'>
                                <div className='col-md-9'><h2 className='product-title underline'>{advert.name}</h2>
                                </div>

                            </div>

                        </div>
                    </Row>}
        </div>
    )
}