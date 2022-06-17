import { useNavigate } from "react-router-dom"

const LoginScreen = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/', {replace: true})
  }

  return (
    <>
      <h1>Login</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        login
      </button>
    </>    
  )
}
export default LoginScreen