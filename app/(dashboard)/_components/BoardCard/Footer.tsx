import { Star } from "lucide-react";

type Props = {
  title: string;
  disabled: boolean;
  isFavorite: boolean;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => Promise<void>;
};

function Footer({
  title,
  onClick,
  disabled,
  isFavorite,
  authorLabel,
  createdAtLabel,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();

    onClick();
  };

  return (
    <div className="p-3 relative bg-white">
      <p className="text-[13px] font-semibold truncate max-w-[calc(100%-20px)]">
        {title}
      </p>
      <p className="text-[11px] opacity-0 group-hover:opacity-100 transition-opacity truncate text-muted-foreground">
        {authorLabel},{createdAtLabel}
      </p>

      <button
        disabled={disabled}
        onClick={handleClick}
        className={`opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-muted-foreground hover:text-blue-600 ${
          disabled && "cursor-not-allowed opacity-75"
        }`}
      >
        <Star
          className={`h-4 w-4 ${isFavorite && "text-blue-600 fill-blue-600"}`}
        />
      </button>
    </div>
  );
}

export default Footer;
