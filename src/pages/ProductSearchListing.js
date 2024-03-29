import defaultImg from "../assets/default.jpg";
import { Voting } from "../components/Voting";
import Sort from "../components/sort";
import listItems from "../components/brand";
import Sidebar from "../components/sidebar";

const ProductSearchListing = () => {
  const render = listItems.map(
    ({ brandname, model, specs, img, Price }, index) => (
      <Voting
        key={index}
        brandname={brandname}
        model={model}
        specs={specs ? specs.pr : "N/A"}
        battery={specs ? specs.battery : "N/A"}
        ram={specs ? specs.ram : "N/A"}
        image={img ? img : defaultImg}
        PriceOffer={Price ? Price.Offer : "--,---"}
        PriceOriginal={Price ? Price.Original : "--,---"}
      />
    )
  );
  return (
    <div className="text-gray-dark">
      <div className="ml-2  mr-2">
        <Sort />
      </div>
      <div className="m-3">
        <div className="text-4xl pb-4 w-2/6">
          Find new <span className="text-gray italic">"smartphones"</span>....
          <h6 className="italic text-gray text-lg pb-2">4,006 results found</h6>
        </div>
        <div className="flex-row flex divide-x divide-gray-light">
          <Sidebar />
          <div className=" divide-y w-5/6 divide-gray-light pl-2 md:w-full text-gray-dark ">
            {render}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchListing;
