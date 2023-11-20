import { useState } from 'react';
import styled from 'styled-components';
const App = () => {
    const men = [
        { name: '준호', team: 'sales' },
        { name: '재영', team: 'sales' },
        { name: '건희', team: 'sales' },
        { name: '우주', team: 'design' },
        { name: '서현', team: 'design' },
        { name: '은지', team: 'design' },
        { name: '일교', team: 'dev' },
        { name: '가온', team: 'dev' },
        { name: '지흠', team: 'dev' },
        { name: '태화', team: 'dev' },
        { name: '승렬', team: 'dev' },
        { name: '길학', team: 'dev' },
        { name: '유동', team: 'dev' },
        { name: '윤호', team: 'dev' },
    ];
    const [personWork, setPersonWork] = useState([]);
    console.log(personWork);
    const [realMen, setRealMen] = useState([]);

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    const dayOfWeek = daysOfWeek[dayIndex];

    return (
        <Container>
            <AllCheck>
                <input
                    type="checkbox"
                    checked={personWork.length === men.length}
                    onChange={(e) => {
                        if (e.currentTarget.checked) {
                            setPersonWork(men.map((item) => item.name));
                        } else {
                            setPersonWork([]);
                        }
                    }}
                />
                <ListItem>전체 선택</ListItem>
            </AllCheck>

            <div style={{ display: 'flex', gap: '10px' }}></div>
            <PersonWorkList>
                {men.map((i, index) => {
                    return (
                        <Item key={index}>
                            <input
                                checked={personWork.includes(i.name)}
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.currentTarget.checked) {
                                        setPersonWork((personWork) => [...personWork, i.name]);
                                    }
                                    if (e.currentTarget.checked === false) {
                                        setPersonWork(personWork.filter((v) => v !== i.name));
                                    }
                                }}
                            />
                            <ListItem>{i.name}님</ListItem>
                        </Item>
                    );
                })}
            </PersonWorkList>
            <PersonWorkListItem>
                {personWork.map((i, index) => {
                    return <PersonWorkItem key={index}>{i}님</PersonWorkItem>;
                })}
            </PersonWorkListItem>
            <Btn
                onClick={() => {
                    const one = Math.floor(Math.random() * personWork.length);
                    const two = Math.floor(Math.random() * personWork.length);
                    if (dayOfWeek === '월') {
                        if (one !== two) setRealMen([personWork[one], personWork[two]]);
                    } else {
                        if (one !== two) setRealMen([personWork[one]]);
                    }
                }}
            >
                주번 고르기!~
            </Btn>
            <div>
                {dayOfWeek === '월' && <CleanDayText>오늘은 제빙기 청소하는 날입니다.</CleanDayText>}
                {realMen.map((i, index) => (
                    <Result key={index}>{i}님</Result>
                ))}
            </div>
        </Container>
    );
};

const CleanDayText = styled.div`
    display: flex;
    justify-content: center;
    color: blue;
    font-size: 50px;
`;
const AllCheck = styled.label`
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
    box-sizing: border-box;
    padding: 15px;
    background-color: pink;
    border-radius: 15px;
`;
const Result = styled.div`
    font-size: 100px;
    display: flex;
    justify-content: center;
`;
const PersonWorkListItem = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 14px;
`;
const PersonWorkItem = styled.div`
    color: green;
    font-size: large;
`;
const Item = styled.label`
    display: flex;
    gap: 5px;
`;
const PersonWorkList = styled.div`
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    flex-direction: column;

    gap: 15px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(99, 99, 99, 0.25);
    border-radius: 10px;
    margin-bottom: 15px;
`;
const Btn = styled.button`
    width: 100px;
    color: blue;
    margin-bottom: 14px;
    background: #ffffff;
    border: 1px solid #4176ff;
    border-radius: 70px;
    :hover {
        cursor: pointer;
    }
`;
const ListItem = styled.div`
    font-family: ‘Pretendard Variable’;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 15px;
    color: #222222;
    white-space: nowrap;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    background-color: #f2f2f2;
`;
export default App;
