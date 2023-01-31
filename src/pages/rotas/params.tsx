import { useRouter } from "next/router";
import Link from "next/link";

export default function Params() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  console.log(router);

  // exemplo de url : 'http://localhost:3000/rotas/params?nome=Mozart&id=777'

  return (
    <div>
      <h1>
        Rotas Params: id: {id}, nome: {nome}{" "}
      </h1>

      <Link href={"/rotas"}>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
