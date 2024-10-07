const CURRENT_SHOW = 'CURRENT_SHOW' as const;
const IS_SHOW = 'IS_SHOW' as const;
const IMAGE_ARRAY = 'IMAGE_ARRAY' as const;
const NEXT_IMAGE = 'NEXT_IMAGE' as const;
const PREV_IMAGE = 'PREV_IMAGE' as const;

export const show = (image: string) => ({ type: CURRENT_SHOW, image });
export const isShow = (click: boolean) => ({ type: IS_SHOW, click });
export const imageArray = (image: Array<string>) => ({ type: IMAGE_ARRAY, image });
export const nextImage = () => ({ type: NEXT_IMAGE });
export const prevImage = () => ({ type: PREV_IMAGE });

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
  image: Array<string>;
}

interface NextImageAction {
  type: typeof NEXT_IMAGE;
}

interface PrevImageAction {
  type: typeof PREV_IMAGE;
}

const initialState = {
  currentShowImageIndex: 0,
  isAppearImage: false,
  photo: [],
  currentShowImage: '',
};

type Action = CurrentShowAction | IsShowAction | ImageAction | NextImageAction | PrevImageAction;

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
        currentShowImage: action.image[0],
        currentShowImageIndex: 0
      };
    }
    case NEXT_IMAGE: {
      const nextIndex = (state.currentShowImageIndex + 1) % state.photo.length;
      return { ...state, currentShowImageIndex: nextIndex, currentShowImage: state.photo[nextIndex] };
    }
    case PREV_IMAGE: {
      const prevIndex = (state.currentShowImageIndex - 1 + state.photo.length) % state.photo.length;
      return { ...state, currentShowImageIndex: prevIndex, currentShowImage: state.photo[prevIndex] };
    }
    default:
      return state;
  }
};

export default appearImage;
