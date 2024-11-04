import {color} from '../styles';

export interface SignupProps {
  control: any;
  errors: any;
  onSelectSchool?: any;
}

export interface SchoolListType {
  id: number;
  name: string;
  location: string;
}

export interface SvgPropsType {
  size?: number;
  color?: keyof typeof color | string;
  onPress?: () => void;
}

export interface ReviewFormData {
  request : {
    content: string,
    school_id: number,
    star: number,
    key_word: Array<string>
  },
  image: Array<string>
}

export interface SchoolReviewList {
  count: number,
  reviews: [
    {
      id: number,
      content: string,
      date: string,
      user_name: string,
      profile: string,
      star: number,
      image: Array<string>
    }
  ]
}

export interface SchoolReviewImage {
  year: number,
  image: string
}

export interface SchoolRankAndRating {
  star: number,
  tag1: {
    tag_name: string,
    percentage: number
  },
  tag2: {
    tag_name: string,
    percentage: number
  },
  tag3: {
    tag_name: string,
    percentage: number
  },
}

type CategoryType = "EDUCATION" | "ACTIVITY" | "FACILITY"

export interface Keyword {
  keyword: string,
  category: CategoryType
}