import lalezarFont from "@/constants/localFonts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "فروش کفش",
  description: "فروش کفش",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${lalezarFont.variable} font-sans`}
      >
        <div className="container mx-auto">
          <main className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
