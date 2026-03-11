export const metadata = {
  title: "First Ride Skating Academy",
  description: "Professional skating training"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{fontFamily:"Arial"}}>
        {children}
      </body>
    </html>
  );
}
