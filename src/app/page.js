import LayoutWrapper from "@/layout/LayoutWrapper";
import Link from 'next/link';

export default function Inicio() {
  return (
    <LayoutWrapper layout="cliente">
      <h2>inicio</h2>
      <Link href="/login">
        ir a dashboard
      </Link>
    </LayoutWrapper>
  );
}
