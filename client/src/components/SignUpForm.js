import React, {useState} from "react"

function SignUpForm({onSignIn}){
    const defaultForm = {    
        username:"",
        password:"",
        password_confirmation:"",
        age:18,
        occupation:"",
        interest:""
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
        fetch('/signup',{
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
      <form className="SignUp" onSubmit={handleSubmit}>
        <br></br>
        <h3>Sign Up</h3>
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
        {errors.map(e=>console.log(e))}
      </form>
    );
}
export default SignUpForm