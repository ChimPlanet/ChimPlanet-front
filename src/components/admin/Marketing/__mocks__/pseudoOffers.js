import { Offer } from '@/service/offer';

const apiResponse = [
  {
    articleId: '10100289',
    writer: '우주이루다',
    boardTitle: '이세계 아이돌 홈페이지 만들어가실 인력을 모집하고 있습니다!',
    likeCount: 1,
    readCount: '310',
    regDate: '2023.03.03 12:44',
    thumbnailURL:
      'https://cafethumb.pstatic.net/MjAyMzAzMDNfMTE0/MDAxNjc3ODE0NTU2NDY0.pxN2tbcAFGht6LJPvbLmIgwF4bZwHv0XXr0ru6e0Dpog.qoUJDDewoR3NSps1IGDxtyr2vlXZEA4p7EFb7q2N7ZUg.PNG/제목_없음-3.png?type=f100_100',
    redirectURL: 'https://cafe.naver.com/steamindiegame10100289',
    isEnd: 'ING',
  },
  {
    articleId: '10092174',
    writer: '설가람',
    boardTitle:
      '이세돌 비주얼 노벨 RE:BIND(가제)에서 실력이 높은 일러스트레이터 분들을 모집합니다!!',
    likeCount: 2,
    readCount: '322',
    regDate: '2023.03.02 21:02',
    thumbnailURL:
      'https://cafethumb.pstatic.net/MjAyMzAzMDJfNTEg/MDAxNjc3NzU4NTM5MDc4.2sNtN66Oy-VBIFAjQGZl9WVQ0e5T7q5Xyl2yAal8L9cg.zKKPfM_dDnm3GXmM0VjJRipOlT9xkFNSUSPgiLFU2Sgg.JPEG/20230228＿180530.jpg?type=f100_100',
    redirectURL: 'https://cafe.naver.com/steamindiegame10092174',
    isEnd: 'ING',
  },
  {
    articleId: '10089814',
    writer: '우주이루다',
    boardTitle: '리듬게임을 같이 만들어갈 인원들을 모집하고 있습니다!',
    likeCount: 3,
    readCount: '70',
    regDate: '2023.03.02 17:49',
    thumbnailURL:
      'https://cafethumb.pstatic.net/MjAyMzAzMDJfMjUw/MDAxNjc3NzQ1ODkyMTU2.mCdtPCwN9vxw8syJhtsNx_V4NtWCM95NXu1rAF6I13sg.3oUNxwqdZqRWau_r9xStlsmgUL1Cm-8KwGgiXSUfOGYg.GIF/air.gif?type=f100_100',
    redirectURL: 'https://cafe.naver.com/steamindiegame10089814',
    isEnd: 'ING',
  },
  {
    articleId: '10089070',
    writer: '야하로옹',
    boardTitle: '하꼬 웹소설 작가 써주실 자비로운 팀을 구합니다!',
    likeCount: 4,
    readCount: '146',
    regDate: '2023.03.02 16:36',
    thumbnailURL:
      'https://cafethumb.pstatic.net/MjAyMzAzMDJfMTUx/MDAxNjc3NzQxNDY2Mzg2.uFp--j8p5mqsRXa6eVnj82ER7rcUpaINfX4QIPamm-sg.62wsPnq591aJj4NjIYVNKl4Oxln_Nqmv5Zl8oBegjQAg.JPEG/KakaoTalk_20230302_160237697.jpg?type=f100_100',
    redirectURL: 'https://cafe.naver.com/steamindiegame10089070',
    isEnd: 'ING',
  },
  {
    articleId: '10080214',
    writer: '캐럿쥬스',
    boardTitle: '(급구!!) 정말정말정말 간단한거 만들어주실 맵제작자 구합니다',
    likeCount: 9,
    readCount: '123',
    regDate: '2023.03.02 01:04',
    thumbnailURL: '',
    redirectURL: 'https://cafe.naver.com/steamindiegame10080214',
    isEnd: 'ING',
  },
  {
    articleId: '10076730',
    writer: 'Moris',
    boardTitle: '[고멤 공식] 포토샵 인력 구합니다.[마감]',
    likeCount: 10,
    readCount: '293',
    regDate: '2023.03.01 22:45',
    thumbnailURL:
      'https://cafethumb.pstatic.net/MjAyMzAzMDFfMTE3/MDAxNjc3Njc4MTQ0MTY3.X6BrCjGwoH32Q_oaXWqqQZuBHQRPUv8rRl9S6n7e_kIg.ymvYk3z1E3PvJlHZWEqryMFC2KCp4J4x1oIB6Q-ucbIg.JPEG/texaco.jpg?type=f100_100',
    redirectURL: 'https://cafe.naver.com/steamindiegame10076730',
    isEnd: 'END',
  },
  {
    articleId: '10073639',
    writer: '브라질리언 우왁싱',
    boardTitle: '연공전 2D게임 오브젝트(사물)디자이너 구합니다!!!!',
    likeCount: 11,
    readCount: '146',
    regDate: '2023.03.01 19:49',
    thumbnailURL:
      'https://cafethumb.pstatic.net/MjAyMzAzMDFfMjU2/MDAxNjc3NjY3MjM4Njk1.aphlCUpJpbhqB_g3QVw3hSz2b6aiprXuNKHTWkhToVUg.SR5A1vTPgSbzKkhx_jGfIPZMAe1Ijlzc56STMTghgZAg.PNG/Inside_C.png?type=f100_100',
    redirectURL: 'https://cafe.naver.com/steamindiegame10073639',
    isEnd: 'ING',
  },
  {
    articleId: '10072844',
    writer: '박캉수',
    boardTitle: '[재재재업]월간왁두에서 미래의 만화가님을 모십니다',
    likeCount: 12,
    readCount: '283',
    regDate: '2023.03.01 19:25',
    thumbnailURL:
      'https://cafethumb.pstatic.net/MjAyMzAyMjRfODQg/MDAxNjc3MjQ1OTM2MDkz.e3FkGjgjgMuyzvviIQXV9rxvYAB2a1SjWdIGC-pQH_wg.aeSSw2zOnQxaHV994q5faSRtMeJy4j3uwi5DJIhMa3kg.JPEG/78f0e082f663e342.jpg?type=f100_100',
    redirectURL: 'https://cafe.naver.com/steamindiegame10072844',
    isEnd: 'ING',
  },
];

export default apiResponse.map(Offer);