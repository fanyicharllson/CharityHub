import "@/styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "CharityHub",
  description:
    "A platform for donating, sharing, and finding charitable causes.",
};

const Rootlayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
         <Header/>
          {children}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
