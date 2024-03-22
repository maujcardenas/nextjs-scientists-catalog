import "./globals.css";

export const metadata = {
  title: "Scientist Catalog",
  description: "Mini Bios of Prominent Scientists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
