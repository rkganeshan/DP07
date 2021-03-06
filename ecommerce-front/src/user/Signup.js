import React,{useState} from 'react'
import {API} from "../config"
import Layout from '../core/Layout'


const Signup=()=>{

    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    })

    const {name,email,password}=values

    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const signUp=user=>{
        //console.log(name,email,password)
        const options = { 
            method: 'post',
            mode:'cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
               body: JSON.stringify(user)
          
          }    
          
          fetch('http://localhost:8000/api/signup', options)
          .then(response=>{
            return response.json()
        })
        .catch(err=>{
            console.log(err)
        })

        // fetch(`${API}/signup`,{
        //     method:"POST",
        //     headers:{
        //         Accept:"application/json",
        //     "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(user)
        // })
        // .then(response=>{
        //     return response.json()
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    }
    const clickSubmit=(event)=>{
        event.preventDefault()
        signUp({name,email,password})
    }

    const signUpForm=()=>(
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control"/>
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
        </form>
    )
    return(
        <Layout title="Signup" description="Signup toNode React E Comm App"
        className="container col-md-8 offset-md-2">
        {signUpForm()}
        {JSON.stringify(values)}
    </Layout>
    )
}

export default Signup