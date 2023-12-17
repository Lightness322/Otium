const WelcomeTitles = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1">
      <div className="text-center text-4xl font-bold max-lg:text-2xl max-[563px]:text-xl">
        <span>Добро пожаловать на </span>
        <span className="text-[2.3rem] tracking-widest underline max-lg:text-3xl max-[563px]:text-2xl">
          OTIUM
        </span>
      </div>
      <div className="w-[90%] text-center text-xl font-semibold text-font-secondary-color max-lg:w-full max-lg:text-lg max-[563px]:text-base">
        Находите интересующие вас фильмы, сериалы, игры и добавляйте их в личный
        список для просмотра и игры в будущем
      </div>
    </div>
  );
};

export default WelcomeTitles;
