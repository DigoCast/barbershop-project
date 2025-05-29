import Header from "./_components/Header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/BarbershopItem"
import quickSearchOptions from "./_constants/quickSearch"
import BookingItem from "./_components/BookingItem"
import SearchBar from "./_components/SearchBar"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./_data/getConfirmedBookings"

const Home = async () => {
  const session = await getServerSession(authOptions)

  const barbershops = await db.barbershop.findMany({})

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  const bookings = await getConfirmedBookings()

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name?.split(" ")[0] : "Bem Vindo"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd ", { locale: ptBR })}
          </span>{" "}
          de{" "}
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        <div className="mt-6">
          <SearchBar />
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            fill
            src="/banner-home.png"
            className="h-auto w-auto rounded-xl object-cover"
          />
        </div>

        {bookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {bookings.map((booking) => (
                <div
                  className={bookings.length > 1 ? "min-w-[80%]" : "min-w-full"}
                  key={booking.id}
                >
                  <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))} />
                </div>
              ))}
            </div>
          </>
        )}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
