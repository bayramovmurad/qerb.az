interface buttonProps {
    text: string;
    onClick?: () => void;
    ariaLabel: string;

}

const Button = ({text, onClick, ariaLabel}: buttonProps) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className="bg-darkBlue py-1 px-3 rounded-lg text-light hover:bg-darkBlue/80 duration-500">
            {text}
        </button>
    )
}

export default Button