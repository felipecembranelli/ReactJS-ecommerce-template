import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'


import collections from '../../data/products.json';

const ShopPage = () => (
    <div className='shop-page'>
        <CollectionsOverview collections={collections} />
    </div>
)

export default ShopPage;