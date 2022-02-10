import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
//import collections from '../../data/products.json';
import { useLocation } from 'react-router-dom'

function LoadProducts() {

    let location = useLocation()
    let data;

    console.log(location.pathname)

    switch(location.pathname) {
        case '/shop/travel':
            data = require('../../data/products-travel.json'); 
            break;
        default:
            data = require('../../data/products.json'); 
      }    

    return data;
}

const ShopPage = () => (
    <div className='shop-page'>
      
        <CollectionsOverview collections={LoadProducts()} />
    </div>

    // {label ? (
    //     <label
    //         className={`${
    //             otherProps.value.length ? 'shrink' : ''
    //             } form-input-label`}
    //     >
    //         {label}
    //     </label>
    // ) : null}
)

export default ShopPage;