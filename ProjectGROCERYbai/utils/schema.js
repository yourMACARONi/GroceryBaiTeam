
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
     email: Yup.string()
     .email('Invalid email')
     .required('Email is required'),
     password: Yup.string()
     .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
     .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
     .matches(/\d/, "Password must have a number")
     .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
     .min(8, ({ min }) => `Password must be at least ${min} characters`)
     .required('Password is required'), 
})


const registerSchema = Yup.object().shape(
     {    
          email: Yup.string()
          .email('Invalid email')
          .required('Email is required')
          .lowercase(),
          fullName: Yup.string()
          .matches(/(\w.+\s).+/, 'Enter first name & last name')
          .required('Full name is required'),
          password: Yup.string()
          .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
          .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
          .matches(/\d/, "Password must have a number")
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
          .min(8, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),  
          renter_password: Yup.string()
          .required()
          .oneOf([Yup.ref('password'), null], 'Passwords does not match')
     }    
)

const forgotSchema = Yup.object().shape(
     {
          email: Yup.string().email().required('Email is required').lowercase(),
     }    
)

module.exports = { loginSchema, registerSchema, forgotSchema }; 
