interface ButtonProps {
  text: string;
  className?: string;
  onclick?: () => void;
}

const Button = ({
  text,
  className = 'btn-primary btn-md',
  onclick,
}: ButtonProps) => {
  return (
    <button className={'btn ' + className} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
