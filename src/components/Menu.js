import { menuData } from "../data/menuData";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu">
      {menuData.map((item) => (
        <div className="item flex flex-col gap-2.5 mb-5" key={item.id}>
          <span className="title uppercase text-xs text-mainco">
            {item.title}
          </span>
          {item.listItems.map((listItem) => (
            <Link
              href={listItem.url}
              key={listItem.id}
              className="listItem flex gap-2.5 items-center p-1 hover:bg-[#143E33] rounded"
            >
              <img src={listItem.icon} alt="" />
              <span>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
