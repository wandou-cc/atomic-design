interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg font-medium
        ${variant === 'primary' 
          ? 'bg-[#CCFF00] text-black hover:bg-[#B8E600]' 
          : 'bg-gray-800 text-white hover:bg-gray-700'}
        ${className}
      `}
    >
      {children}
    </button>
  )
} 