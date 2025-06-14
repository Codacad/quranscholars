const InlineSpinner = ({ w, h }) => {
  return (
    <span
      style={{ width: `${w}px`, height: `${h}px` }}
      className={`spinner`}
    ></span>
  );
};

export default InlineSpinner;
