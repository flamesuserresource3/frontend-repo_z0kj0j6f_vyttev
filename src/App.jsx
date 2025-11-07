import { useState, useEffect } from 'react';
import AuthLayout from './components/AuthLayout';
import { LoginForm, CreateAccountForm } from './components/AuthForms';
import HomePlaceholder from './components/HomePlaceholder';

// Simple local storage based mock auth
const STORAGE_KEY = 'mvp-auth-users';

function App() {
  const [screen, setScreen] = useState('login'); // 'login' | 'register' | 'home'
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setUsers(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const handleCreate = ({ username, password, email, mobile }) => {
    // basic duplicate check
    if (users.some((u) => u.username === username)) {
      alert('Username already exists. Please choose another.');
      return;
    }
    const newUser = { username, password, email, mobile };
    setUsers((prev) => [...prev, newUser]);
    alert('Account created! Please sign in.');
    setScreen('login');
  };

  const handleLogin = ({ username, password }) => {
    const found = users.find((u) => u.username === username && u.password === password);
    if (found) {
      setCurrentUser(found);
      setScreen('home');
    } else {
      alert('Invalid credentials.');
    }
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setScreen('login');
  };

  if (screen === 'home') {
    return <HomePlaceholder onSignOut={handleSignOut} />;
  }

  return (
    <AuthLayout>
      {screen === 'login' ? (
        <LoginForm
          onSwitch={() => setScreen('register')}
          onLogin={handleLogin}
        />
      ) : (
        <CreateAccountForm
          onSwitch={() => setScreen('login')}
          onCreate={handleCreate}
        />
      )}
    </AuthLayout>
  );
}

export default App;
