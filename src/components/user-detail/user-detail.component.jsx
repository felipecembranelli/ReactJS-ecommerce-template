import React from 'react';
// import { connect } from 'react-redux';
// import CustomButton from '../custom-button/custom-button.component.jsx';
// import { addItem }from '../../redux/cart/cart.actions.js';

//import './user-detail.styles.scss';
//import './sign-in.styles.scss';
import './form-input.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';


const UserDetail = ({account, balance} ) => {
  return (
    <div>
    
    <h2>User details:</h2>
    <span>See below the user details</span>

    <table>
      <tr>
        <td>
        <img src="metamask.svg"/>
        </td>
        <td>
        <form>
          <FormInput
            name="account"
            type="label"
            value={account}
            label="Account"
          />

          <FormInput
            name="balance"
            type="label"
            value={balance}
            label="Balance"
            required
          />

          
          {/* <div className='buttons' >
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
          </div> */}
        </form>
        </td>
      </tr>
    </table>
    </div>
  );
}

export default UserDetail;