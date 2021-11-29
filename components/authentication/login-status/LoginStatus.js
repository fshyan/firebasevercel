import { useRouter } from "next/router";
import { useAuth } from "libs/hooks/useAuth";
import {auth} from 'libs/firebase'
import { IoPersonCircleSharp } from "react-icons/io5";
import {LoginStatus} from './styles'
import { signOut } from "@firebase/auth";



function UserLoginStatus({ size, color, status, ...props }) {
  const user = useAuth()
  const router = useRouter()

  function handleClick(){
    signOut(auth)
    .then(()=>{
      //sign out clean up logic
      router.push('/')
    })
  }

  if(user){
    return(
      <LoginStatus {...props} onClick={handleClick} bgcolor="#d6fecd">
        <IoPersonCircleSharp size={size || "1.75rem"} />
        <figcaption>
          <p>display name</p>
          <p>logout</p>
        </figcaption>
      </LoginStatus>
    )
  }
  return (
    <LoginStatus>
      <IoPersonCircleSharp size={size || "1.75rem"} color="red" />
      <figcaption>
        <p>Status</p>
        <p>please login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;