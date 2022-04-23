import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function NewApartment() {
  const defaultForm = {    
      location:"",
      rent:"",
      num_of_bedrooms:"",
      num_of_bathrooms:""
    }
  const [formData, setFormData]=useState(defaultForm)
  const [errors, setErrors] = useState([])
  const history = useHistory();

  function handleChange(e){
      const key = e.target.name
      const value = key === "location" ? e.target.value : parseInt(e.target.value)
      setFormData({
        ...formData,
        [key]:value
      })
  }

  function handleSubmit(e){
      e.preventDefault()
      fetch('/apartments',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({formData})
      })
      .then(r=>{
        if(r.ok)
            /*history.push("/");*/
            console.log(r)
        else
            {r.json().then((error)=>setErrors(error.errors))}
        })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <br></br>
      <h3>Add New Fruit To The Shop</h3>
      <label>
       location:
        <input type="text" name="location" value={formData.location} onChange={handleChange}/>
      </label>
      <label>
       rent:
        <input type="text" name="rent" value={formData.rent} onChange={handleChange}/>
      </label>
      <label>
       number of bedrooms:
        <input type="text" name="num_of_bedrooms" value={formData.num_of_bedrooms} onChange={handleChange}/>
      </label>
      <label>
       number of bathrooms:
        <textarea type="text" name="num_of_bathrooms" value={formData.num_of_bathrooms} onChange={handleChange}/>
      </label>
      <button type="submit">Save</button>

    </form>
  );
}

export default NewApartment;