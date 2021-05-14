import React from 'react';
import TextField from '@material-ui/core/TextField';
import './input.style.scss';

const Input = (props) => {
    return (
        <div className='input-field'>
            <TextField
                fullWidth
                margin='dense'
                variant='filled'
                value={props.val}
                placeholder='Enter name of zip file'
                onChange={props.inputtext}

            />
        </div>
    );
};

export default Input;