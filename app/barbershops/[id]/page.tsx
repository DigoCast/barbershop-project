import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  if(!barbershop){
    return notFound()
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />
        <Button
          size="icon"
          className="absolute left-4 top-4"
          variant="outline"
          asChild
        >
          <Link href={"/"}>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          size="icon"
          className="absolute right-4 top-4"
          variant="outline"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="p-5 border-b border-solid">
        <h1 className="text-xl font-bold mb-3">{barbershop?.name}</h1>
        <div className="flex items-center gap-2 mb-2">
            <MapPinIcon className="text-primary" size={18}/>
            <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
            <StarIcon className="text-primary fill-primary" size={18}/>
            <p className="text-sm">5,0 (1200 avaliações)</p>
        </div>
      </div>

      <div className="space-y-2 p-5 border-b border-solid">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre Nós</h2>
        <p className="text-sm text-justify">{barbershop?.description}</p>
      </div>
    </div>
  )
}

export default BarbershopPage
