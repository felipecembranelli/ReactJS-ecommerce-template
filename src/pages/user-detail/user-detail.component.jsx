import React from 'react';
//import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
//import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
//import CheckoutItem from '../../components/checkout-item/checkout-item.component'

//import './user-detail.styles.scss';
//import './collection-item.styles.scss';
import "./homepage.styles.scss";

import UserDetail from '../../components/user-detail/user-detail.component'
import Directory from '../../components/directory/directory.component'

const UserDetailPage = () => (
    <div className='group'>
        <UserDetail account='XXXXX' balance='1000' />
    </div>
  );


export default UserDetailPage;