import React from 'react';
import "./List.scss";
export const Row = ({ children, headers, extra }) => {
    return (<div className={`row ${headers ? 'headers' : ''} ${extra ? 'extra' : ''}`}>
            {children}
        </div>);
};
//# sourceMappingURL=Row.jsx.map