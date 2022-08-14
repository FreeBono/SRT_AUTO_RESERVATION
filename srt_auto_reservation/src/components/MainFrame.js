import styled from "styled-components"
import { useState } from "react"
import axios from 'axios'


const Wrapper = styled.div`
  width : 1024px;
  margin : 0 auto;
  background-color: #282c34;
  height : 100vh;
  color : white;
  font-family:'코트라호페', 'KOTRAHOPE', KOTRAHOPE;

  .topic {
    font-size : 48px;
    text-align: center;
    padding-top : 100px;
  }

  .inputBox {
    font-size : 24px;
    margin : 40px;
  }

  @font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
`

const Button = styled.span`
  background-color: green;
`

const MainFrame = () => {

  const [reservationInfo,setReservationInfo] = useState({
    id : '',
    password : '',
    dptArea : '',
    ArrArea : '',
    time : '',

  })

  const onIdChange = (e) => {
    setReservationInfo({...reservationInfo,id:e.target.value})
  }
  const onPwChange = (e) => {
    setReservationInfo({...reservationInfo,password:e.target.value})
  }
  const onDptChange = (e) => {
    setReservationInfo({...reservationInfo,dptArea:e.target.value})
  }
  const onArrChange = (e) => {
    setReservationInfo({...reservationInfo,ArrArea:e.target.value})
  }
  const onTimeChange = (e) => {
    setReservationInfo({...reservationInfo,time:e.target.value})
 
  }

  const submit = async() => {
    console.log(reservationInfo)
   
    const response = await axios.post('http://localhost:8000/',reservationInfo)
    console.log(response)
   
  }

  return (
    <Wrapper>
      <div className="topic">SRT 자동 예약 서비스</div> 
      <div className='inputBox'>
        <div>
          <span>회원번호</span>
          <input onChange={onIdChange}/>
        </div>
        <div>
          <span>비밀번호</span>
          <input onChange={onPwChange}/>
        </div>
        <div>
          <span>출발지</span>
          <input onChange={onDptChange}/>
        </div>
        <div>
          <span>도착지</span>
          <input onChange={onArrChange}/>
        </div>
        <div>
          <span>시간</span>
          <input onChange={onTimeChange}/>
        </div>
      </div>

      <Button onClick={submit}>efef</Button>
    </Wrapper>
  )
}

export default MainFrame