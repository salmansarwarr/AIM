import { useState } from 'react'
import SideNavbar from './Components/SideNavbar'
import ConnectProfile from './Pages/ConnectProfile'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import GenerateContent from './Pages/GenerateContent'
import PostPerformance from './Pages/PostPerformance'

function App() {
  const [check, setCheck] = useState(true)

  let [navbarNum,setNavbarNum]=useState("1")
  let [navbarTitle,setNavbarTitle]=useState("Connect Profiles")

  return (
    <>
    <BrowserRouter>
     <SideNavbar setCheck={setCheck} NavNumber={navbarNum}  NavTitle={navbarTitle}/>
     <div class={`p-1 my-container my-5 ${(check)?"active-cont":""} container`}>
<Routes>
  <Route exact path='/' element={ <ConnectProfile setNavbarNum={setNavbarNum}  setNavbarTitle={setNavbarTitle}/>}/>
  <Route exact path='/content' element={ <GenerateContent setNavbarNum={setNavbarNum}  setNavbarTitle={setNavbarTitle}/>}/>
  <Route exact path='/performance' element={ <PostPerformance setNavbarNum={setNavbarNum}  setNavbarTitle={setNavbarTitle}/>}/>

   
    </Routes>
  </div>
  </BrowserRouter>
    </>
  )
}

export default App
