import React from 'react';

import './collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const Collection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter((item,idx) => idx < 4).map(({id, ...OtheritemProps}) => (
        <CollectionItem key={id} {...OtheritemProps}/>
      ))}
    </div>
  </div>
);

export default Collection;
