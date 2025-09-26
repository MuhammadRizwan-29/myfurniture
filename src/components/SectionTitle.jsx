export default function SectionTitle({ content }) {
  return (
    <div className="w-11/12 py-5">
      <div className="title_container py-2">
        <h1 className="title font-bold text-center text-3xl">{content}</h1>
      </div>
    </div>
  );
}
