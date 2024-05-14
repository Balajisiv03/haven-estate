const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-3 border-b-2 md:b-right-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:{" "}
            </label>
            <input
              type="text"
              id="searchterm"
              placeholder="Search"
              className="border rounded-lg p-3 w-full "
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
              {" "}
              <input type="checkbox" id="all" className="w-5" />
              <span>Rent & sale</span>
            </div>
            <div className="flex gap-2">
              {" "}
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              {" "}
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              {" "}
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:{" "}
            </label>
            <input
              type="text"
              id="searchterm"
              placeholder="Search"
              className="border rounded-lg p-3 w-full "
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
              {" "}
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              {" "}
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select className="border rounded-lg p-3" id="sort_order">
              <option>Price high to low</option>
              <option>Price low to high</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-80">
            Search
          </button>
        </form>
      </div>

      <div className="">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing results
        </h1>
      </div>
    </div>
  );
};

export default Search;
