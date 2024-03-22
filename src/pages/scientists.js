import DefaultLayout from "../layouts/defaultLayout";
import "./tailwind.css";

import { scientists } from "@/data/data";

function Scientists() {
  return (
    <DefaultLayout>
      <div className="scientistList grid grid-col-1 xl:grid-cols-2 gap-3">
        {scientists.map((item, index) => (
          <div className="block bg-softbgc p-5 rounded-md" key={index}>
            <h2 className="title uppercase text-md pb-3"> {item.name} </h2>
            <div className="picture flex gap-2.5">
              <img
                className="w-36 max-h-96"
                src={item.image_url}
                alt={item.name}
              />
              <div>
                <span className="font-bold pb-5">Contributions:</span>
                <p className="text-sm">{item.contributions}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 pt-5 justify-end">
              <span className="uppercase text-sm">Born:</span>
              <p>{item.birth_date}</p>
            </div>
            <div className="flex items-center gap-5 justify-end">
              <span className="uppercase text-sm">Died:</span>
              <p>{item.death_date}</p>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Scientists;
