import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"
import React from "react"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="Logo" src="/logo-barber.png" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
