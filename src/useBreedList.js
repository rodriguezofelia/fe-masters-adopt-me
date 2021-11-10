import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedlist, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    // if no animal return empty list
    if (!animal) {
      setBreedList([]);
      // if i have a copy of it in local cache then serve that
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
      // otherwise request breedlist from api
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedlist, status];
}
