const Label = ({ name = "name", label = "label" }) => {
  return <label htmlFor={`${name}`}>{label}</label>;
};

export default Label;
