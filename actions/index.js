export const CREATE_DECK = 'CREATE_DECK';

export function createDeckAction(title) {
  return function (dispatch) {
    dispatch({type: CREATE_DECK, title});
  }
}