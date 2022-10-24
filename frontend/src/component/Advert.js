import React from "react"
import products from "../product";
import {Button} from "bootstrap";

function Advert({advert}) {
    return (
        <div>
            <div className='card mb-10'>
                <div className='card-body'>
                    <div className='card-body bg-light text-center'>
                        <div className='mb-2'>
                            <h6>
                                <a href={'/advert/${advert._id}'} className={"product-title"}>{advert.name}</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Advert