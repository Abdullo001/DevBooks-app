import { useAuth } from "./Hooks/useAuth";
import { Private } from "./pages/private/Private";
import { Public } from "./pages/public/Public";

function App() {
  const { token } = useAuth();

  if(token){
    return(
      <Private/>
    )
  }else{
    return(
      <Public/>
    )
  }
}

export default App;
