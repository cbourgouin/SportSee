import "./DataDisplayCard.scss"

function DataDisplayCard({ value, subText, icon}) {
    return <div className="card">
        <img src={icon} alt="icon" className="card__icon" />
        <div className="card__textContainer">
            <a className="card__textContainer__value">{value}</a>
            <a className="card__textContainer__subText">{subText}</a>
        </div>
    </div>
}

export default DataDisplayCard;