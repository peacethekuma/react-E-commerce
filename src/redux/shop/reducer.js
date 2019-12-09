import { SHOP_DATA_TABEL } from '../../shop.data';
import { UPDATE_COLLECTIONS } from './actions';

const INITIAL_STATE = {
  collections: SHOP_DATA_TABEL
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
