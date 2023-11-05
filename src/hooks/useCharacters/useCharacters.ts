import { useCallback } from "react";
import { DbResponseStructure } from "../../types";
import axios from "axios";
import { useAppSelector } from "../../store";

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
  const {
    characters: {
      info: { next },
    },
  } = useAppSelector((state) => state);

  const loadMoreCharacters =
    useCallback(async (): Promise<DbResponseStructure> => {
      try {
        const { data: DbResponseStructure } =
          await axios.get<DbResponseStructure>(next);

        return DbResponseStructure;
      } catch (error) {
        throw new Error("Can't get more characters");
      }
    }, [next]);
  return { getCharacters, loadMoreCharacters };
};

export default useCharacters;
