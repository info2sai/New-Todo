import { useState } from "react";
import React from "react";



function Form() {
    const [data,setData]=useState({
        email:"",
        password:""

    })
    const [store,SetStore]=useState([])

    const handler =(e) => {
        setData({ ...data,[e.target.name]:e.target.value})}

        const Change = (e) => {
            e.preventDefault();
           
            
              const newData = { email: data.email, password: data.password }
              SetStore([...store, newData])
            
          }
    return (
        <div>
       
        <div className="container">
        <div className="row">
            <div className="col-md-8">
            <div className="card">

         <div className="card-header classback">
         
        <form className="form-inline" className="primary"  onSubmit={Change}>
        <div class="form-group">
          <label >Email address:</label>
          <input type="text" className="form-control"   onChange={handler} name="email"/>
        </div>
        <div className="form-group">
          <label >Password:</label>
          <input type="Password" className="form-control"  onChange={handler} name="password"/>
        </div>
      
        <button className="btn btn-success" >Submit</button>
      </form>

      
       </div></div></div></div></div>
       <table className=" table table-hover table-primary " >
      <thead>
      <tr>
      <th>Email</th>
      <th>Password</th>
      
      </tr>
      
      </thead>
      <tbody>
     
      {    store.map((emp)=>{
            return <tr>
            <td>{emp.email}</td>
            <td>{emp.password}</td>
            </tr>
          })
        }

      
      
      
      </tbody>
      
      
      </table>
            
        </div>
    )
}

export default Form
