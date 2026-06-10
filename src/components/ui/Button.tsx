export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      glass
      inline-flex
      rounded-full
      px-8
      py-4
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      {children}
    </div>
  );
}
