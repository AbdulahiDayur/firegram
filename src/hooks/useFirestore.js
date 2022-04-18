import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub(); // unsubscribs from function when we no longer use it.
  }, [collection]);

  return { docs };
}

// snapshot obj represents snapshot in time of the database collection
// snap contains all docs info

export default useFirestore;
