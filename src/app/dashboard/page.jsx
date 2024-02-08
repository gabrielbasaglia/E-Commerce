import Magnetic from "./components/magnetic";

export default function HeroSection() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <h1>Welcome to the dashboard</h1>
      <Magnetic>
        <button className="w-24 h-24 rounded-full bg-blue-500 hover:bg-red-500 text-white duration-300 ease-out">
          Clique aqui
        </button>
      </Magnetic>
    </div>
  );
}
