import React from "react";
import {useFormik} from "formik";
import Validation from './Validation';
import './styles.css';

function Contact() {

  const {handleSubmit,handleChange,handleBlur,isSubmitting,errors,touched}=useFormik({
    initialValues:{
    firstName: "",
    lastName: "",
    email: "",
    mesaj: "",
  },
  onSubmit:async (values,bag) => {
    await new Promise((r)=>setTimeout(r,2000))
    if(values.email==='test@test.com'){
      return bag.setErrors({email:"Bu mail adresi kullanımda!"});
    }
    bag.resetForm();
  },
  validationSchema:Validation,
});

  return (
    <div>
      <h2>İletişim</h2>
      <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name : </label>
            <input id="firstName" name="firstName" placeholder="Adınız" onChange={handleChange('firstName')} onBlur={handleBlur('firstName')}/>
            {
              errors.firstName && touched.firstName&&<div className="error">{errors.firstName}</div>
            }
          </div>

          <div>
            <label htmlFor="lastName">Last Name : </label>
            <input id="lastName" name="lastName" placeholder="Soyadınız" onChange={handleChange('lastName')} onBlur={handleBlur('lastName')}/>
            {
              errors.lastName && touched.lastName&&<div className="error">{errors.lastName}</div>
            }
          </div>

          <div>
            <label htmlFor="email">E-mail : </label>
            <input
              id="email"
              name="email"
              placeholder="Mail adresiniz"
              type="email"
              onBlur={handleBlur('email')}
              onChange={handleChange('email')}
            />
            {
              errors.email && touched.email && <div className="error">{errors.email}</div>
            }
          </div>

          <div>
            <label htmlFor="mesaj">Mesajınız : </label>
            <textarea id="mesaj" name="mesaj" placeholder="Mesajınız..." onChange={handleChange('mesaj')} onBlur={handleBlur('mesaj')} />
            {
              errors.mesaj && touched.mesaj&& <div className="error">{errors.mesaj}</div>
            }
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </form>
    </div>
  );
}

export default Contact;
