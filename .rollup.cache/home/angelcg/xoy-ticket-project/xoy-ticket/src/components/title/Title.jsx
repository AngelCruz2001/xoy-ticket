import "./Title.scss";
export const Title = ({ title, icon }) => {
    return (<div className="title">
            <img src={icon} alt="Icono"/>
            <h3>
                {title.toUpperCase()}
            </h3>
        </div>);
};
//# sourceMappingURL=Title.jsx.map