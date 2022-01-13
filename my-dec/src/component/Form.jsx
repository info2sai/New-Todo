import React,{useState} from 'react';

const Form = () => {
    const [name,useName]=useState("")
    return (
        <div>
        <h1>hello check</h1>
            <div className='container'>
            <div className='row' >
            <div className='col'>
    
                    <Form>

                    <input placeholder='Name' />
                    </Form>
    
            </div>
            </div>   
            </div>            
        </div>
    )
}

export default Form
            