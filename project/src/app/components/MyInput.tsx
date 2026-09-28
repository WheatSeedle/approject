export default function MyInput({
  type = "text",
  placeholder,
}: {
  type?: string;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    />
  );
}