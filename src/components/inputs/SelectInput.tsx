// SelectInput.tsx
interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

const SelectInput = ({ label, name, value, onChange, options }: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
