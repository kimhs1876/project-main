import React from 'react'

const App = () => {
  return (<>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/">Blog</Link>
    <Link to="/">About Me</Link>
  </nav>
  <h1>1번째 크기 헤드라인</h1>
  <h2>2번째 크기 헤드라인</h2>
  <h3>3번째 크기 헤드라인</h3>
  <h4>4번째 크기 헤드라인</h4>
  <h5>5번째 크기 헤드라인</h5>
  <p>문단은 p로 쓰세요. p는 아마도 Paragraph의 앞글자를 따온 것이겠죠?</p>
  <Link to="/">Go to google</Link>
  <hr/>
    <img src="/" width="500px">
  </>)
}

export default App