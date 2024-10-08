const CURRENT_SHOW = 'CURRENT_SHOW' as const;
const IS_SHOW = 'IS_SHOW' as const;
const IMAGE_ARRAY = 'IMAGE_ARRAY' as const;
const NEXT_IMAGE = 'NEXT_IMAGE' as const;
const PREV_IMAGE = 'PREV_IMAGE' as const;
const CURRENT_INDEX = 'CURRENT_INDEX' as const;

export const show = (image: string) => ({ type: CURRENT_SHOW, image });
export const isShow = (click: boolean) => ({ type: IS_SHOW, click });
export const imageArray = (image: Array<{ year: number, image: string[] }>) => ({
  type: IMAGE_ARRAY,
  image
});
export const nextImage = () => ({ type: NEXT_IMAGE });
export const prevImage = () => ({ type: PREV_IMAGE });
export const currentIndex = (index: number) => ({ type: CURRENT_INDEX, index });

interface CurrentShowAction {
  type: typeof CURRENT_SHOW;
  image: string;
}

interface IsShowAction {
  type: typeof IS_SHOW;
  click: boolean;
}

interface ImageAction {
  type: typeof IMAGE_ARRAY;
  image: Array<{ year: number, image: string[] }>;
}

interface NextImageAction {
  type: typeof NEXT_IMAGE;
}

interface PrevImageAction {
  type: typeof PREV_IMAGE;
}

interface CurrentIndexAction {
  type: typeof CURRENT_INDEX;
  index: number;
}

const initialState = {
  currentShowImageIndex: 0,
  isAppearImage: false,
  photo: [] as Array<string>,
  currentShowImage: '',
  currentYearIndex: 0,
};

type Action = CurrentShowAction | IsShowAction | ImageAction | NextImageAction | PrevImageAction | CurrentIndexAction;

const appearPhoto = (state = initialState, action: Action) => {
  switch (action.type) {
    case CURRENT_SHOW:
      return { ...state, currentShowImage: action.image };
    case IS_SHOW:
      return { ...state, isAppearImage: action.click };
    case IMAGE_ARRAY: {
      return {
        ...state,
        photo: action.image,
        currentShowImage: action.image[0].image[0],
        currentShowImageIndex: 0
      };
    }
    case NEXT_IMAGE: {
      const { currentShowImageIndex, photo } = state;
      const nextIndex = (currentShowImageIndex + 1) % photo.length;
      return {
        ...state,
        currentShowImageIndex: nextIndex,
        currentShowImage: photo[nextIndex]
      };
    }
    case PREV_IMAGE: {
      const { currentShowImageIndex, photo } = state;
      const prevIndex = (currentShowImageIndex - 1 + photo.length) % photo.length;
      return {
        ...state,
        currentShowImageIndex: prevIndex,
        currentShowImage: photo[prevIndex]
      };
    }
    case CURRENT_INDEX: {
      if (action.index >= 0 && action.index < state.photo.length) {
        return {
          ...state,
          currentShowImageIndex: action.index,
          currentShowImage: state.photo[action.index]
        };
      }
      return state; 
    }
    default:
      return state;
  }
};

export default appearPhoto;
