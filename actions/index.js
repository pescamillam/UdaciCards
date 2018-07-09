export const CREATE_DECK = 'CREATE_DECK';
export const ADD_CARD = 'ADD_CARD';

export function createDeckAction(title) {
  return function (dispatch) {
    dispatch({type: CREATE_DECK, title});
  }
}

export function addCardAction(data) {
  return function (dispatch) {
    dispatch({type: ADD_CARD, data});
  }
}