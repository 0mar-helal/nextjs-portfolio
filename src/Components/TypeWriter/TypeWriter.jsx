import TypewriterComponent from "typewriter-effect";
import "./typewriter.css";
import { useEffect, useState } from "react";
const TypeWriter = ({ roles }) => {
  const [distructRoles, setDistructRoles] = useState(null);
  useEffect(() => {
    setDistructRoles(roles?.map((role) => role.text));
  }, [roles]);
  return (
    <TypewriterComponent
      options={{
        strings: distructRoles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeWriter;
