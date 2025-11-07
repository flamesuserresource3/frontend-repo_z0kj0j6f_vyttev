import { Home } from 'lucide-react';

function HomePlaceholder({ onSignOut }) {
  return (
    <div className="min-h-screen w-full bg-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/40 to-yellow-100/40" />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md p-8 shadow-xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/10 text-purple-600">
            <Home className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">You're in 🎉</h1>
          <p className="mt-2 text-gray-600">This is a placeholder home screen. Replace it with your app's main content.</p>

          <button onClick={onSignOut} className="mt-6 inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePlaceholder;
