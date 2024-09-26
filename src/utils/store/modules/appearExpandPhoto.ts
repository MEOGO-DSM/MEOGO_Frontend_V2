const SHOW = 'SHOW' as const
const IS_SHOW = 'IS_SHOW' as const
const CURRENT_INDEX = 'CURRENT_INDEX' as const
const CURRENT_YEAR = 'CURRENT_YEAR' as const

export const show = (image: string) => ({type: SHOW, image})
export const isShow = (click: boolean) => ({type: IS_SHOW, click})
export const currentIndex = (index: number | null) => ({type: CURRENT_INDEX, index})
export const currentYear = (year: number | null) => ({type: CURRENT_YEAR, year})

interface ShowAction {
  type: typeof SHOW,
  image: string
}

interface IsShowAction {
  type: typeof IS_SHOW,
  click: boolean
}

interface CurrentIndexAction {
  type: typeof CURRENT_INDEX,
  index: number | null
}

interface CurrentYearAction {
  type: typeof CURRENT_YEAR,
  year: number | null
}

const initialState = {
  pickImage: '',
  appearImage: false,
  currentIndexSave: null,
  currentYearSave: null
}

type Action = ShowAction | IsShowAction | CurrentIndexAction | CurrentYearAction

const appearExpandPhoto = (state = initialState, action: Action) => {
  switch(action.type) {
    case SHOW:
      return { ...state, pickImage: action.image }
    case IS_SHOW: 
      return { ...state, appearImage: action.click }
    case CURRENT_INDEX:
      return { ...state, currentIndexSave: action.index}
    case CURRENT_YEAR:
      return { ...state, currentYearSave: action.year}
    default:
      return state
  }
}

export default appearExpandPhoto