import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  list: [],
};
const ListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LIST_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.LIST_ERROR:
      return { ...state, isLoading: false, error: payload };
    case ActionTypes.LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: payload };
    case ActionTypes.ADD_TO_LIST:
      const updatedList = state.list.concat(payload);
      return { ...state, list: updatedList };
    case ActionTypes.REMOVE_FROM_LIST:
      const filtredList = state.list.filter((i) => i && i.id != payload.id);
      return { ...state, list: filtredList };
    default:
      return state;
  }
};

export default ListReducer;
