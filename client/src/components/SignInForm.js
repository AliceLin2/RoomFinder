import React, {useState} from "react"

function SignInForm({onSignIn}){
    const defaultForm = {    
        username:"",
        password:""
      }
    const [formData, setFormData]=useState(defaultForm)
    const [errors, setErrors] = useState([])
    
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
        fetch('/login',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({formData})
        })
        .then(r=>{
            if(r.ok)
                {r.json().then((user)=>onSignIn(user))}
            else
                {r.json().then((error)=>setErrors(error.errors))}
            })
    }
  
    return (
      <form className="Login" onSubmit={handleSubmit}>
        <h1>Roommate</h1>
        <h3>Log in to your account</h3>
        <label>
          username:
          <input type="text" name="username" value={formData.username} onChange={handleChange}/>
        </label>
        <label>
          password:
          <input type="text" name="password" value={formData.password} onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
        {errors.map(e=>console.log(e))}
      </form>
    );
}
export default SignInForm