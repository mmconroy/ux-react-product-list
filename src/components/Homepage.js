import React from "react";
import { withRouter } from "react-router-dom";

function Homepage(props) {
  function handleViewProducts() {
    props.history.push("/products");
  }

  return (
    <div className="homepage">
      <p>
        <button onClick={handleViewProducts}>View Our Products</button>
      </p>
      <img src="/HardwareStore.jpg" alt="Hardware Store" />
    </div>
  );
}

export default withRouter(Homepage);
