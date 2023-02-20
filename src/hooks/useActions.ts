import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as EducationalBlockActionCreators from "../store/action-creators/educationalBlock";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(EducationalBlockActionCreators, dispatch);
};
