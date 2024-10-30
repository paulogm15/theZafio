"use client";

import Link from "next/link";
// import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();
  // console.log(router.route);

  return (
    <div>
      <h1>App The Zafio</h1>
      <Link href="/login">Entrar</Link>
      <p></p>
      <Link href="/signup">Cadastre-se</Link>
    </div>
  );
}
