// const : 한번 정하면 바꿀수 없는 변수
const data = [
    {
        id: '1',
        title: '리액트란 무엇인가?',
        content: '리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.'
    },
    {
        id: '2',
        title: 'jsx란 무엇인가?',
        content: 'JSX(JavaScript XML)는 자바스크립트의 확장 문법으로, React에서 UI를 표현하기 위해 사용된다.'
    },
    {
        id: '3',
        title: '리액트는 왜 사용하는가?',
        content: '뛰어난 컴포넌트 재사용성과 빠른 렌더링 속도'
    },
    {
        id: '4',
        title: '아코디언 컴포넌트란?',
        content: '제목을 클릭하면 내용을 확인할 수 있는 구조'
    }
];


export default data;    
//data라는 변수를 이 파일의 기본 내보내기로 설정
// default는 한 파일에 하나만 가능

// js5
// 예전 자바스크립트는 <script src="자바스크립트 파일명"></script>
//  해당 스크립트 파일 모두 복붙

// js6
// -> export / import
//  꼭 필요한 것만 복붙해가게 (웹 성능을 위해서)