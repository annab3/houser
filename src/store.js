import { createStore } from "redux";

const initialState = {
  houses: [],
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
};

export const ADD_HOUSE = "ADD_HOUSE";
export const DELETE_HOUSE = "DELETE_HOUSE";
export const UPDATE_STEP1 = "UPDATE_STEP1";
export const UPDATE_STEP2 = "UPDATE_STEP2";
export const UPDATE_STEP3 = "UPDATE_STEP3";
export const CANCEL = "CANCEL";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HOUSE:
      return {
        houses: action.payload,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        img: "",
        mortgage: 0,
        rent: 0
      };
    case DELETE_HOUSE:
      let index = state.houses.findIndex(house => house.id === action.payload);
      let copy = [...state.houses];
      copy.splice(index, 1);
      return {
        ...state,
        houses: copy
      };
    case UPDATE_STEP1:
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city,
        state: action.payload.state,
        zip: action.payload.zip
      };
    case UPDATE_STEP2:
      return {
        ...state,
        img: action.payload
      };
    case UPDATE_STEP3:
      return {
        ...state,
        mortgage: action.payload.mortgage,
        rent: action.payload.rent
      };
    case CANCEL:
      return {
        ...state,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        img: "",
        mortgage: 0,
        rent: 0
      };
    default:
      return state;
  }
}

export default createStore(reducer);
