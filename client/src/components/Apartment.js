import React, {useState} from "react";

const style = {
    display: "inline-block",
    width: "500px",
    padding: "20px",
    margin: "0 10px 10px",
    color: "black",
    fontSize: "20px",
};

function Apartment({apartment, onDeleteApartment, onUpdateApartment, edit}) {
    const [isUpdating, setIsUpdating] = useState(false);
    const defaultForm = {    
        location:apartment.location,
        rent:apartment.rent,
        num_of_bedrooms:apartment.num_of_bedrooms,
        num_of_bathrooms:apartment.num_of_bathrooms
      }
    const [formData, setFormData]=useState(defaultForm)

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
        fetch(`/apartments/${apartment.id}`,{
          method:"PATCH",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })
        .then(r=>{
          if(r.ok){
              r.json().then((a)=>{
                  onUpdateApartment(a)
                  setIsUpdating(false)})
            }
          else
              {r.json().then((error)=>console.log(error))}
          })
    }

    function handleDelete(id){
      fetch(`/apartments/${id}`,{
          method:"DELETE"
      })
      .then(()=>onDeleteApartment(id))
    }

    function handleRate(){
        console.log("rate")
    }

    function handleReview(){
        console.log("review")
    }
 
    return (
        <div style={style}>
            {isUpdating?
                (<form className="UpdateItem" onSubmit={handleSubmit}>
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
              ):(
                <div>
                    <h2>{apartment.location}</h2>
                    <p>rent per month: $ {apartment.rent}</p>
                    <p>number of bedrooms: {apartment.num_of_bedrooms}</p>
                    <p>number of bathrooms: {apartment.num_of_bathrooms}</p>
                </div>)}
            {edit?<button id='update' onClick={() => setIsUpdating((isUpdating) => !isUpdating)}>update</button>:null}
            {edit?<button id='delete' onClick={e=>handleDelete(apartment.id)}>delete</button>:null}
            {edit?null:<button id='rate' onClick={e=>handleRate(apartment.id)}>rate</button>} 
            {edit?null:<button id='review' onClick={e=>handleReview(apartment.id)}>review</button>}        
        </div>
    );
}

export default Apartment;