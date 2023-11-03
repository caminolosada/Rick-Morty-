import { useCallback } from "react";
import { DbResponseStructure } from "../../types";
import axios from "axios";

export const apiUrl = import.meta.env.VITE_API_URL;

const useCharacters = () => {
  const getCharacters = useCallback(async (): Promise<DbResponseStructure> => {
    const { data: DbResponseStructure } = await axios.get<DbResponseStructure>(
      `${apiUrl}/character`
    );

    return DbResponseStructure;
  }, []);
  return { getCharacters };
};

export default useCharacters;
