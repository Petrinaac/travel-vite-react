import "./MainStyle.css";
import PropTypes from 'prop-types';

function Main(props) {
  Main.propTypes = {
    class: PropTypes.string,
    mainImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string,
    url: PropTypes.string.isRequired,
    btnClass: PropTypes.string,
    btnText: PropTypes.string
  };

  return (
    <div className={props.class}>
      <img src={props.mainImg} alt="Main image" />
      <div className="main-text">
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        <a href={props.url} className={props.btnClass}>{props.btnText}</a>
      </div>
    </div>
  )
}

export default Main;