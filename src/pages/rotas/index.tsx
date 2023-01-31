import Link from "next/link";
import router, { useRouter } from "next/router";

export default function rotas() {
  function navegacaoSimples(url: string) {
    router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 123,
        nome: "Ana",
      },
    });
  }

  return (
    <div>
      <h1> Rotas index </h1>
      <Link href={"rotas/outrasRotas"}>
        <button>outrasRotas</button>
      </Link>

      <Link href={"rotas/params?nome=Mozart&id=555"}>
        <button>Params</button>
      </Link>
      <div>
        <button onClick={() => router.push("/rotas/123/buscar")}>
          {" "}
          Buscar{" "}
        </button>

        <button onClick={() => navegacaoSimples("/rotas/params?nome=Daniel")}>
          {" "}
          Daniel{" "}
        </button>

        <button onClick={navegacaoComParams}> Ana </button>
      </div>
    </div>
  );
}
