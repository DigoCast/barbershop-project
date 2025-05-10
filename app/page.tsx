import { Input } from "./_components/ui/input"
import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
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
            className="object-cover rounded-xl h-auto w-auto"
          />
        </div>

        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">agendamentos</h2>
        <Card className="">
            <CardContent className="flex justify-between p-0">
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit p-[6px] bg-[#221C3D] text-primary">Confirmado</Badge>
                <h3 className="">Corte de cabelo</h3>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png"/>
                  </Avatar>
                  <p>Barber Diego</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center px-5 border-l-2 border-solid">
                <p className="text-sm">Maio</p>
                <p className="text-2xl">10</p>
                <p className="text-sm">20:36</p>
              </div>

            </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
