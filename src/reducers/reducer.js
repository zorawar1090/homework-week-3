export default function reducer (state = [], action = {}){
  switch(action.type){
    case 'ADD_MODEL':
      return [...state, action.payload]
    default:
      return state
  }
}