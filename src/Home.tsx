export function Home() {
  return (
    <main className="page">
      <h1>Welcome to the Store</h1>
      <figure>
        <img
          src={require("./assets/store.jpg")}
          alt="A large old storefront"
          width="800"
        />
        <figcaption>Anand is Working !</figcaption>
      </figure>
    </main>
  );
}
