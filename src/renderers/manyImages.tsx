import "./manyImages.scss";

export default function TwoHeaders({ children }: { children: JSX.Element[] }) {
  const itemSize =
    children.length >= 2 && children.length <= 4
      ? "50%"
      : children.length >= 5 && children.length <= 7
      ? "33.3%"
      : children.length > 7
      ? "25%"
      : 0;

  return (
    <>
      {children.map((item, index) => (
        <div key={index} className="image" style={{ flex: `${itemSize}` }}>
          {item}
        </div>
      ))}
    </>
  );
}