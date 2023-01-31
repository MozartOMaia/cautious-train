import Link from "next/link";

export default function outrasRotas() {
  return (
    <div>
      <h1> OUTRA ROTA </h1>
      <Link href={"/rotas"}>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
