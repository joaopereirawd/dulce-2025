export default function Page() {
  return (
    <main className="flex flex-col ">
      <Section1 />
      <Section2 />
    </main>
  );
}

function Section1() {
  return (
    <section className="h-screen w-full container mx-auto flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-blue-500">
      <h1>Index Page</h1>
    </section>
  );
}

function Section2() {
  return (
    <section className="h-screen w-full container mx-auto flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-pink-600">
      <h1>Index Page</h1>
    </section>
  );
}