import "./DataDisplayCard.scss"

function DataDisplayCard({ value, subText, icon}) {
    return <div className="card">
        <img src={icon} alt="icon" className="card__icon" />
        <div className="card__textContainer">
            <span className="card__textContainer__value">{value}</span>
            <span className="card__textContainer__subText">{subText}</span>
        </div>
    </div>
}

export default DataDisplayCard;