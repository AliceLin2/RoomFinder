import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Filter from "./Filter";
const style = {
  display: "inline-block",
  width: "200px",
  padding: "20px",
  margin: "0 10px 10px",
  color: "black",
  fontSize: "20px",
  boxSizing: "border-box"
};

function NewApartment({user, apartments, onChangeApartments, types}) {
  const defaultForm = {    
      location:"",
      rent:"",
      num_of_bedrooms:"",
      num_of_bathrooms:"",
      image_url:""
    }
  const [formData, setFormData]=useState(defaultForm)
  const [typeId, setTypeId]=useState(1) 
  const [errors, setErrors] = useState([])
  const history = useHistory();

  function handleAddApartment(newApartment) {
    onChangeApartments([...apartments, newApartment])
  }

  function handleChange(e){
      const key = e.target.name
      const value = (key === "location" || key === "image_url") ? e.target.value : parseInt(e.target.value)
      setFormData({
        ...formData,
        [key]:value,
        type_id:typeId
      })
  }

  function handleSubmit(e){
      e.preventDefault()
      fetch('/apartments',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      })
      .then(r=>{
        if(r.ok){
            r.json().then((a)=>handleAddApartment(a))
            history.push("/mylist");
        }else{r.json().then((e)=>setErrors(e.errors))}
      })
  }

  return (
    !user?<h1>Please log in to post your apartment!</h1>:
    <div >
      <h3>Share some apartment information</h3>
      <Filter onChangeId={setTypeId} types={types}/>
      <form className="NewItem" onSubmit={handleSubmit} style={style}>
        <label>location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange}/>
        <label>rent:</label>
        <input type="text" name="rent" value={formData.rent} onChange={handleChange}/>
        <label>number of bedrooms:</label>
        <input type="text" name="num_of_bedrooms" value={formData.num_of_bedrooms} onChange={handleChange}/>
        <label>number of bathrooms:</label>
        <textarea type="text" name="num_of_bathrooms" value={formData.num_of_bathrooms} onChange={handleChange}/>
        <label>image url:</label>
        <textarea type="text" name="image_url" value={formData.image_url} onChange={handleChange}/>
        <button type="submit">Save</button>
      </form>
      {errors.map((err) => (
              <p key={err}>{err}</p>
      ))}
    </div>
  );
}

export default NewApartment;