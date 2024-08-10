import React from 'react';

const TextInput = ({ label, type="text",value,onchange,placeholder = ''}) => {
    return (
        <div className='mb-4'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>{label}</lable>
            <input
               type={type}
               value={value}
               onchange={onchange}
               placeholder={placeholder}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    )
}

export default TextInput;