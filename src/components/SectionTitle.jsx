export default function SectionTitle({ content }) {
  return (
    <div className="sm:w-11/12 py-5 px-2">
      <div className="title_container py-2">
        <h1 className="title font-bold text-center text-2xl sm:text-3xl">
          {content}
        </h1>
      </div>
    </div>
  );
}
