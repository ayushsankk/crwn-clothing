import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import { selectCurrentDirectory } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...OtherSectionProps }) => (
      <MenuItem key={id} {...OtherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectCurrentDirectory,
});

export default connect(mapStateToProps)(Directory);
