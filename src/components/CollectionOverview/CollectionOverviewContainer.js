import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionsFetching } from '../../redux/shop/selectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
