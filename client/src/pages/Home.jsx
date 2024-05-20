import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover a wide range of properties tailored to your needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Search Properties
              </h2>

              <p className="text-gray-600">
                Explore our listings to find the perfect property for you.
              </p>
              <Link to="/search">
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sell or Buy Your Home
              </h2>
              <p className="text-gray-600">
                List your property with us and reach potential buyers.
              </p>
              <Link to="/create-listing">
                {" "}
                <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to Our Real Estate Website
          </h2>
          <p className="text-lg mb-4">
            Owning a home is a keystone of wealth both financial affluence and
            emotional security
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="mb-2">XYZ Main Street, Chennai</p>
              <p className="mb-2">Email: haven@example.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex justify-center">
                <a href="#" className="text-blue-400 hover:text-blue-500 mr-4">
                  Twitter
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500 mr-4">
                  Facebook
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
