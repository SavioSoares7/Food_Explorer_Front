import { InputContainer } from "./style";

export function Input({ placeholder, labelName, type, rest }) {
  return (
    <label>
      {labelName}
      <InputContainer placeholder={placeholder} type={type} {...rest} />
    </label>
  );
}
