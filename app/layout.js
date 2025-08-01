import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const inter= Inter({subsets : ["latin"]})

export const metadata = {
  title: "PathCraftAI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
     <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            <main className="min-h-screen">
              {children}
            </main>
             <Toaster richColors />
            <Footer/>
            
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
