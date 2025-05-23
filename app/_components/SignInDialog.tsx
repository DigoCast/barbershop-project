import React from "react"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Button } from "./ui/button"
import Image from "next/image"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça seu login na plataforma!</DialogTitle>
        <DialogDescription>
          Conecte-se utilizando sua conta do Google.
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image alt="Google Login" src="/google.svg" width={18} height={18} />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
