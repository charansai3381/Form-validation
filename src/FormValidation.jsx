import React, { useState } from 'react'

const FormValidation = () => {

   let [formData, setFormData] = useState({
      reqfield: "",
      email: "",
      password: "",
      confirmpass: "",
      url: "",
      digits: "",
      number: "",
      textarea: "",
      AlphaNumeric: ""
   })

   let { reqfield, email, password, confirmpass, url, digits, number, textarea, AlphaNumeric } = formData

   let handleChange = (e) => {
      let { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   let [errors, setErrors] = useState({})

   let handleSubmit = (e) => {
      e.preventDefault()

      let validationErrors = {}

      //reqfield
      if (reqfield == "") {
         validationErrors.reqfield = "*This field is mandatory" //objectname.keyname
      }

      // Email
      // ! regex.test(string)
      let regexemail = /\S+@\S+\.\S+/
      // let regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (email == "") {
         validationErrors.email = "*This field is mandatory"
      } else if (!regexemail.test(email)) {
         validationErrors.email = "Enter valid email"
      }

      // Password
      let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ // 1 lowercase , 1 uppercase , 1 digit , 1 special character , minimum 8 characters long

      if (password == "") {
         validationErrors.password = "This field is mandatory"
      } else if (!regexPass.test(password)) {
         validationErrors.password = "Please Enter Valid Password"
      }

      // Confirm Password
      if (confirmpass == "") {
         validationErrors.confirmpass = "This field is mandatory"
      } else if (confirmpass != password) {
         validationErrors.confirmpass = "Passwords does not match"
      }


      // URL

      let regexurl = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/

      if (url == "") {
         validationErrors.url = "This field is mandatory"
      } else if (!regexurl.test(url)) {
         validationErrors.url = "This should be an url"
      }

      // Digits

      let regexDigits = /^\d+$/

      if (digits == "") {
         validationErrors.digits = "This field is mandatory"
      } else if (!regexDigits.test(digits)) {
         validationErrors.digits = "This should be digits"
      }

      // Numbers

      let regexNumbers = /^-?\d+$/


      if (number == "") {
         validationErrors.number = "This field is mandatory"
      } else if (!regexNumbers.test(number)) {
         validationErrors.number = "This should be numbers"
      }

      // textarea

      if (textarea == "") {
         validationErrors.textarea = "This field is mandatory"
      }

      // Alpha Numeric

      let regexAlphaNumeric = /^[a-zA-Z0-9]+$/
      if (AlphaNumeric == "") {
         validationErrors.AlphaNumeric = "This field is mandatory"
      } else if (!regexAlphaNumeric.test(AlphaNumeric)) {
         validationErrors.AlphaNumeric = "Enter valid Alpha Numeric data"
      }


      setErrors(validationErrors)
   }

   let handleReset = (e) => {
      e.preventDefault()
      setFormData({
         reqfield: "",
         email: "",
         password: "",
         confirmpass: "",
         url: "",
         digits: "",
         number: "",
         textarea: "",
         AlphaNumeric: ""
      })
   }



   return (
      <>
         <form className='w-1/4 ml-2'>
            <legend className='text-3xl text-red-900 font-bold'>Form Validation</legend>

            {/* REQUIRED FIELD */}
            <section className="form-group p-[1.5px] my-2">
               <label>REQUIRED FIELD</label>
               <div className="inp mt-2">
                  <input type="text" placeholder='required field'
                     className='border bg-slate-50 p-2 w-full'
                     name='reqfield'
                     value={reqfield}
                     onChange={handleChange} />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.reqfield && <span>{errors.reqfield}</span>}
                  </div>
               </div>
            </section>

            {/* EMAIL */}
            <section className="form-group p-[1.5px] my-2">
               <label>EMAIL</label>
               <div className="inp mt-2">
                  <input type="text" placeholder='Enter Email' className='border bg-slate-50 p-2 w-full'
                     name='email'
                     value={email}
                     onChange={handleChange} />

                  <div className='form-error text-red-500 text-sm'>
                     {errors.email && <span>{errors.email}</span>}
                  </div>
               </div>
            </section>

            {/* PASSWORD */}
            <section className="form-group p-[1.5px] my-2">
               <label>PASSWORD</label>
               <div className="inp mt-2">
                  <input type="password" placeholder='Enter password' className='border bg-slate-50 p-2 w-full' n
                     name='password'
                     value={password}
                     onChange={handleChange} />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.password && <span>{errors.password}</span>}
                  </div>
               </div>

               {/* CONFIRM PASSWORD */}
               <div className='inp mt-2'>
                  <input type="password" placeholder='Confirm password' className='border bg-slate-50 p-2 w-full'
                     name='confirmpass'
                     value={confirmpass}
                     onChange={handleChange}
                  />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.confirmpass && <span>{errors.confirmpass}</span>}
                  </div>
               </div>
            </section>

            {/* URL */}
            <section className="form-group p-[1.5px] my-2">
               <label>URL</label>
               <div className="inp mt-2">
                  <input type="text" placeholder='Enter URL' className='border bg-slate-50 p-2 w-full'
                     name='url'
                     value={url}
                     onChange={handleChange} />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.url && <span>{errors.url}</span>}
                  </div>
               </div>
            </section>

            {/* DIGITS */}
            <section className="form-group p-[1.5px] my-2">
               <label>DIGITS</label>
               <div className="inp mt-2">
                  <input type="text" placeholder='Enter digits' className='border bg-slate-50 p-2 w-full'
                     name='digits'
                     value={digits}
                     onChange={handleChange} />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.digits && <span>{errors.digits}</span>}
                  </div>
               </div>
            </section>

            {/* NUMBERS */}
            <section className="form-group p-[1.5px] my-2">
               <label>NUMBERS</label>
               <div className="inp mt-2">
                  <input type="text" placeholder='Enter numbers' className='border bg-slate-50 p-2 w-full'
                     name='number'
                     value={number}
                     onChange={handleChange} />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.number && <span>{errors.number}</span>}
                  </div>
               </div>
            </section>

            {/* textarea */}
            <section className="form-group p-[1.5px] my-2">
               <label>TEXT AREA</label>
               <div className="inp mt-2">
                  <textarea rows={7} cols={30} className='border bg-slate-50 p-2 w-full'
                     name='textarea'
                     value={textarea}
                     onChange={handleChange}></textarea>
                  <div className='form-error text-red-500 text-sm'>
                     {errors.textarea && <span>{errors.textarea}</span>}
                  </div>
               </div>
            </section>


            {/* AlphaNumeric */}

            <section className="form-group p-[1.5px] my-2">
               <label>ALPHA NUMERIC</label>
               <div className="inp mt-2">
                  <input type="text" placeholder='Enter AlphaNumeric Value'
                     className='border bg-slate-50 p-2 w-full'
                     name='AlphaNumeric'
                     value={AlphaNumeric}
                     onChange={handleChange} />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.AlphaNumeric && <span>{errors.AlphaNumeric}</span>}
                  </div>
               </div>
            </section>


            {/* BUTTONS */}
            <section className='form-group  p-[1.5px] my-2'>
               <button className='bg-red-900 text-white rounded-sm px-3 py-1' onClick={handleSubmit}>SUBMIT</button>
               <button className='bg-red-900 text-white rounded-sm px-3 py-1 ms-1' onClick={handleReset}>RESET</button>
            </section>
         </form>
      </>
   )
}

export default FormValidation