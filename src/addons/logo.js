import React from "react";
import PropTypes from "prop-types";
import "./logo.css";

const AddOnLogo = ({logo}) => (<img alt="logo" className="addon-logo" src={logo}/>);

AddOnLogo.propTypes = {
	logo: PropTypes.string.isRequired
};

export default AddOnLogo;