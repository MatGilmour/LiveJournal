import React, { useState } from 'react';

import format from 'date-fns/format';

export default function Events(props) {
    const dateFormat = "MM/dd/yyyy";
    return (
        <div>
            <p>Hello World</p>
            <button onClick={() => props.onChange(props.showCal)}>Click me to Return</button>
            <h1>{format(props.calDate, dateFormat)}</h1>
        </div>
    );
}
