export default function Main({ title, children, titleColor }) {
  return (
    <main className="py-20 font-poppins-regular border-b border-slate-200">
      <div className="container">
        <h2 className={`text-center text-4xl md:text-6xl ${titleColor}`}>
          {title}
        </h2>
        {children}
      </div>
    </main>
  );
}
