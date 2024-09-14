import axios from 'axios';

export const fetchSchoolList = async (
  schoolType: string,
  searchTerm: string,
  setLoading: (arg0: boolean) => void,
  setFilteredSchoolList: (arg0: never[]) => void,
) => {
  setLoading(true);
  try {
    const gubunMap: {[key: string]: string} = {
      초등학교: 'elem_list',
      중학교: 'midd_list',
      고등학교: 'high_list',
      대학교: 'univ_list',
    };

    const response = await axios.get(
      `https://www.career.go.kr/cnet/openapi/getOpenApi.json`,
      {
        params: {
          apiKey: '963235c8e241a84fea61f23ab039ff42',
          svcType: 'api',
          svcCode: 'SCHOOL',
          contentType: 'json',
          gubun: gubunMap[schoolType],
          searchSchulNm: searchTerm,
        },
      },
    );

    if (response.data && response.data.dataSearch) {
      setFilteredSchoolList(response.data.dataSearch.content || []);
    } else {
      setFilteredSchoolList([]);
    }
  } catch (error) {
    console.error('에러:', error);
    setFilteredSchoolList([]);
  } finally {
    setLoading(false);
  }
};
