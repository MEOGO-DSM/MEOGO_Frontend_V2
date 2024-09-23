// const ImageAdd = 'ImageAdd' as const
// const ImageRemove = 'ImageRemove' as const

// interface ImageAddAction {
//   type: typeof ImageAdd
//   payload: string
// }

// interface ImageRemoveAction {
//   type: typeof ImageRemove
//   payload: string
// }

// type ImageHandlerAction = ImageAddAction | ImageRemoveAction

// interface ImageState {
//   images: string[]; 
// }

// export const imageAdd = (image: string) => ({ 
//   type: ImageAdd,
//   payload: image,
// })

// export const imageRemove = (image: string) => ({
//   type: ImageRemove,
//   payload: image
// })


// const initialState: ImageState = {
//   images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0UHxmp4Ue0DrTVH5TcU3k2rRjhqHGE0x7suvwtyIzgVg4twSlV3Sr69qOadtPK5zdp4I&usqp=CAU"],
// };

// const imageAddRemove = (state = initialState, action: ImageHandlerAction) => {
//   switch (action.type) {
//     case ImageAdd:
//       if (state.images.length < 4 && !state.images.includes(action.payload)) {
//         return {
//           ...state,
//           images: [...state.images, action.payload],
//         };
//       }
//       return state
//     case ImageRemove:
//       return {
//         ...state,
//         images: state.images.filter(image => image !== action.payload),
//       };
//     default:
//       return state
//   }
// };

// export default imageAddRemove;

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