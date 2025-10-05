export default function Feature({ icon, title, desc }) {
  const IconComponent = icon;
  return (
    <div className="bg-slate-100 p-6">
      <IconComponent className="text-5xl" />
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-8 text-[14px] h-fit">{desc}</p>
    </div>
  );
}
