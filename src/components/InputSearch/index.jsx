import { Input, LabelContainer } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

export function InputSearch({ placeholder }) {
  return (
    <div>
      <LabelContainer>
        <AiOutlineSearch />
        <Input placeholder={placeholder} />
      </LabelContainer>
    </div>
  );
}
