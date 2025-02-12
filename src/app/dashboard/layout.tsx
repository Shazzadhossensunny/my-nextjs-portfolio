import Sidebar from "@/components/shared/Sidebar";
import { getUserProfile } from "@/components/shared/UserProfile";

export default async function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userProfile = await getUserProfile();
  return (
    <div>
      <Sidebar userProfile={userProfile}>{children}</Sidebar>
    </div>
  );
}
