import Navbar from "@/components/shared/Navbar";

export default function commonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </main>
  );
}
