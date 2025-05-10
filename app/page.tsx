import { Input } from "./_components/ui/input"
import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Diego!</h2>
        <p>sabado, 10 de maio.</p>

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
      </div>
    </div>
  )
}

export default Home
