import { InputContainer } from "./style";

export function Input({ placeholder, labelName, type }) {
  return (
    <label>
      {labelName}
      <InputContainer placeholder={placeholder} type={type} />
    </label>
  );
}
