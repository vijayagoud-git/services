export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Feature Boxes */}
      <div className="bg-white p-8 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">⚡ Fast Performance</h3>
        <p className="text-gray-600 mb-4">Smooth interactions and optimized layout.</p>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Learn More
        </button>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">🎨 Modern UI</h3>
        <p className="text-gray-600 mb-4">Clean & aesthetic Tailwind-based design.</p>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          View Demo
        </button>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">🧩 Easy Customization</h3>
        <p className="text-gray-600 mb-4">Built with reusable components.</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Customize Now
        </button>
      </div>

      <h6 className="px-4">HELLO VIJAY BRO HOW ARE YOU FROM AJAY</h6>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50 mt-6">
        <h1 className="text-2xl font-bold text-gray-800">ModelSite</h1>
        <div className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
          <a href="#models" className="text-gray-700 hover:text-blue-600">Models</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
      >
        <div>
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-4">
            Welcome to the Modern Model Homepage
          </h1>
          <p className="text-lg mb-6">
            A beautifully designed Tailwind CSS template for your website.
          </p>

          {/* ➤ Added BUTTON GROUP in HERO */}
          <div className="flex space-x-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200">
              Explore Models
            </button>

            <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-72 h-64 bg-white rounded-xl shadow-xl mt-10 md:mt-0"></div>
      </section>

      {/* Feature Section */}
      <section id="features" className="px-8 md:px-20 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Add buttons here later if needed */}
        </div>

        {/* ➤ EXTRA CTA BUTTONS */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 mx-2">
            Get Started
          </button>

          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 mx-2">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} ModelSite. All rights reserved.</p>
      </footer>
    </div>
  );
}
