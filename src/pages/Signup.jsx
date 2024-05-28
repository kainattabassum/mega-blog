import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
  return (
    <div className="py-8">
      {/* Network request failed */}
      <SignupComponent />
    </div>
  );
}

export default Signup;
