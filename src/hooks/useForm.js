import { useState } from 'react';

function useForm(callback, current={}){
       const [inputs, setInputs] = useState(current);

       const handleInputChange = event => {
         event.persist();
         const {name, value} = event.target;
         //console.log({name, value});
         setInputs(fields => ({ ...fields, [name]: value }));
       };

       const handleSubmit = event => {
         if(event) event.preventDefault();
         callback(inputs);
       };

       return {
           inputs,
           handleInputChange,
           handleSubmit
       }
}

export default useForm;
