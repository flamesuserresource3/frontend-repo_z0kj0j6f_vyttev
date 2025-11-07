import { ArrowRight } from 'lucide-react';

function GradientButton({ children, onClick, type = 'button', full }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-3 font-semibold text-white shadow-lg shadow-pink-200/40 transition hover:opacity-95 active:scale-[0.99] ${full ? 'w-full' : ''}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export default GradientButton;
