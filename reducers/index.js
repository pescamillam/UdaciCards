import {ADD_CARD, CREATE_DECK} from "../actions";

const defaultState = {
  "decks": [
    {
      "title": 'React',
      "questions": [
        {
          "question": 'What is React?',
          "answer": 'A library for managing user interfaces'
        },
        {
          "question": 'Where do you make Ajax requests in React?',
          "answer": 'The componentDidMount lifecycle event'
        }
      ]
    },
    {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  ]
};

export function decks(state=defaultState, action) {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        decks: state.decks.concat(
          {
            title: action.title,
            questions: []
          }
        )
      };
    case ADD_CARD:
      return {
        ...state,
        decks: state.decks.map(
          (deck) => {
            if (deck.title === action.data.deck.title) {
              return {
                ...deck,
                questions: deck.questions.concat(action.data.question)
              }
            }
            return deck;
          }
        )
      };
    default:
      return state;
  }
}