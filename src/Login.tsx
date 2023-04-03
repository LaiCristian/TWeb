import React, { useState } from 'react';

const Login= () => {
    const[Email,setEmail] =useState('');
    const[Password,setPassword] =useState('');
    const[emailDirty,setEmailDirty] =useState(false);
    const[passwordDirty,setPasswordDirty] =useState(false);
    const[emailError,setEmailError] =useState('Spatiu obligatoriu de completat');
    const[passwordError,setPasswordError] =useState('Spatiu obligatoriu de completat');

    const passwordHandler = (e: { target: { value: React.SetStateAction<string>; }; }) =>
    {
      setPassword(e.target.value)
      if (!e.target.value)
      {
        setPasswordError('Spatiu obligatoriu de completat')
      }
      else{
        setPasswordError('')
      }
    }
  
    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      switch(e.target.name){
        case 'Email':
          setEmailDirty(true)
          break
          case 'Password':
          setPasswordDirty(true)
          break
      }
    }
   const emailHandler = (e: { target: { value: React.SetStateAction<string>; }; }) =>
   {
    setEmail(e.target.value)
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLowerCase()))
  setEmailError('Email incorect')
  else{
    setEmailError('')
  }
    
   }
    return (
      <div className='Login'>
        <h2>Welcome to FCIM!</h2>
        <form>
          <label><span className="login_txt">Email</span></label>
          {(emailDirty && emailError) && <div className="error_text"> {emailError}</div>}
          <input name="Email" type="text" onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)}/>
          <label><span className="login_txt">Password</span></label>
          {(passwordDirty && passwordError) && <div className="error_text"> {passwordError}</div>}
          <input onChange={e => passwordHandler(e)} name="Password" type="password" onBlur={e => blurHandler(e)}/>
             <label><span className="login_txt">Specialitatea</span></label>
             <select>
              <option value="1">Calculatoare și Rețele</option>
              <option value="2">Autoamtică și Informatică</option>
              <option value="3">Electronica Aplicată</option>
              <option value="4">Informatica aplicată</option>
              <option value="5">Ingineria software</option>
              <option value="6">Inginerie biomedicală</option>
              <option value="7">Managementul Informației</option>
              <option value="8">Microelectronică și nanotehnologii</option>
              <option value="9">Robotică și mecatronică</option>
              <option value="10">Securitate Informațională</option>
              <option value="11">Tehnologia Informației</option>
             </select>
             <button onClick={()=>alert("Înregistrare cu succes!")}>Log In</button>
  
        </form>
    </div>
    );
  }

export default Login;