import React from "react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarImage } from "./ui/avatar"

const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
