import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Uroš Tomić",
  description:
    "Frontend developer portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
