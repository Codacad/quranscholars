const AppLoader = ({ overlay = false, label = "Loading..." }) => {
  return (
    <div





      aria-live="polite"
      aria-busy="true">
      
      <div>
        <span />
        <p>{label}</p>
      </div>
    </div>);

};

export default AppLoader;
