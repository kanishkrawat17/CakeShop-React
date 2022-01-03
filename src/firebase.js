// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDyyWOsMZlQCfj5cPP2tWL0nqrdLlm3Ff0",
//   authDomain: "sample-cake.firebaseapp.com",
//   projectId: "sample-cake",
//   storageBucket: "sample-cake.appspot.com",
//   messagingSenderId: "684380382251",
//   appId: "1:684380382251:web:e100a9a8b6690b2fac766e"
// };

// // Initialize Firebase
// const fireDb =  firebase.initializeApp(firebaseConfig);
// export default fireDb.database.ref();
 






































// // import React, { useState, useEffect } from 'react';
// // import ContactForm from "./ContactForm";
// // import firebaseDb from "../firebase";

// // const Contacts = () => {

// // 	var [currentId, setCurrentId] = useState('');
// //     var [contactObjects, setContactObjects] = useState({})

// //     //Once components load complete
// //     useEffect(() => {
// //         firebaseDb.child('contacts').on('value', snapshot => {
// //             if (snapshot.val() != null) {
// //                 setContactObjects({
// //                     ...snapshot.val()
// //                 });
// //             }
// //         })
// //     }, [])

// //     const onDelete = id => {
// //         if (window.confirm('Are you sure to delete this record?')) {
// //             firebaseDb.child(`contacts/${id}`).remove(
// //                 err => {
// //                     if (err)
// //                         console.log(err)
// //                     else
// //                         setCurrentId('')
// //                 })
// //         }
// //     }


// //   return (
// //         <>
// //             <div className="jumbotron jumbotron-fluid">
// //                 <div className="container">
// //                     <h1 className="display-4 text-center">Contact Manager</h1>
// //                 </div>
// //             </div>
// //             <div className="row">
// //                 <div className="col-md-5">
// //                     <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
// //                 </div>
// //                 <div className="col-md-7">
// //                     <table className="table table-borderless table-stripped">
// //                         <thead className="thead-light">
// //                             <tr>
// //                                 <th>Name</th>
// //                                 <th>Mobile</th>
// //                                 <th>Email</th>
// //                                 <th>Actions</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {
// //                                 Object.keys(contactObjects).map((key) => (
// //                                     <tr key={key}>
// //                                         <td>{contactObjects[key].fullName}</td>
// //                                         <td>{contactObjects[key].mobile}</td>
// //                                         <td>{contactObjects[key].email}</td>
// //                                         <td className="bg-light">
// //                                             <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
// //                                                 <i className="fas fa-pencil-alt"></i>
// //                                             </a>
// //                                             <a className="btn text-danger" onClick={() => { onDelete(key) }}>
// //                                                 <i className="far fa-trash-alt"></i>
// //                                             </a>
// //                                         </td>
// //                                     </tr>
// //                                 ))
// //                             }
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default Contacts;




// // import React, { useState, useEffect } from 'react';

// // const ContactForm = (props) => {
// //     const initialFieldValues = {
// //         fullName: '',
// //         mobile: '',
// //         email: '',
// //         address: ''
// //     }

// //     var [values, setValues] = useState(initialFieldValues)


// //     useEffect(() => {
// //         if (props.currentId == '')
// //             setValues({ ...initialFieldValues })
// //         else
// //             setValues({
// //                 ...props.contactObjects[props.currentId]
// //             })
// //     }, [props.currentId, props.contactObjects])

// //     const handleInputChange = e => {
// //         var { name, value } = e.target;
// //         setValues({
// //             ...values,
// //             [name]: value
// //         })
// //     }

// //     const handleFormSubmit = e => {
// //         e.preventDefault()
// //         props.addOrEdit(values);
// //     }

// //     return (
// //         <form autoComplete="off" onSubmit={handleFormSubmit}>
// //             <div className="form-group input-group">
// //                 <div className="input-group-prepend">
// //                     <div className="input-group-text">
// //                         <i className="fas fa-user"></i>
// //                     </div>
// //                 </div>
// //                 <input className="form-control" name="fullName" placeholder="Full Name"
// //                     value={values.fullName}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <div className="form-row">
// //                 <div className="form-group input-group col-md-6">
// //                     <div className="input-group-prepend">
// //                         <div className="input-group-text">
// //                             <i className="fas fa-mobile-alt"></i>
// //                         </div>
// //                     </div>

// //                     <input className="form-control" name="mobile" placeholder="Mobile"
// //                         value={values.mobile}
// //                         onChange={handleInputChange}
// //                     />
// //                 </div>
// //                 <div className="form-group input-group col-md-6">
// //                     <div className="input-group-prepend">
// //                         <div className="input-group-text">
// //                             <i className="fas fa-envelope"></i>
// //                         </div>
// //                     </div>
// //                     <input className="form-control" name="email" placeholder="Email"
// //                         value={values.email}
// //                         onChange={handleInputChange}
// //                     />
// //                 </div>
// //             </div>
// //             <div className="form-group">
// //             /*instead of this input use textarea - issue with my syntax highlighter */
// //                <input className="form-control" name="address" placeholder="Address"
// //                     value={values.address}
// //                     onChange={handleInputChange}
// //                 />
// //             </div>
// //             <div className="form-group">
// //                 <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
// //             </div>
// //         </form>
// //     );
// // }

// // export default ContactForm;