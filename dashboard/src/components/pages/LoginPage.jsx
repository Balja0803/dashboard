import "../style/loginpage.css";
export default function LoginPage() {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      {" "}
      Login
      <form>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button type="Submit" onClick={clickHandler}>
          {" "}
          Login
        </button>
      </form>
    </div>
  );
}
