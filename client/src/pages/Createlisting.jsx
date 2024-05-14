const CreateListing = () => {
  return (
    <main>
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="p-3 max-w-4xl mx-auto bg-slate-500 shadow-lg rounded-lg">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4 h-32"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap mb-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="sale" className="w-5 h-5" />
              <span className="text-sm">Sell</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rent" className="w-5 h-5" />
              <span className="text-sm">Rent</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="parking" className="w-5 h-5" />
              <span className="text-sm">Parking spot</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="furnished" className="w-5 h-5" />
              <span className="text-sm">Furnished</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="offer" className="w-5 h-5" />
              <span className="text-sm">Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 ">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p className="text-sm">Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p className="text-sm">Bath</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularprice"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p className="text-sm">Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="discountedprice"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p className="text-sm">Discounted price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4 p-3  shadow-lg rounded-lg">
          <p className="font-semibold">
            Images
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-1 items-center">
            <input
              className="p-3 flex-1 border border-gray-300 rounded-lg"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="px-4 py-3 text-white bg-green-700 rounded-lg uppercase hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 disabled:opacity-50">
              Upload
            </button>
          </div>
          <button className="py-3 w-full bg-slate-700 text-white rounded-lg uppercase hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50 disabled:opacity-50">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
