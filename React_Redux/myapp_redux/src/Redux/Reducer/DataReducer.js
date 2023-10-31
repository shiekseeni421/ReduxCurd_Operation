import { actionType } from "../contants/actiontyp";

let intialState = {
  UserDataArray: [],
  user: {},
};

export const DataReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionType.GET_DATA:
      return {
        ...state,
        UserDataArray: payload,
      };

    case actionType.DELETE_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};
