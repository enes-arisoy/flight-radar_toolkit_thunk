import { MdOutlineQuestionMark } from "react-icons/md";

const nullCheck = (value) => {
  return value || <MdOutlineQuestionMark />;
};

export default nullCheck;