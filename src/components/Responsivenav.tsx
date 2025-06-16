"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

const Responsivenav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    setOpen(false);       // Close the sheet
    router.push(path);    // Navigate to the page
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <button>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[250px] sm:w-[300px]">
        <div className="flex flex-col gap-4 mt-8">
          <button onClick={() => handleNavigate("/")}>HOME</button>
          <button onClick={() => handleNavigate("/shop")}>SHOP</button>
          <button onClick={() => handleNavigate("/wishlist")}>WISHLIST</button>
          <button onClick={() => handleNavigate("/cart")}>CART</button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Responsivenav;
