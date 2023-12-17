import { useNavigate } from "react-router";

const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-md:grow">
      <button
        className="flex items-center gap-x-[3px]"
        onClick={() => navigate("/")}
      >
        <span className="relative flex h-6 w-6 translate-x-2 rounded-full bg-yellow">
          <span className="absolute left-[55%] top-[calc(50%-7px)] h-[14px] w-[14px] rotate-[135deg] rounded-[500px_0_0_0] bg-primary-color"></span>
        </span>
        <span className="z-10 flex h-4 w-4 items-center justify-center rounded-full bg-font-primary-color text-xs font-bold text-primary-color">
          O
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-font-primary-color text-xs font-bold text-primary-color">
          T
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-font-primary-color text-xs font-bold text-primary-color">
          I
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-font-primary-color text-xs font-bold text-primary-color">
          U
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-font-primary-color text-xs font-bold text-primary-color">
          M
        </span>
      </button>
    </div>
  );
};

export default Logo;
