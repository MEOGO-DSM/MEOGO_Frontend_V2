import React, { useMemo, useState } from 'react';
import { Star } from '../../assets'

interface Props {
  index: number; 
  rating: number;
  hoverRating: number; 
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onSaveRating: (index: number) => void;
}

const Stars = (props: Props) => {
  const {
    index, 
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const [isFull, setIsFull] = useState<boolean>(false)

  const fillColor = useMemo(() => {
    if (hoverRating >= index) { 
      return setIsFull(true)
    } else if (!hoverRating && rating >= index) {
      return setIsFull(true)
    }
    return setIsFull(false);
  }, [rating, hoverRating, index]); 

  return (
    <div 
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}>
      <Star full={true} />
    </div>
  )
};

export default Stars;