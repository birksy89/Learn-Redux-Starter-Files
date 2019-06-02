//  a reducer takes in two things

//  1 - the action
//  2-  a copy of the current state

function posts(state = [], action) {

    switch(action.type){
        case 'INCREMENT_LIKES':
        //  Get the key of what was clicked
        const i = action.index;
        //  Return the updated state
        return [
          ...state.slice(0,i), // before the one we are updating
          {
            ...state[i], // Take a copy of the state in pos[i]
            likes: state[i].likes +1 // Alter the property
          },
          ...state.slice(i+1), // after the one we are updating
        ]
        
        default: 
            return state
    }
}

export default posts;
