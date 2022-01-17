import { useState } from 'react'
import React from 'react';
import "../index.css"

function IdeyLabs() {
    const [data,SetData]=useState({
        first:"",
        Last:"",
        Email:"",
        Password:"",
        Phone:"",
        date:"",
    
        

    })
    const [store,SetStore]=useState([]);
    
    const handler=(e)=>{
        SetData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        const newData={id:data.id,first: data.first,Last: data.Last,Email :data.Email,Password: data.Password,Phone: data.Phone,date: data.date}
       
        SetStore([...store, newData])
    }
         
    return (
        <div >
        <div className="container mt-5">
        <div className="row">
            <div className="col md-5">
                <div className="card md-8">
                    <div className="card-header bg-secondary ">
                       <h5>Please Enter Deatils</h5>

                    </div>
                    <div className="card-body">
                    
                       <form  className="form-inline" className="success"  onSubmit={handleSubmit} >
                      
                        <div className='form-group'>
                        <input type="text" placeholder='First Name'    onChange={handler}  required="text" maxlength="10" minlength="3" name='first'/> <br/>
                        <small className='text-primary'>Name is required</small>
                        </div>
                        <div className='form-group'>
                          <input type="text" placeholder='Last Name' onChange={handler}  required="text"  maxlength="10" minlength="3"  name='Last' /> 
                        </div>
                        <div className='form-group'>
                        <input type="Email" placeholder='Please Enter Valid Email'  required="text"   className='form-control'onChange={handler}  name='Email'/>
                        <small className='text-primary'>Please Enter vaild Email</small> </div>
                         <div className='form-group'>
                        <input type="password" placeholder='Please Enter Password'  required="text" className='form-control'onChange={handler} maxlength="10" minlength="3" name='Password' />
                        <small className='text-primary'>Password Is Required</small>
                        </div>
                        <div className='form-group'>
                        <input type="text"  placeholder='Phone-Number'  maxlength="10" required="number" onChange={handler}  name='Phone' /> <br/>
                        <small className='text-primary'>Password Is Required</small>
                        <br/>
                       
                        </div>
                        <div className='form-group'>
                        <input type="date" onChange={handler}  required="date" name='date' />
                        </div>
                        <div className='form-group'>
                        <button className='btn btn-success '>Submit</button>
                        </div>
                     
                        
                       </form>
                       

                    </div>

                </div>


            </div>

        </div>

    </div>
    <div className="card">
    <div className="card-header ">
    <div className="card-body">
    <table className='table table-hover   bg-secondary' >
                       <thead>
                       <tr>
                       <th>ID</th>
                       <th>First</th>
                       <th>Last</th>
                       <th>Email</th>
                       <th>Password</th>
                       <th>Phone-Number</th>
                       <th>Date</th>
                       
                       </tr>
                       </thead>
                       <tbody className=' bg-info' >
                       {store.map((emp, id)=>{
                           return(
                           <tr key={id}>
                           <td>{id+1}</td>
                           <td>{emp.first}</td>
                           <td>{emp.Last}</td>
                           <td>{emp.Email}</td>
                           <td>{emp.Password}</td>
                           <td>{emp.Phone}</td>
                           <td>{emp.date}</td>
                           </tr>)
                       })}
                       </tbody>
                       
                       
                       </table>
                       </div>
                       </div>
                       </div>
    </div>

         
        
    )}  
         
    
export default IdeyLabs
