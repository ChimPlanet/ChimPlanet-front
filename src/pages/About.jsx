import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <Outlet/>
      <Link
      to={`/about/${1}`} 
      state={{
        id:1,
        originalURL:'https://cafe.naver.com/steamindiegame/9857025',
        title:'[팀 창설][침플래닛] 인력사무소 모아보기 사이트 개발 인력 모집합니다',
        status:'마감',
        date:'2023.02.16',
        time:'17:01',
        views:'433',
        imgLink:'https://cafeptthumb-phinf.pstatic.net/MjAyMzAyMjdf…g.PNG/%EC%8B%A0%EC%B2%AD%EC%84%9C2.png?type=w1600',
        text:'여기에 게시글 내용이 들어갈 예정',
        tags:['#백엔드', '#프론트', '#UI/UX', '#개발자'],
      }}>1번 모달 </Link>
      <Link
      to={`/about/${2}`} 
      state={{
        id:2,
        originalURL:'https://cafe.naver.com/steamindiegame/9857025',
        title:'[팀 창설][침플래닛] 인력사무소 모아보기 사이트 개발 인력 모집합니다',
        status:'구인 중',
        date:'9999.99.99',
        time:'17:01',
        views:'433',
        imgLink:'https://cafeptthumb-phinf.pstatic.net/MjAyMzAyMjdf…g.PNG/%EC%8B%A0%EC%B2%AD%EC%84%9C2.png?type=w1600',
        text:'여기에 게시글 내용이 들어갈 예정',
        tags:['#백엔드', '#프론트', '#UI/UX', '#개발자'],
      }}>2번 모달  </Link>
      About
      <Link to="/">go home</Link>
    </>
  );
}
