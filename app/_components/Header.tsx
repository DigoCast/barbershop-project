import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"
import React from "react"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./SidebarSheet"
import Link from "next/link"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="Logo" src="/logo-barber.png" height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
