export default function Home() {
  return (
    <main>
      <h1 className="py-20 text-2xl font-bold text-blue-600 text-center">
        Common Key Store and Use
      </h1>

      <p className="text-center text-2xl">SECRET KEY is: {process.env.SECRET}</p>
    </main>
  );
}
