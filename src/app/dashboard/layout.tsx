import Sidebar from "@/components/shared/Sidebar";

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
