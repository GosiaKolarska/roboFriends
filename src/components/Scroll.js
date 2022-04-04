import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', borderBottom: '4px solid #fff', borderTop: '4px solid #fff', height: '80vh' }}>
            {props.children}
        </div>
    )
}

export default Scroll;