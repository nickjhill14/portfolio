type ChipProps = {
  text: string;
  className?: string;
};

// TODO: Add tests and stories
export const Chip = ({ text, className }: ChipProps) => (
  <div
    className={`p-2 rounded-full max-w-fit text-white text-small ${className}`}
  >
    {text}
  </div>
);
