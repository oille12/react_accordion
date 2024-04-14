// 스타일 시트, 자바스크립트 데이터를 import
import './style.css';
// 이 파일 옆에 있는 dta파일을 data란 키워드로 사용
import data from './data';
import { useState } from 'react';

/*
    ./ : 지금 여기
    ../ : 한번 나가서
    / : 프로젝트 경로
    /src : src폴더로 들어가서

*/

export default function Accordion() {

    // 선택된 title의 번호를 저장할 state (UI와 연결할 변수)
    let [selected, setSelected] = useState(null);
    // 플래스 (false면 단일선택, true면 다중선택)
    let[enableMultiSelection, setEnableMultiSelction] = useState(false);
    let [selectedList, setSelectedList] = useState([]);

    function clickTitle(id){
        console.log(id);
        // 아이디를 selected에 넣는다. 한번 더 누르면 내용이 없어지게 한다.
        id != selected ? setSelected(id) : setSelected(null);
    }

    // 다중 선택일때는 선택된 애들을 '모두 보관' -> 배열 사용
    // console.log(enableMultiSelection);
    // console.log(selectedList.indexOf(selectedList));
    function multiSelectTitle(id) {
        // 배열의 값을 갱신하기 위해서는 ...으로 분해했다가 다시 []로 감싼다.
        // 객체의 값을 갱신하기 위해서는 ...으로 분해했다가 다시 {}로 감싼다.
        let copyList = [...selectedList]
        console.log(selectedList.indexOf(id))   // 다중선택배열에서 id값 검사 (배열에 없으면 -1)
        // indexof() : 만약 배열 안에 id를 찾을 수 없으면 -1, 찾으면 그 위치 반환

        let findIndexOfId = selectedList.indexOf(id); // id 이미 있으면 그 위치를 받음

        // jsx가 아닌 js문법이니까 if-else 가능
        if(findIndexOfId === -1) {
            copyList.push(id);  // 배열에 추가 push(값)
        } else {
            copyList.splice(findIndexOfId, 1);    // 배열에 제거 splice(인덱스, 몇개없앨건지)
        }

        setSelectedList(copyList);
        console.log(selectedList);
    }

    return(
        <div className='wrapper'>
            <button onClick={()=>{
                setEnableMultiSelction(!enableMultiSelection);
            }}>다중 선택 ON/OFF</button>
            <div className='accordion'>
                {data.map((element, idx)=>{
                    return (
                        <div className='item' key={idx}>
                            <div className='title' onClick={()=>{
                                enableMultiSelection === true ?  multiSelectTitle(element.id)
                                : clickTitle(element.id)
                                }}>
                                <h3>{element.title}</h3>
                                <span>🔍</span>
                            </div>
                            
                            {
                                enableMultiSelection === true ?
                                selectedList.indexOf(element.id) !== -1 && <div className='content'>{element.content}</div>
                                : selected === element.id && <div className="content">{element.content}</div>
                            }
                        </div>  
                    )
                })}
            </div>
        </div>
    )
}