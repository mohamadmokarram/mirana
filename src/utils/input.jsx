export default function Input({ type, id, name, title, classes, ...props }) {
  return (
    <div className={`flex flex-col my-6 px-6 pd:mx-0 ${classes}`}>
      <label htmlFor={id} className="text-[13px] mb-1">
        {title}
        <span className="text-red-600 ml-1">*</span>
      </label>
      <input
        type={type}
        name={name}
        id
        className="py-4 bg-gray-100 border-b border-gray-400 px-2"
        {...props}
      />
    </div>
  );
}
