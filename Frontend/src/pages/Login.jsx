import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      navigate('/admin-dashboard'); 
    } else if (username !== '' && password !== '') {
      setError('Incorrect username or password');
    }
  };

  // Handle go back
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div style={styles.pageContainer}>
    
      <div style={styles.formContainer}>
        <h4 style={styles.heading}>Hello! Welcome Back</h4>
        {error && <p style={styles.errorMsg}>{error}</p>}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            
            <input
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            
          <div style={styles.inputContainer}>
            
          <div style={styles.passwordContainer}>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
        style={styles.input}
      />
      {/* Eye Button to Toggle Password Visibility */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        style={styles.eyeButton}
      >
        {showPassword ? '👁️' : '👁️‍🗨️'}
      </button>
    </div>
          </div>
          </div>
          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={styles.checkbox}
            />
            <label style={styles.checkboxLabel}>Remember Me</label>
          </div>

          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
        <div style={styles.linkContainer}>
          <a href="#" style={styles.link}>Forgot Password?</a>
          <span style={styles.linkDivider}>|</span>
          <a href="#" style={styles.link}>New User? Signup</a>
        </div>
        <button onClick={handleGoBack} style={styles.goBackButton}>
          Go Back
        </button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    height: '90vh',
   
    padding: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    borderRadius: '15px',
    width:'100%',
    
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    height: '90%',
    padding: '20px',
    borderRadius: '15px',
    
  },
  image: {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#a3cef1',
    padding: '50px',
    borderRadius: '10px',
    height:'90%',
    color: '#fafaff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    marginBottom: '20px',
    color:'#023e8a',
    
    
  },
  errorMsg: {
    color: '#ff6b6b',
    marginBottom: '15px',
  },
  form: {
    width: '100%',
    maxWidth: '300px',
  },
  inputGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #cb9cf2',
    outline: 'none',
    
    color: '#023047',
    marginTop: '5px',
  },
  loginButton: {
    backgroundColor: '#0077b6',
    color: '#fafbff',
    padding: '10px',
    width: '100%',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  loginButtonHover: {
    backgroundColor: '#b280e2',
  },
  linkContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: '#023e8a',
    textDecoration: 'none',
    cursor: 'pointer',
    margin: '0 10px',
  },
  linkDivider: {
    color: '#023e8a',
  },
  goBackButton: {
    marginTop: '20px',
    backgroundColor: '#023047',
    color: '#fafaff',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    width: '100%',
    justifyContent: 'flex-start', 
  },
  checkbox: {
    marginRight: '10px',
  },
  checkboxLabel: {
    color: '#fafaff',
  },
  passwordContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #cb9cf2',
    outline: 'none',
  },
  eyeButton: {
    position: 'absolute',
    right: '0px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#374a67',
    outline: 'none',
  },
};

export default Login;
