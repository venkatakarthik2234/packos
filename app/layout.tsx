export const metadata = {
  title: "First Ride Skating Academy",
  description: "Professional skating academy"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
