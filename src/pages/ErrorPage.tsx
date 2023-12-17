import { useNavigate } from "react-router";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-secondary-color">
      <div className="flex h-[300px] items-center text-font-secondary-color">
        <div className="relative mb-[-25px] text-center font-semibold">
          <div className="absolute left-[44%] top-[38%] h-[5px] w-[5px] animate-secondBullet rounded-full bg-black"></div>
          <div className="absolute left-[36%] top-[24%] h-[5px] w-[5px] animate-secondBullet rounded-full bg-black"></div>
          <div className="absolute left-[54%] top-[18%] h-[5px] w-[5px] animate-firstBullet rounded-full bg-black"></div>
          <div className="absolute left-[67%] top-[36%] h-[5px] w-[5px] animate-firstBullet rounded-full bg-black"></div>
          <p className="text-8xl">404</p>
          <p className="mb-2 text-3xl">Страница не существует</p>
          <button
            className="hover:text-font-primary-color"
            onClick={() => {
              navigate("/");
            }}
          >
            Вернуться на главную
          </button>
        </div>
        <img className="h-full" src={`boys.gif`} />
      </div>
    </div>
  );
};

export default ErrorPage;
