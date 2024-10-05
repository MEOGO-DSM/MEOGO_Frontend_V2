interface StarAndRankingType {
  star: number;
  tag1: { tag_name: string; percentage: number; };
  tag2: { tag_name: string; percentage: number; };
  tag3: { tag_name: string; percentage: number; };
}

export const starAndRanking: StarAndRankingType = {
  "star": 3.7,
  "tag1": {
      "tag_name": "전체 만족",
      "percentage": 28
  },
  "tag2": {
      "tag_name": "학교 행사",
      "percentage": 71
  },
  "tag3": {
      "tag_name": "교내 활동",
      "percentage": 0
  }
}