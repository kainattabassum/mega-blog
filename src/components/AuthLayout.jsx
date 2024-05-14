import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatue = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatue !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatue !== authentication) {
      navigate("/");
    }

    setLoading(false);
  }, [authStatue, navigate, authentication]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
}
