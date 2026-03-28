import { useState } from 'react'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!form.email || !form.password || (!isLogin && !form.name)) {
      setMessage('Please fill in all fields')
      return
    }

    if (isLogin) {
      setMessage(`Welcome back, ${form.email}!`)
    } else {
      setMessage(`Account created for ${form.name}!`)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="switch">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Register' : ' Login'}
          </span>
        </p>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  )
}

export default App