import Spline from '@splinetool/react-spline';

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient blobs overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-400/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-white/60 shadow-xl rounded-2xl p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
