import "./BoxHolder.style.css";


const BoxHolder = ({title  ,  icon , text}) => {
  return (
    <div className="BoxHolder">
        <i className={icon}></i>
        <div className="holder-3">
            <h2 className="box-title">{title}</h2>
            <p className="box-parag">{text}</p>
        </div>
    </div>
  )
}

export default BoxHolder;