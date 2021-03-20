
function validate(values) {
    let errors = {};
    if (!values.userName) {
        errors.userName = 'User name is required';
    } else if (/[^a-zA-Z]/.test(values.userName)) {
        errors.userName = 'User name cant be numbers or special characters';
    } else if (2 > values.userName.length) {
        errors.userName = 'User name must be 2 or more characters';
    } else if (values.userName.length > 12) {
        errors.userName = 'User name must be less than 12 characters';
    }
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.age) {
        errors.age = 'Your age is required';
    } else if (!/^-?[\d.]+(?:e-?\d+)?$/.test(values.age)) {
        errors.age = 'Must be a number';
    } else if (15 > values.age || values.age > 95) {
        errors.age = 'Please insert your real age';
    }
    return errors;
};


export default validate