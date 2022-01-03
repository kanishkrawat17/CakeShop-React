import React from "react";
import { useState } from "react";

const CakeForm = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    address: "",
    contact: "",
    email: "",
    flavour: "",
    weight: "",
    id : 1
  };

  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialState);
  const [peopleArr, setPeopleArr] = useState ([]);
  const [isSubmit, setIsSubmit] = useState(false);

  //   useEffect(() => {
  //     firebaseDb.child('contacts').on('value', snapshot => {
  //         if (snapshot.val() != null) {
  //             setPeopleArr({
  //                 ...snapshot.val()
  //             });
  //         }
  //     })
  // }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // console.log(Object.keys(formErrors).length);
    if(Object.keys(formErrors).length === 0 && isSubmit){
        setPeopleArr([...peopleArr,formValues])
        console.log(peopleArr)
    }
    console.log(formValues)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value, id : peopleArr.length+2 });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    } else if (!values.email) {
      errors.email = "Email is Required";
    }

    if (!values.contact) {
      errors.contact = "Contact no. is Required";
    } else if (values.contact.length != 10) {
      errors.contact = "Enter the correct phone no.";
    }

    return errors;
  };

  const onDelete =  (key)=>{
      const newArr = peopleArr.filter( (people)=>{
        return key != people.id
      })

      setPeopleArr([newArr])
  }

  return (
    <div>

      <header ><h1> Cake-Shop</h1> </header>
      <form onSubmit={handleSubmit} className = "cake-form">
        <div>
          <label>First name </label>
          <input name="firstname" onChange = {handleChange} placeholder="First Name" />
          <label>Last name </label>
          <input name="lastname" onChange = {handleChange} placeholder="Last Name" />
        </div>

        <div>
          <label>Address </label>
          <input name="address" onChange = {handleChange} placeholder="Address" />
          <label>State </label>
          <input name="state" onChange = {handleChange} placeholder="State" />
        </div>

        <div>
          <label>Contact </label>
          <input name="contact" onChange = {handleChange} placeholder="Phone no." />
          <p>{formErrors.contact}</p>
          <label>Email </label>
          <input name="email" onChange = {handleChange} placeholder="email" />
          <p>{formErrors.email}</p>
        </div>

        <div>
          <select name="flavour" onChange={handleChange}>
            <option value="Vanilla">Vanilla</option>
            <option value="Strawberry">Strawberry</option>
            <option value="ButterScotch">ButterScotch</option>
            <option value="Choclate">Choclate</option>
          </select>

          <label>Weight of the cake</label>
          <input name="weight" onChange = {handleChange} placeholder="Pounds" />
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>

        <br/>
      <table className = "table">
      <tbody>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Address</th>
          {/* <th scope="col">State</th> */}
          <th scope="col">Contact</th>
          <th scope="col">Email</th>
          <th scope="col">Cake-Flavour</th>
          <th scope="col">Cake Size(in Pounds)</th>
          <th scope="col">Action</th>
        </tr>
          {Object.keys(formErrors).length == 0 && isSubmit ? (
              <>
              {peopleArr.map((val) => {
                return <tr key = {val.id}>
                    <td>{val.firstname}</td>
                    <td>{val.lastname}</td>
                    <td>{val.address}</td>
                    {/* <td>{val.state}</td> */}
                    <td>{val.contact}</td>
                    <td>{val.email}</td>
                    <td>{val.flavour}</td>
                    <td>{val.weight}</td>
                    <button onClick = {()=>{onDelete(val.id)}}>Delete</button>
                   
                </tr>
                })}

                </>
          ) : ( 
            ""
          )}
    
        </tbody>
      </table>
    </div>
  );
};

export default CakeForm;

