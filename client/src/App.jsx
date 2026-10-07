import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleLogin = (event) => {
    event.preventDefault()
    setMessage('Login form submitted successfully.')
  }

  const handleRegister = (event) => {
    event.preventDefault()

    if (registerForm.password !== registerForm.confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setMessage('Account created successfully!')
  }

  const goHome = () => {
    setPage('home')
    setMessage('')
    setShowPassword(false)
  }

  if (page === 'login') {
    return (
      <main className="auth-page">
        <div className="auth-card">
          <button className="back-button" onClick={goHome}>
            ← Back to Home
          </button>

          <div className="brand">
            <span className="brand-icon">S</span>
            <span>SmartExpense</span>
          </div>

          <h1>Welcome Back</h1>
          <p className="auth-subtitle">
            Sign in to continue managing your finances.
          </p>

          <form onSubmit={handleLogin}>
            <label htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              value={loginForm.email}
              onChange={(event) =>
                setLoginForm({ ...loginForm, email: event.target.value })
              }
              required
            />

            <label htmlFor="login-password">Password</label>
            <div className="password-wrapper">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={loginForm.password}
                onChange={(event) =>
                  setLoginForm({ ...loginForm, password: event.target.value })
                }
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button className="primary-button" type="submit">
              Sign In
            </button>
          </form>

          {message && <p className="success-message">{message}</p>}

          <p className="switch-text">
            Don't have an account?{' '}
            <button onClick={() => {
              setPage('register')
              setMessage('')
            }}>
              Create Account
            </button>
          </p>
        </div>
      </main>
    )
  }

  if (page === 'register') {
    return (
      <main className="auth-page">
        <div className="auth-card">
          <button className="back-button" onClick={goHome}>
            ← Back to Home
          </button>

          <div className="brand">
            <span className="brand-icon">S</span>
            <span>SmartExpense</span>
          </div>

          <h1>Create Your Account</h1>
          <p className="auth-subtitle">
            Start taking control of your personal finances today.
          </p>

          <form onSubmit={handleRegister}>
            <label htmlFor="register-name">Full Name</label>
            <input
              id="register-name"
              type="text"
              placeholder="Enter your full name"
              value={registerForm.name}
              onChange={(event) =>
                setRegisterForm({ ...registerForm, name: event.target.value })
              }
              required
            />

            <label htmlFor="register-email">Email Address</label>
            <input
              id="register-email"
              type="email"
              placeholder="you@example.com"
              value={registerForm.email}
              onChange={(event) =>
                setRegisterForm({ ...registerForm, email: event.target.value })
              }
              required
            />

            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              placeholder="Create a password"
              value={registerForm.password}
              onChange={(event) =>
                setRegisterForm({
                  ...registerForm,
                  password: event.target.value,
                })
              }
              required
              minLength="6"
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={registerForm.confirmPassword}
              onChange={(event) =>
                setRegisterForm({
                  ...registerForm,
                  confirmPassword: event.target.value,
                })
              }
              required
              minLength="6"
            />

            <button className="primary-button" type="submit">
              Create Account
            </button>
          </form>

          {message && <p className="success-message">{message}</p>}

          <p className="switch-text">
            Already have an account?{' '}
            <button onClick={() => {
              setPage('login')
              setMessage('')
            }}>
              Sign In
            </button>
          </p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <div className="brand hero-brand">
            <span className="brand-icon">S</span>
            <span>SmartExpense</span>
          </div>

          <h1>Take Control of Your Money</h1>

          <p>
            Track your income, manage your expenses, and understand where your
            money goes — all in one simple and intelligent platform.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => setPage('login')}
            >
              Login
            </button>

            <button
              className="secondary-button"
              onClick={() => setPage('register')}
            >
              Create Account
            </button>
          </div>

          <div className="feature-row">
            <div>
              <strong>Track</strong>
              <span>Every transaction</span>
            </div>

            <div>
              <strong>Analyse</strong>
              <span>Your spending habits</span>
            </div>

            <div>
              <strong>Plan</strong>
              <span>Your financial future</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
