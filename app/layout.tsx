export const metadata = {
  title: "First Ride Skating Academy",
  description: "Skating classes and training"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
