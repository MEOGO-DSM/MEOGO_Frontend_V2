const ADD = 'ADD' as const;
const REMOVE = 'REMOVE' as const;

export const add = (payload: string) => ({ type: ADD, payload })
export const remove = (payload: string) => ({ type: REMOVE, payload })

interface AddAction {
  type: typeof ADD
  payload: string
}

interface RemoveAction {
  type: typeof REMOVE
  payload: string
}

type ImageAction = AddAction | RemoveAction

const initialState = {
  image: []
}

const imageAddRemove = (state = initialState, action: ImageAction) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        image: [...state.image, action.payload]
      }
    case REMOVE: 
      return {
        ...state,
        image: state.image.filter(image => image !== action.payload)
      }
    default:
      return state
  }
}

export default imageAddRemove