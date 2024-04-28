import React from "react";
import { Link } from "react-router-dom";

const TestDetails = () => {
  return (
    <div>
      <Link to="/quiz">
        <div>شروع آزمون</div>
      </Link>
    </div>
  );
};

export default TestDetails;
