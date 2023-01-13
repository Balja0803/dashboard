import "../components/style/header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  const urlChangeHandler = () => {
    navigate("products");
  };
  return (
    <div className="header">
      <button onClick={homeHandler}>Home</button>
      <button onClick={urlChangeHandler}>Products</button>
    </div>
  );
}
