import React from 'react';

import Collection from '../../components/collection/collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Collection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
  });

export default connect(mapStateToProps)(CollectionOverview);