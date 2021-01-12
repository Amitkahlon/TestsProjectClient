import React from 'react';
import { Button } from 'semantic-ui-react';

const TestComp = (props) => {
    return ( 
        <div>
            <Button>{props.children}</Button>
        </div>
     );
}
 
export default TestComp;