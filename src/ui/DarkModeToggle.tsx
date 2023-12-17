import { useEffect, useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";

const root = document.getElementById("root");

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const mode = window.localStorage.getItem("mode");

  useEffect(() => {
    if (mode === "light") {
      root?.classList.add("light");
    } else {
      root?.classList.remove("light");
    }
  }, [mode]);

  function changeState() {
    setIsDark(!isDark);
  }

  function handleDarkMode() {
    if (!root?.classList.contains("light")) {
      window.localStorage.setItem("mode", "light");
    } else {
      window.localStorage.removeItem("mode");
    }
    changeState();
    root?.classList.toggle("light");
  }

  return (
    <DarkModeSwitch
      className="py-[3px]"
      onChange={handleDarkMode}
      checked={mode === "light"}
      moonColor="#000"
      sunColor="#fff"
    />
  );
};

export default DarkModeToggle;
