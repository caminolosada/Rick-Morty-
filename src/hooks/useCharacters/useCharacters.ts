import { useCallback } from "react";
import { DbResponseStructure } from "../../types";
import axios from "axios";

export const apiUrl = import.meta.env.VITE_API_URL;

const useCharacters = () => {
  const getCharacters = useCallback(async (): Promise<DbResponseStructure> => {
    try {
      const { data: DbResponseStructure } =
        await axios.get<DbResponseStructure>(`${apiUrl}/character`);

      return DbResponseStructure;
    } catch (error) {
      throw new Error("Can't get characters");
    }
  }, []);
  return { getCharacters };
};

export default useCharacters;
