import Image from "next/image";
import pre from "../../Images/pre.svg";
import "./preloader.css";
const PreLoader = () => {
  return (
    <div className="preloader">
      <Image src={pre} alt="" width={100} height={100} />
    </div>
  );
};

export default PreLoader;
