import LayoutWrapper from "@/layout/LayoutWrapper";
import { UserButton } from "@clerk/nextjs";

export default function dashboard() {
  return (
    <LayoutWrapper layout="dashboard">
      <h2>inicio de la dashboard</h2>
      <UserButton afterSignOutUrl="/login" />
    </LayoutWrapper>
  );
}
