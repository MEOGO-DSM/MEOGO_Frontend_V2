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
export const currentIndex = (index: number, yearIndex: number) => ({
  type: CURRENT_INDEX,
  index,
  yearIndex
});

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
  yearIndex: number;
}

const initialState = {
  currentShowImageIndex: 0,
  isAppearImage: false,
  photo: [] as Array<{ year: number, image: string[] }>,
  currentShowImage: '',
  currentYearIndex: 0,
};

type Action = CurrentShowAction | IsShowAction | ImageAction | NextImageAction | PrevImageAction | CurrentIndexAction;

const appearImage = (state = initialState, action: Action) => {
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
      const { currentYearIndex, currentShowImageIndex } = state;
      const currentYear = state.photo[currentYearIndex];
      const nextIndex = currentShowImageIndex + 1;
      
      if (nextIndex < currentYear.image.length) {
        return { 
          ...state, 
          currentShowImageIndex: nextIndex, 
          currentShowImage: currentYear.image[nextIndex] 
        };
      } else if (currentYearIndex < state.photo.length - 1) {
        const nextYearIndex = currentYearIndex + 1;
        return { 
          ...state, 
          currentShowImageIndex: 0,
          currentShowImage: state.photo[nextYearIndex].image[0],
          currentYearIndex: nextYearIndex
        };
      }
      return state;
    }
    case PREV_IMAGE: {
      const { currentYearIndex, currentShowImageIndex } = state;
      const currentYear = state.photo[currentYearIndex];
      const prevIndex = currentShowImageIndex - 1;
      
      if (prevIndex >= 0) {
        return { 
          ...state, 
          currentShowImageIndex: prevIndex, 
          currentShowImage: currentYear.image[prevIndex] 
        };
      } else if (currentYearIndex > 0) {
        const prevYearIndex = currentYearIndex - 1;
        const lastYear = state.photo[prevYearIndex];
        return { 
          ...state, 
          currentShowImageIndex: lastYear.image.length - 1,
          currentShowImage: lastYear.image[lastYear.image.length - 1],
          currentYearIndex: prevYearIndex
        };
      }
      return state;
    }
    case CURRENT_INDEX: {
      const selectedImage = state.photo[action.yearIndex].image[action.index];
      return { 
        ...state, 
        currentShowImageIndex: action.index, 
        currentShowImage: selectedImage,
        currentYearIndex: action.yearIndex
      };
    }
    default:
      return state;
  }
};

export default appearImage;
