import React from 'react';
import { connect } from 'react-redux';

import collectionOverviewContainer from '../../components/collections-overview/collection-overview.container';
import { Route } from 'react-router-dom';
import CategoryPageContainer from '../category/category.conatiner';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={collectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CategoryPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
