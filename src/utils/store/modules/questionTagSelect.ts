export const SELECT_TAG = 'SELECT_TAG' as const

export const selectTag = (tagName: string | null) => ({
  type: SELECT_TAG,
  tagName
})

interface SelectTagAction {
  type: typeof SELECT_TAG,
  tagName: string | null
}

const initialState = {
  selectTag: null
}

const questionTagSelect = (state = initialState, action: SelectTagAction) => {
  switch(action.type) {
    case SELECT_TAG: 
      return { ...state, selectTag: action.tagName}
    default: 
      return state
  }
}

export default questionTagSelect