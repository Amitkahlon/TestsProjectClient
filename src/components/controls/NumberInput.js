import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

const NumberInput = ({max, min, step=1}) => {
    const [value, setValue] = useState(0)
    const style = {
        display: 'flex',
        width: '20%'
    }
    const increaseValue = () => {
        if(max && value >= max) return setValue(max)
        setValue(value + step)
    }

    const decreaseValue = () => {
        if(min && value <= min) return setValue(min)
        setValue(value - step)
    }

    return ( 
        <div style={style}>
            <Button icon='angle down' onClick={decreaseValue}/>
            <Input value={value}/>
            <Button icon='angle up' style={{marginLeft: '3px'}} onClick={increaseValue}/>
        </div>
     );
}
 
export default NumberInput;