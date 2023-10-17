import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.matchMedia("only screen and (max-width: 912px)").matches,
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Chiamare la funzione quando il componente viene montato

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
