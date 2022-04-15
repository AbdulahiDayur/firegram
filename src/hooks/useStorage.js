import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // reference
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL(); // grab uploaded file
        setUrl(url);
      },
      [file]
    );
  });

  return { progress, url, error };
}

export default useStorage;

// snapshot object of the upload at the moment in time
// progress for percentage upload time
