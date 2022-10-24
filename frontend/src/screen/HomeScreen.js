import React, {useState, useEffect} from "react"
import {Col, Row} from "react-bootstrap";
import Advert from "../component/Advert";
import {ListAdverts} from "../actions/advertListAction"
import {useDispatch, useSelector} from "react-redux"
import Loader from '../component/Loader'
import Message from '../component/Message'

function HomeScreen() {
    const dispatch = useDispatch()
    const advertList = useSelector(state => state.advertList)
    const {loading, error, adverts} = advertList
    useEffect(() => {
        dispatch(ListAdverts())
    }, [dispatch])

    return (

        <div>
            <h1>İlanlar</h1>
            {loading ? <Loader/>
                : error ? <Message variant={'danger'}>{error}</Message>
                    :
                    <Row>
                        {adverts.map(advert => (
                            <Col key={advert._id} sn={12} nd={6} lg={1} xl={8}>
                                <Advert advert={advert}/>
                            </Col>
                        ))}

                    </Row>}


        </div>
    )
}

export default HomeScreen