import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "create by paste prosmana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased transition duration-700 ease-in-out"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster
          toastOptions={{
            unstyled: true,
            classNames: {
              error: "bg-red-500 flex gap-5 p-4 rounded-md",
              success: "text-green-500 flex gap-5 p-4 rounded-md",
            },
          }}
        />
      </body>
    </html>
  );
}
