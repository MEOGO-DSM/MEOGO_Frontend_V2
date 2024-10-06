import { useMemo } from 'react';

const TAGS = {
  LIFE: '학교생활질문',
  ENTRANCE: '입학관련질문',
  FACILITIES: '시설관련질문',
  DEFAULT: '그외',
};

export const useQuestionTagName = (questionType?: string) => {
  return useMemo(() => {
    return TAGS[questionType as keyof typeof TAGS] || TAGS.DEFAULT;
  }, [questionType]);
};
