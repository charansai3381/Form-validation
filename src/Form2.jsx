import React, { useState } from 'react'

const Form2 = () => {

   let [formData, setFormData] = useState({
      MinLength: "",
      MaxLength: "",
      RangeLength: "",
      MinValue: "",
      MaxValue: "",
      RangeValue: ""
   })

   let { MinLength, MaxLength, RangeLength, MinValue, MaxValue, RangeValue } = formData

   let handleChange = (e) => {
      let { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   let [errors, setErrors] = useState({})

   let handleSubmit = (e) => {
      e.preventDefault()

      let validationErrors = {}

      // minLength

      if (MinLength == "") {
         validationErrors.MinLength = "This field is mandatory"
      } else if (MinLength.length < 7) {
         validationErrors.MinLength = "Enter minimum 7 characters"
      }

      // MaxLength

      if(MaxLength == ""){
         validationErrors.MaxLength = "This field is mandatory"
      }else if(MaxLength.length > 14){
         validationErrors.MaxLength = "Enter maximum 14 characters"
      }

      // Range Length

      if(RangeLength == ""){
         validationErrors.RangeLength = "This field is mandatory"
      }else if (RangeLength.length < 7 ||RangeLength.length > 14){
         validationErrors.RangeLength = "Enter Between 7 to 14 characters"
      }

      // MinValue

      if(MinValue == ""){
         validationErrors.MinValue = "This field is mandatory"
      }else if(MinValue < 18){
         validationErrors.MinValue = "Enter minimum value 18"
      }

      // MaxValue
      if(MaxValue == ""){
         validationErrors.MaxValue = "This field is mandatory"
      }else if(MaxValue > 35){
         validationErrors.MaxValue = "Enter maximum value 35 "
      }

      // RangeValue

      if(RangeValue == ""){
         validationErrors.RangeValue = "This field is mandatory"
      }else if(RangeValue < 18 || RangeValue > 35){
         validationErrors.RangeValue = "Enter value between 18 to 35"
      }

      setErrors(validationErrors)
   }

   let handleReset = (e) => {
      e.preventDefault()

      setFormData({MinLength: "",
         MaxLength: "",
         RangeLength: "",
         MinValue: "",
         MaxValue: "",
         RangeValue: ""})

      setErrors({})
   }

   return (
      <>
         <form className='w-1/4 ml-2'>
            <legend className='text-3xl text-red-900 font-bold'>Form Validation</legend>

            {/* MIN LENGTH */}
            <section className="form-group p-[1.5px] my-2">
               <label>MIN LENGTH</label>
               <div className="inp mt-2">
                  <input type="text"
                     placeholder='MIN 7 characters'
                     className='border bg-slate-50 p-2 w-full'
                     name='MinLength'
                     value={MinLength}
                     onChange={handleChange}
                  />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.MinLength && <span>{errors.MinLength}</span>}
                  </div>
               </div>
            </section>

            {/* MAX LENGTH */}
            <section className="form-group p-[1.5px] my-2">
               <label>MAX LENGTH</label>
               <div className="inp mt-2">
                  <input type="text"
                     placeholder='MAX 14 characters'
                     className='border bg-slate-50 p-2 w-full'
                     name='MaxLength'
                     value={MaxLength}
                     onChange={handleChange}
                  />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.MaxLength && <span>{errors.MaxLength}</span>}
                  </div>
               </div>
            </section>


            {/* RANGE LENGTH */}
            <section className="form-group p-[1.5px] my-2">
               <label>RANGE LENGTH</label>
               <div className="inp mt-2">
                  <input type="text" placeholder='LENGTH BETWEEN 7-14'
                     className='border bg-slate-50 p-2 w-full'
                     name='RangeLength'
                     value={RangeLength}
                     onChange={handleChange}
                  />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.RangeLength && <span>{errors.RangeLength}</span>}
                  </div>
               </div>
            </section>

            {/* MIN VALUE */}
            <section className="form-group p-[1.5px] my-2">
               <label>MIN VALUE</label>
               <div className="inp mt-2">
                  <input type="number" placeholder='MIN VALUE 18'
                     className='border bg-slate-50 p-2 w-full'
                     name='MinValue'
                     value={MinValue}
                     onChange={handleChange}
                  />
                   <div className='form-error text-red-500 text-sm'>
                     {errors.MinValue && <span>{errors.MinValue}</span>}
                  </div>
               </div>
            </section>

            {/* MAX VALUE */}
            <section className="form-group p-[1.5px] my-2">
               <label>MAX VALUE</label>
               <div className="inp mt-2">
                  <input type="number" placeholder='MAX VALUE 35'
                     className='border bg-slate-50 p-2 w-full'
                     name='MaxValue'
                     value={MaxValue}
                     onChange={handleChange}
                  />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.MaxValue && <span>{errors.MaxValue}</span>}
                  </div>
               </div>
            </section>

            {/* RANGE VALUE */}
            <section className="form-group p-[1.5px] my-2">
               <label>RANGE VALUE</label>
               <div className="inp mt-2">
                  <input type="number"
                     placeholder='VALUE BETWEEN 18-35'
                     className='border bg-slate-50 p-2 w-full'
                     name='RangeValue'
                     value={RangeValue}
                     onChange={handleChange}
                  />
                  <div className='form-error text-red-500 text-sm'>
                     {errors.RangeValue && <span>{errors.RangeValue}</span>}
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

export default Form2