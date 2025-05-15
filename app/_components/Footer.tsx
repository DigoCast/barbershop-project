import React from "react"
import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-none">
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © Copyright <span className="font-bold">Diego Castilho</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
