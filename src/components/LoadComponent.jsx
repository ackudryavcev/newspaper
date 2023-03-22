import "./LoadComponent.css";

//We show the load component at the moment when we are waiting for the news to be loaded from the api

function LoadComponent() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}

export default LoadComponent;
