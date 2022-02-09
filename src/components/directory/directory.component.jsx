import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
//import data from './data.json';

const Directory = ({categories}) =>  (
  <div className="directory-menu">
    {categories.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}/>
    ))}
  </div>
)

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySections
// })

// export default connect(mapStateToProps)(Directory);

export default Directory;

