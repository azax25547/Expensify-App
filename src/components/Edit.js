import React from 'react';

const edit = (props) => {  
    
    return (
        <div>
        THis is my edit expense component {props.match.params.id}
        </div>
    );
}

export default edit;