import React from 'react'

const Higher = (HOC) => {
    return function Hoc(props) {
        const offer = {
            style: { display: props.offer ? 'block' : 'none' },
            newproduct: { display: props.new_product ? 'block' : 'none' }
        };

        return (
            <HOC {...props} hoc={offer} />
        )
    }

}

export default Higher
