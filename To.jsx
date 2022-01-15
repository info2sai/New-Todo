import React, { useState } from 'react'

function To() {

  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const [store, SetStore] = useState([])

  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    
      const newData = { email: data.email, password: data.password }
      SetStore([...store, newData])
    
  }


  return (
    <React.Fragment>
      <div className='container mt-1'>
        <h1>Please Fill the Form</h1>
        
      </div>

      <form onSubmit={handleSubmit} >
        <div  >
          <label >Email address</label>
          <input type="text" name='email' onChange={handleOnchange} className="form-control" />

        </div>
        <div class="form-group mb-3">
          <label >Password</label>
          <input type="text"  name='password' onChange={handleOnchange} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <hr />
      <h3>Table</h3>
      <table className='table table-hover table-success '>
        <thead>
        <tr>
        <th>email</th>
        <th>password</th>
        </tr>
        </thead>
        <tbody>
        {
          store.map((emp)=>{
            return <tr>
            <td>{emp.email}</td>
            <td>{emp.password}</td>
            </tr>
          })
        }
        </tbody>
        </table>
    </React.Fragment>
  )
}

export default To
