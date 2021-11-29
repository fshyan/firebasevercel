import {useAuth} from 'libs/hooks/useAuth'
import { AppBar } from "components/appbar";
import {Title} from "ui/title";


function ToDoPage(props) {
  const user = useAuth()
  if(!user){
    return(
      <>
        <AppBar/>
        <Title>YOU ARE NOT WELCOME GO AWAY</Title>
      </>
    )
  }

  return(
    <>
      <AppBar/>
      <Title>Render the users to List</Title>
    </>
  )

}

export default ToDoPage;
