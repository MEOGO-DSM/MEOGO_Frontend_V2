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
  reviews: ReviewType[]
}

export interface ReviewType {
  id: number,
  content: string,
  date: string,
  user_name: string,
  profile: string,
  star: number,
  image: Array<string>
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

export type CategoryType = "EDUCATION" | "ACTIVITY" | "FACILITY"

export type QuestionType = "LIFE" | "ENTRANCE" | "FACILITIES" | "ETC"

export interface KeywordType {
  keyword: string,
  category: CategoryType
}

export interface Question {
  school_id: number,
  content: string,
  question_type: QuestionType
}

export interface ModifyQuestion {
  content: string,
  question_type: QuestionType
}

export interface QuestionList {
  id: number,
  content: string,
  date: string,
  question_type: QuestionType,
  account_id: string
}

export interface QuestionDetail {
  id: number,
  account_id: string,
  date: string,
  content: string,
  tag: QuestionType,
  comments: {
    count: number,
    comment_list: Comment
  }
}

export interface Comment {
  id: number,
  account_id: string,
  date: string,
  content: string,
  replies: Array<{} | null>
}

export interface KeywordItem {
  keyword: string;
  category: CategoryType
}

export interface CategorizedKeywords {
  EDUCATION: string[];
  ACTIVITY: string[];
  FACILITY: string[];
}