import { Fragment } from "react";
import "./Styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="input-element">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
