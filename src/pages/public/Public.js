import {Route,Routes} from "react-router-dom"
import { SignIn } from "./SignIn/SignIn"
import { SignUp } from "./SignUp/SignUp"

export const Public=()=>{
  return(
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
    </Routes>
  )
}