import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";


export const metadata = {
  title: "CharityHub",
  description:
    "A platform for donating, sharing, and finding charitable causes.",
};

const Rootlayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
         <Header/>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Rootlayout;
