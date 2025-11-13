const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-12 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to Tight on Clothing</h1>
        <p className="text-xl mt-4">Fashion that fits your style. Founder & CEO: Herbert Rice</p>
      </header>

      {/* Bio Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Tight on Clothing is a brand that blends innovative designs with bold personal insignias. Founded by Herbert Rice, we create high-quality, customized apparel that speaks to individuality and style.
          Whether you're looking for a classic look or a statement piece, our designs are made to fit perfectly and stand out.
        </p>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Meet the Founder</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Herbert Rice, the visionary behind Tight on Clothing, is passionate about fashion and creativity. His designs blend unique patterns with personalized insignias, offering a one-of-a-kind experience for each customer.
            Herbert believes in pushing the boundaries of traditional fashion, and his pieces reflect his bold approach to personal expression.
          </p>
        </div>
      </section>

      {/* Clothing Collection Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Collection</h2>
        <p className="text-lg mb-4">Discover our latest collection, featuring exclusive designs and custom insignias curated by Herbert Rice himself. From streetwear to premium fashion, we’ve got something for every style.</p>
        <a
          href="/shop"
          className="text-xl text-indigo-600 hover:underline"
        >
          Browse the Collection
        </a>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Have questions or want to collaborate? Feel free to reach out!</p>
        <a
          href="mailto:herbertrice@tightonclothing.com"
          className="text-xl text-indigo-600 hover:underline"
        >
          herbertrice@tightonclothing.com
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p>&copy; 2025 Tight on Clothing | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Page;
