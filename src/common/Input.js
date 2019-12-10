import React from 'react';

function Input({label, type, placeholder, change, value, name, required}){
    return (
       <div class="control-group">
           <div className="form-group floating-label-form-group controls">
               <label>{label}</label>
               <input
               name={name}
               type={type}
               onChange={change}
               value={value}
               className="form-control"
               placeholder={placeholder}
               id="name"
               required={required}
               data-validation-required-message="Please enter a message"
               />
           </div>
       </div>
    );
}

export default Input;
