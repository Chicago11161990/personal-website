const Page = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header Section */}
      <header className="relative text-center py-16 bg-gradient-to-r from-red-700 via-black to-yellow-600 text-white overflow-hidden">
        {/* Decorative Stars */}
        <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg')] bg-repeat bg-center bg-contain"></div>
        </div>

        <h1 className="relative text-5xl font-extrabold tracking-wide drop-shadow-lg z-10">
          Tight on Clothing
        </h1>
        <p className="relative text-xl mt-4 text-yellow-300 z-10 font-medium">
          Fashion that fits your style — Founded by Herbert Rice
        </p>
      </header>

      {/* About Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <h2 className="text-3xl font-semibold text-red-500 mb-6">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Tight on Clothing blends modern design with personalized insignias to create truly unique fashion.
          Founded by <span className="text-yellow-400 font-semibold">Herbert Rice</span>, our brand stands for creativity, boldness, and individuality.
          Each piece is designed to make a statement while offering comfort and style that fits every occasion.
        </p>
      </section>

      {/* Founder Section */}
      <section className="bg-gradient-to-r from-black via-red-900 to-black py-16 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Meet the Founder</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed">
          Herbert Rice is a visionary designer with a passion for pushing fashion boundaries. 
          His signature style blends bold color palettes and symbolic insignias, creating wearable art that tells a story. 
          Every design under Tight on Clothing reflects Herbert’s belief that fashion should be fearless and personal.
        </p>
      </section>

      {/* Collection Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-t from-black via-gray-800 to-black">
        <h2 className="text-3xl font-semibold text-red-500 mb-6">Our Collection</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-6 leading-relaxed">
          Explore our latest designs—each featuring unique insignias, modern fits, and custom craftsmanship. 
          Whether you’re looking for standout streetwear or sleek modern fashion, Tight on Clothing has something made just for you.
        </p>
        <a
          href="/shop"
          className="text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition underline decoration-red-600"
        >
          Browse the Collection
        </a>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-b from-black via-red-800 to-black">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Get in Touch</h2>
        <p className="text-lg mb-4 text-gray-300">
          Have questions, want a custom insignia, or a personal design collaboration? Reach out today!
        </p>
        <a
          href="mailto:Tightonclothing@gmail.com"
          className="text-xl text-red-500 hover:text-yellow-400 font-medium transition"
        >
          Tightonclothing@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500 border-t border-red-900">
        <p>© 2025 Tight on Clothing | Designed by Herbert Rice</p>
        <p className="text-sm text-gray-600">Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Page;
