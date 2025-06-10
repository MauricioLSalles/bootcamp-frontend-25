import Cinema from './Cinema'
import Cinema2 from './Cinema2'

function App() {
  

  return (
    <>
    <h2>one state on father</h2>
    <Cinema/>
    <div style={{borderTop:"1px solid black", margin:"50px 0"}}></div>
    <h2>one state on children</h2>
    <Cinema2/>
    </>
  )
}

export default App
