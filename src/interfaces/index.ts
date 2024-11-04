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