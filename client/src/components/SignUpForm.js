import React, {useState} from "react"
import { useHistory } from "react-router-dom";

function SignUpForm({onSignIn}){
    const defaultForm = {    
        username:"",
        password:"",
        password_confirmation:"",
        age:"",
        occupation:"",
        interest:""
      }
    const [formData, setFormData]=useState(defaultForm)
    const [errors, setErrors] = useState([])
    const history = useHistory();

    function handleChange(e){
        const key = e.target.name
        const value = key === "age" ? parseInt(e.target.value): e.target.value
        setFormData({
          ...formData,
          [key]:value
        })
    }
  
    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })
        .then(r=>{
            if(r.ok)
                {r.json().then((user)=>{onSignIn(user)
                  history.push("/mylist");
                  setFormData(defaultForm)
                })}
            else
                {r.json().then((error)=>{setErrors(error.errors)
                console.log(formData)})}
            })
    }
  
    return (
      <form className="Login" onSubmit={handleSubmit}>
        <h1>Roommate</h1>
        <h3>Create your Roommate account</h3>
        <label>
          username:
          <input type="text" name="username" value={formData.username} onChange={handleChange}/>
        </label>
        <label>
          password:
          <input type="text" name="password" value={formData.password} onChange={handleChange}/>
        </label>
        <label>
          password confirmation:
          <input type="text" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange}/>
        </label>
        <label>
          age:
          <textarea type="text" name="age" value={formData.age} onChange={handleChange}/>
        </label>
        <label>
          occupation:
          <textarea type="text" name="occupation" value={formData.occupation} onChange={handleChange}/>
        </label>
        <label>
          interest:
          <textarea type="text" name="interest" value={formData.interest} onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
}
export default SignUpForm