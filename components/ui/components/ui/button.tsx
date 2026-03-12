export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: "black",
        color: "white",
        borderRadius: "6px",
        border: "none"
      }}
    >
      {children}
    </button>
  );
}
