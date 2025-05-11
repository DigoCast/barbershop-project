import { Input } from "./_components/ui/input"
import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/BarbershopItem"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Diego!</h2>
        <p>Sábado, 10 de maio.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            fill
            src="/banner-home.png"
            className="h-auto w-auto rounded-xl object-cover"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-[#221C3D] p-[6px] text-primary">
                Confirmado
              </Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png" />
                </Avatar>
                <p className="text-sm">Barber Diego</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Maio</p>
              <p className="text-2xl">10</p>
              <p className="text-sm">20:36</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
