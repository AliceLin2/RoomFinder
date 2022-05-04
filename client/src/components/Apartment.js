import React, {useState} from "react";

const style = {
    display: "inline-block",
    width: "500px",
    padding: "20px",
    margin: "0 10px 10px",
    color: "black",
    fontSize: "20px",
    boxSizing: "border-box"
};

function Apartment({apartment, onDeleteApartment, onUpdateApartment, edit}) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [detail, setDetail] = useState(false);
    const [error, setError] = useState([])
    const defaultForm = {    
        location:apartment.location,
        rent:apartment.rent,
        num_of_bedrooms:apartment.num_of_bedrooms,
        num_of_bathrooms:apartment.num_of_bathrooms,
        image_url:apartment.image_url
      }
    const [formData, setFormData]=useState(defaultForm)

    function handleChange(e){
        const key = e.target.name
        const value = (key === "location" || key === "image_url") ? e.target.value : parseInt(e.target.value)
        setFormData({
          ...formData,
          [key]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/apartments/${apartment.id}`,{
          method:"PATCH",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(formData)
        })
        .then(r=>{
          if(r.ok){
              r.json().then((a)=>{
                  onUpdateApartment(a)
                  setIsUpdating(false)
                })
          }else{r.json().then((error)=>console.log(error))}
        })
    }

    function handleDelete(id){
      fetch(`/apartments/${id}`,{
          method:"DELETE"
      })
      .then(()=>onDeleteApartment(id))
    }

    function handleClick(id){
        fetch(`/apartments/${id}`)
          .then(r=>{
            if(r.ok){
                r.json().then((a)=>{
                    setDetail(!detail)
                  })
            }else{r.json().then((e)=>setError(e.error))}
          })
    }
    
    return (
        <div style={style}>
            {isUpdating?
                (<form className="UpdateItem" onSubmit={handleSubmit} >
                    <label>location:</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange}/>
                    <label>rent:</label>
                    <input type="text" name="rent" value={formData.rent} onChange={handleChange}/>
                    <label>number of bedrooms:</label>
                    <input type="text" name="num_of_bedrooms" value={formData.num_of_bedrooms} onChange={handleChange}/>
                    <label>number of bathrooms:</label>
                    <input type="text" name="num_of_bathrooms" value={formData.num_of_bathrooms} onChange={handleChange}/>
                    <label>image url:</label>
                    <input type="text" name="image_url" value={formData.image_url} onChange={handleChange}/>
                    <button type="submit">Save</button>
                </form>
              ):(
                <div>
                    <h2>{apartment.location}</h2>
                    {edit?<p>rent per month: $ {apartment.rent}</p>:null}
                    {edit?<p>number of bedrooms: {apartment.num_of_bedrooms}</p>:null}
                    {edit?<p>number of bathrooms: {apartment.num_of_bathrooms}</p>:null}
                    <img src={apartment.image_url} alt="apartment" style={style}/>
                </div>)}
            {edit?<button id='update' onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>update</button>:null}
            {edit?<button id='delete' onClick={e=>handleDelete(apartment.id)}>delete</button>:null}
            {edit?null:<button id='detail' onClick={e=>handleClick(apartment.id)}>See detail</button>}
            {detail?<div>
                        <p>rent per month: $ {apartment.rent}</p>
                        <p>number of bedrooms: {apartment.num_of_bedrooms}</p>
                        <p>number of bathrooms: {apartment.num_of_bathrooms}</p>
                        <p>roommate age: {apartment.user.age}</p>
                        <p>roommate occupation: {apartment.user.occupation}</p>
                        <p>roommate interest: {apartment.user.interest}</p>
                    </div>:(<p>{error}</p>)
            }        
        </div>
    );
}

export default Apartment;