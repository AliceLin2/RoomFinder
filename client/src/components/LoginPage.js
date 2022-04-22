import {useState} from "react"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"

function LoginPage({onSignIn}){
    const [hasAccount, setHasAccount] = useState(true)

    return (
        hasAccount ? (
            <div>
                <SignInForm onSignIn={onSignIn}/>
                <h4>New to Roommate?</h4>
                <button onclick={()=>setHasAccount(false)}>Join now!</button>
            </div>
            ): (
            <div>
                <SignUpForm onSignIn={onSignIn}/>
                <h4>Already have an account?</h4>
                <button onclick={()=>setHasAccount(true)}>Log in</button>
            </div>  
            )
    )
}
export default LoginPage