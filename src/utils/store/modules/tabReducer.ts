export const SELECT_TAB = 'SELECT_TAB';

export const selectTab = (index: number) => ({
  type: SELECT_TAB,
  payload: index,
});

interface SelectedTabAction {
  type: typeof SELECT_TAB
  payload: number
}

const initialState = {
  selectedTab: 0,
};

const tabReducer = (state = initialState, action: SelectedTabAction) => {
  switch (action.type) {
    case SELECT_TAB:
      return { ...state, selectedTab: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
