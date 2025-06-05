export default function InputLogin({ name, placeholder, value, type }) {
  return (
    <input
      className="border-2 border-white rounded-lg w-full placeholder-gray-400 px-2 font-bold h-[36px]"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
}
