import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ExitPage = ({ setIsAuth, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(false);
    setUser(null); 
    navigate("/sign-in");
  }, [setIsAuth, setUser, navigate]);

  return null;
};

export default ExitPage;

