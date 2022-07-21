import React, {useState, useEffect} from 'react';
import '../../App.css';
import Courses1 from './Courses1'
import Courses2 from './Courses2'
import Courses3 from './Courses3'
import HeroOther from '../HeroOther'
import { useNavigate  } from "react-router-dom";
import Navbar from '../Navbar';

export default function Courses() {

    const his = useNavigate ();
    const initialValues = {name:"", email:"",password:"",confirmpass:""}
    const [formValue, setFormValues]=useState(initialValues);
    const [formError, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit]=useState(false);

    const handleClick =(e, num)=>{
        const {name, value}=e.target;
        setFormValues({...formValue, [name]: value});
    }


    const [page,setPage]= useState(0);
    const FormTitle =["Sign Up", "Course Selection", "Confirmation"];
    const PageDisplay=()=>{
        if(page==0){
            return <Courses1 handleClick={handleClick} formValue={formValue} formError={formError}/>;
        }
        else if(page==1){
            return <Courses2/>;
        }
        else if(page==2){
            return <Courses3/>;
        }
    };


    const handleSubmit = (e) =>{
        console.log(page);
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit && page <2) {
            setPage(page+1);
        } 
      }, [formError]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "name is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        if(values.password!=values.confirmpass){
            errors.confirmpass = "Passowrds do not match";
        }
        return errors;
      };


  return (
    <>
    <div className='form'>
        <div className='progressbar'></div>
        <div className='form-container'>
            <div className='header'>
                <h1>{FormTitle[page]}</h1>
            </div>
            <div className='body'>{PageDisplay()}</div>
            <div className='footer'>
                <button disabled={page==0} onClick={()=>{
                    setPage((page)=>page -1);
                
                }}
                >
                        Prev
                </button>
                <button disabled={page==FormTitle.length-1} onClick={handleSubmit}
                    >
                        Next
                </button>
            </div>
        </div>
    </div>
    </>
    
    );

}
