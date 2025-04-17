export const metadata = {
  title: "nex and nest",
  description: "this is for learning",
};
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body lang="en">{children}</body>
    </html>
  );
}
