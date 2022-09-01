export const Cell = ({ text, icon, clickFunction }) => {
    return (<div className='cell' onClick={clickFunction}>
            <p>
                {text && text}
            </p>

            {icon && <i className={icon}></i>}


        </div>);
};
//# sourceMappingURL=Cell.jsx.map