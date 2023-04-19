import Image from "next/image";

import { Sidebar } from "@/components/Sidebar";
import { Gauge } from "@/components/Gauge";

import * as THREE from "three";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-stretch justify-between p-24">
        <Sidebar />
        <div>
        </div>
        <Gauge />
    </main>
  )
}
