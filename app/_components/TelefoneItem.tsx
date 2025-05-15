"use client";

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner";

interface TelefoneProps {
  telefone: string
}
const TelefoneItem = ({ telefone }: TelefoneProps) => {
  const handleCopyFoneClick = (telefone: string) => {
    navigator.clipboard.writeText(telefone)
    toast.success("Telefone copiado com sucesso")
  }

  return (
    <div className="flex justify-between gap-2" key={telefone}>
      <div className="flex items-center">
        <SmartphoneIcon />
        <p className="text-sm">{telefone}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyFoneClick(telefone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default TelefoneItem
