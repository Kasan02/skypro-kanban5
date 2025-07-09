import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ExitPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(false);
    navigate("/sign-in");
  }, [setIsAuth, navigate]);

  return null;
};

export default ExitPage;
