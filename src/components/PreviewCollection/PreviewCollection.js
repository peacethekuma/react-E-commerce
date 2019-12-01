import React from 'react';
import './PreviewCollection.scss';

import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = ({ title, items }) => (
  <div className='preview'>
    <h1 className='preview__title'>{title.toUpperCase()}</h1>
    <div className='preview__content'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
