import Link from "next/link";
import { useRouter } from "next/router";
function ClientsPage() {
  const router = useRouter();
  console.log(router.query);
  const clients = [
    {
      id: "max",
      name: "Max",
    },
    {
      id: "menu",
      name: "Menu",
    },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          // href={`/clients/${client.id}`}
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
