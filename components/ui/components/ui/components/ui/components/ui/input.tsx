export default function Input(props: any) {
  return (
    <input
      {...props}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        width: "100%"
      }}
    />
  );
}
