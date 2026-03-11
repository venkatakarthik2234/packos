export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        margin: "10px 0"
      }}
    >
      {children}
    </div>
  );
}
