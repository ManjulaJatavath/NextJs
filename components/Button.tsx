type ButtonProps = {
    label: string;
    onClick: () => void;
  };
  
  const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
      <button
        className="px-4 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  
