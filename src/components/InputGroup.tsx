interface TInputGroup {
  inputId?: string;
  lblContent?: string;
  inputType?: string;
  inputName?: string;
  inputComplete?: string;
  placeholder?: string;
  onChange?:any
}

export default function InputGroup({
  inputId,
  lblContent,
  inputType,
  inputName,
  inputComplete,
  placeholder,
  onChange,
}: TInputGroup) {
  return (
    <div className="mt-2">
      <label htmlFor={inputId} className="text-blue-500 font-medium">
        {lblContent}
      </label>
      <input
        id={inputId}
        name={inputName}
        type={inputType}
        autoComplete={inputComplete}
        required
        className="input full"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
