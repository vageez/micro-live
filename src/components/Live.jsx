import React, { useEffect } from "react";
import useAppStore from "host/StateService";

export default () => {
  const setMicro = useAppStore((state) => state.setMicro);

  useEffect(() => {
    setMicro("live");
  }, []);

  return (
    <div style={{ border: "1px solid grey", margin: "2px" }}>
      <h1>Live Page App</h1>
    </div>
  );
  //
};
