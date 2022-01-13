 import React,{useState} from 'react'
 
 function To() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    // const [store,SetStore]=useState("")

    // const store=(e)=>{
    //     e.preventDefault();
    //     const newdata={email:email,password:password}
    //     setStoreEnter([...storeEnter,newdata])

    // }
        return (
         <React.Fragment>
           <div className='container mt-1'>
           <h1>Please Fill the Form</h1>
           </div>
           
           <form >
           <div className="mb-3">
             <label >Email address</label>
             <input type="email" className="form-control"  onChange={e=>setEmail(e.target.value)}/>
        
           </div>
           <div class="mb-3">
             <label >Password</label>
             <input type="text" className="form-control"  onChange={e=>setPassword(e.target.value)}/>
           </div>
         
           <button type="submit" className="btn btn-primary">Submit</button>
         </form>
         </React.Fragment>
     )
 }

 export default To
 