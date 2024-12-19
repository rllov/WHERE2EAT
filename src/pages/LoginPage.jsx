import { useRef, useState, useEffect } from "react";

const LoginPage = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Set the focus on the first input when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password); //backend stuff to send the data to database or something
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <section>
          <h1> You are logged in </h1>
          <br />
          <p>
            <a href="#"> Go to home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errorRef}
            className={errorMsg ? "errorMsg" : "offscreen"}
            aria-live="assertive" //announces the message immediately when the focus is set on the paragraph
          >
            {errorMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user} //controlled input
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
            <p>
              Need an Account? <br />
              <span className="line">{/*react router link here */}</span>
            </p>
          </form>
        </section>
      )}
    </>
  );
};

export default LoginPage;
