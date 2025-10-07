export default function GridSection({ children }) {
  return (
    <section className="grid md:grid-cols-3 gap-[3px] max-w-[992px] mx-auto">
      {children}
    </section>
  );
}
