import Image from "next/image";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-mode";
import { FloatingDockDemo } from "@/components/float-dock";

export default function Home() {
  return (
    <>
      <div className="m-4 flex gap-4">
        <h1 className="flex justify-items-center items-center">Hello world</h1>
        <div className="flex justify-items-center items-center">
          <ModeToggle />
        </div>
      </div>

      <Button className="ml-4">Click Here</Button>
      <FloatingDockDemo />
    </>
  );
}
