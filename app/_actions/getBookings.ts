"use server"

import { endOfDay, startOfDay } from "date-fns"
import { db } from "../_lib/prisma"

interface GetBookingsProps {
    serviceId: stringtring
    date: Date
}

export const getBookings = ({date}: GetBookingsProps) => {
    return db.booking.findMany({
        where:{
            date: {
                lte: endOfDay(date),
                gte: startOfDay(date),
            }
        }
    })
} 