import { SHOP_DATA_TABEL } from '../../shop.data';
const INITIAL_STATE = {
  collections: SHOP_DATA_TABEL
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default shopReducer;
