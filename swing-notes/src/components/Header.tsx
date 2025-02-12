import Login from "./Login";

const Header = ({setLoginUser, setUsername}: {
  setLoginUser: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}) => {
  

  return (
    <header>
      <h1>Swingnotes</h1>
      <Login setLoginUser={setLoginUser} setUsername={setUsername} />       
    </header>
  );
};

export default Header;
