import PropTypes from 'prop-types';
import "./InputBox.css";

const InputBox = (props) => {
  return (
    <div>
      <div className={"header-h6"} style={{ marginBottom: "10px" }}>
        {props.label}
      </div>
      <input
        type={props.type || "text"}
        className={"inputbox-container"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default InputBox;
