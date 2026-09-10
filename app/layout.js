export const metadata = {
  title: "My Next App",
  description: "Simple Next.js Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
