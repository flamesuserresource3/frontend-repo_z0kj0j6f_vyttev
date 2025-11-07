import { useState } from 'react';
import { Facebook, Twitter, Google, User } from 'lucide-react';
import InputField from './InputField';
import GradientButton from './GradientButton';

function LoginForm({ onSwitch, onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.username || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    onLogin(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Hello</h1>
        <p className="text-gray-600">Sign in to your account</p>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 border border-red-100">{error}</div>
      )}

      <div className="space-y-4">
        <InputField
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="johndoe"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="••••••••"
        />
      </div>

      <div className="flex justify-end">
        <button type="button" onClick={() => alert('Password recovery is out of scope for this MVP.')} className="text-sm font-medium text-purple-600 hover:text-purple-700">
          Forgot your password?
        </button>
      </div>

      <GradientButton type="submit" full>
        Sign in
      </GradientButton>

      <div className="text-center text-sm text-gray-600">
        Don’t have an account?{' '}
        <button type="button" onClick={onSwitch} className="font-semibold text-purple-600 hover:text-purple-700">
          Create
        </button>
      </div>
    </form>
  );
}

function CreateAccountForm({ onSwitch, onCreate }) {
  const [form, setForm] = useState({ username: '', password: '', email: '', mobile: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.username || !form.password || !form.email || !form.mobile) {
      setError('Please fill in all fields.');
      return;
    }
    onCreate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Create account</h1>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 border border-red-100">{error}</div>
      )}

      <div className="space-y-4">
        <InputField label="Username" name="username" value={form.username} onChange={handleChange} placeholder="johndoe" />
        <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="••••••••" />
        <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        <InputField label="Mobile" type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="(123) 456-7890" />
      </div>

      <GradientButton type="submit" full>
        Create
      </GradientButton>

      <div className="pt-2">
        <p className="text-center text-sm text-gray-600">Or continue with</p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <button type="button" className="rounded-full border border-gray-200 p-2 text-gray-600 hover:bg-gray-50" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </button>
          <button type="button" className="rounded-full border border-gray-200 p-2 text-gray-600 hover:bg-gray-50" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </button>
          <button type="button" className="rounded-full border border-gray-200 p-2 text-gray-600 hover:bg-gray-50" aria-label="Google">
            <Google className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button type="button" onClick={onSwitch} className="font-semibold text-purple-600 hover:text-purple-700">
          Sign in
        </button>
      </div>
    </form>
  );
}

export { LoginForm, CreateAccountForm };
