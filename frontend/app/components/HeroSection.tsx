// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="bg-[#2E2E2E] text-white py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Text */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-2">Predaj bytov</h1>
        <p className="text-lg text-gray-300">MODERNÉ BÝVANIE V CENTRE MESTA</p>
      </div>

      {/* Image */}
      <div className="mt-6 md:mt-0 md:ml-10 rounded-xl overflow-hidden w-full md:w-[400px]">
        <img
          src="/hero-building.jpg"
          alt="Budova"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
