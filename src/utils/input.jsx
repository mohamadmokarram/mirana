export default function Input({
  type,
  id = "",
  name,
  title,
  classes,
  required,
  textArea,
  ...props
}) {
  return (
    <div className={`flex flex-col my-6 px-6 md:mx-0 ${classes}`}>
      <label htmlFor={id} className="text-[13px] mb-1">
        {title}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      {!textArea && (
        <input
          type={type}
          name={name}
          id={id}
          className="py-4 bg-gray-100 border-b border-gray-400 px-2"
          {...props}
        />
      )}
      {textArea && (
        <textarea
          className="py-4 bg-gray-100 border-b border-gray-400 px-2"
          name={name}
          id={id}
          {...props}></textarea>
      )}
    </div>
  );
}
