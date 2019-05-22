import React from 'react';
import style from "./style"

export function Paragraph(props) {
    const { paragraphStyle } = style;
    const { message } = props;
    return (
        <p style={paragraphStyle}>{ message }</p>
    );
}