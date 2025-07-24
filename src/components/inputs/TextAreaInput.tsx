interface Props {
  label: string;
  name: string;
  value: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
