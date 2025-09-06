type ChipProps = {
  text: string;
  className?: string;
};

export const Chip = ({ text, className }: ChipProps) => (
  <div
    className={`p-2 rounded-full max-w-fit text-white text-small min-w-10 text-center ${className}`}
  >
    {text}
  </div>
);
