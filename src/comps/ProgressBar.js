import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(`PROGRESS: ${progress}\nURL: ${url}`);

  useEffect(() => {});

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
