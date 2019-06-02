//  a reducer takes in two things

//  1 - the action
//  2-  a copy of the current state

function postComments(state = [], action) {
  console.log('In postComments reducer');

  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      // return the new state with the selected comment removed
      return [
        ...state.slice(0, action.index), // before the one we are updating
        ...state.slice(action.index + 1) // after the one we are updating
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  console.log('In comments reducer');
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      //  overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }

  return state;
}

export default comments;
