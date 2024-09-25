const SHOW = 'SHOW' as const
const IS_SHOW = 'IS_SHOW' as const

export const show = (image: string) => ({type: SHOW, image})
export const isShow = (click: boolean) => ({type: IS_SHOW, click})

interface ShowAction {
  type: typeof SHOW,
  image: string
}

interface IsShowAction {
  type: typeof IS_SHOW,
  click: boolean
}

const initialState = {
  pickImage: '',
  appearImage: false
}

type Action = ShowAction | IsShowAction

const appearExpandPhoto = (state = initialState, action: Action) => {
  switch(action.type) {
    case SHOW:
      return { ...state, pickImage: action.image }
    case IS_SHOW: 
      return { ...state, appearImage: action.click }
    default:
      return state
  }
}

export default appearExpandPhoto