import {
  EducationalBlockAction,
  EducationalBlocksActionTypes,
  EducationalBlockState,
} from "../../types/types";

const initialState: EducationalBlockState = {
  educationalBlocks: [],
  loading: false,
  error: null,
};

export const educationalBlockReducer = (
  state = initialState,
  action: EducationalBlockAction
): EducationalBlockState => {
  switch (action.type) {
    case EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS:
      return { loading: true, error: null, educationalBlocks: [] };
    case EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS_SUCCESS:
      return { loading: false, error: null, educationalBlocks: action.payload };
    case EducationalBlocksActionTypes.FETCH_EDUCATIONAL_BLOCKS_ERROR:
      return { loading: false, error: action.payload, educationalBlocks: [] };
    default:
      return state;
  }
};
