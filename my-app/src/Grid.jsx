export function Grid({ items }) {
  return (
    <div className="grid">
      {items.map((e) => (
        <div className="card" key={e.ref}>
          <h2>{e.title}</h2>
          <p>{e.ref}</p>
        </div>
      ))}
    </div>
  );
}