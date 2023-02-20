import axios from "axios";
import { Dispatch } from "redux";
import {
  EducationalBlockAction,
  EducationalBlocksActionTypes,
} from "../../types/types";

export const fetchEducationalBlocks = () => {
  return async (dispatch: Dispatch<EducationalBlockAction>) => {
    try {
      dispatch({ type: EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS });
      const response = await axios.get(
        "http://localhost:5000/educational-blocks"
      );
      dispatch({
        type: EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS_ERROR,
        payload: "Ошибка!",
      });
    }
  };
};
