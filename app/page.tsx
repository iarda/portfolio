'use client'
import dynamic from "next/dynamic";
const PortfolioLanding = dynamic(() => import("./components/PortfolioLanding"), { ssr: false });

export default function Page() {
  return <PortfolioLanding />;
}
