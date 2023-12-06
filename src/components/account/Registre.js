// Importez les bibliothèques nécessaires et le style CSS
import React, { useEffect, useRef } from 'react';
import './style.css'; // Assurez-vous que le chemin du fichier CSS est correct
import { GoogleLogin } from '@react-oauth/google';
import { register } from '../../Redux/slice/UserS';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Définissez votre composant d'enregistrement
const Registre = () => {
    const dispatch=useDispatch()
    const navigation=useNavigate()

    const {isLoading,isAuth}=useSelector((state)=>state.user)

  const myname=useRef()
  const myemail=useRef()
  const mypassword=useRef()
  const mypicture=useRef()
  const handeluser = () => {
    const name = myname.current.value;
    const email = myemail.current.value;
    const password = mypassword.current.value;

    dispatch( register({name:name,email:email,password:password,picture:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.we-love-the.net%2Fwp-content%2Fuploads%2F2021%2F02%2Fphoto-profi-instagram.jpg&tbnid=NqOFf_-RCpdH2M&vet=12ahUKEwivm6OvrdaCAxVtUKQEHVfhDFoQMygLegUIARCEAQ..i&imgrefurl=https%3A%2F%2Fwww.we-love-the.net%2Fchanger-photo-profil-instagram%2F&docid=m8X-tQb3kPLydM&w=1000&h=1000&q=photo%20profil&hl=fr&ved=2ahUKEwivm6OvrdaCAxVtUKQEHVfhDFoQMygLegUIARCEAQ"}))
  }
  useEffect(()=>{
    if(isAuth) navigation("/profil")
    
      },[isAuth])
  return (
    <div><section>

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <div className="signin">
          <div className="content">
            <div style={{textAlign:'center'}}>
            <h2 >Create your account</h2>

            </div>
            <div className="form">
            <div className="google-login-container">
                  <GoogleLogin />
                </div>
<div className="links">
                <a href="#">Or with email and password</a>
              </div>
              <div className="inputBox">
                <input type='text' placeholder='your name ...' ref={myname} />
              </div>
              <div className="inputBox">
                <input type='email' placeholder='your email ...' ref={myemail} />
              </div>
              <div className="inputBox">
                <input type='file' id='fileInput' name='nomDuChamp'  ref={mypicture}  />
              </div>
              <div className="inputBox">
                <input type="password" placeholder='your password ...' ref={mypassword}/>
              </div>
              <div className="links">
                <h3 href="#">Have an account? </h3>
                <div style={{color:'green'}} onClick={()=>{navigation("/")}}>
                <h3>Log in now</h3>
                </div>
              </div>
              <div className="inputBox">
                <input type="submit" value="Sign up" onClick={handeluser} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registre;