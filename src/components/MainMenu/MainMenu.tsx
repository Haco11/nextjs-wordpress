import Link from "next/link";
import { FaHouseUser } from "react-icons/fa";
import { ButtonLink } from "../ButtonLink";
export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}: any) => {
  console.log(items);
  return (
    <div className="bg-slate-800 text-white px-5 h-16 sticky top-0 z-20 flex">
      <div className="py-4 pl-5 flex text-pink-600">
        <FaHouseUser size={30} />
      </div>
      <div className="flex flex-1 justify-end">
        {items?.map((item: any) => (
          <div
            key={item.id}
            className="hover:bg-slate-700 cursor-pointer relative group">
            <div>
              <Link className="p-5 block" href={item.destination}>
                {item.label}
              </Link>
            </div>
            {!!item.subMenuItems?.length && (
              <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                {item.subMenuItems?.map((subItem: any) => (
                  <div key={subItem.id}>
                    <Link
                      className="block whitespace-nowrap p-5 hover:bg-slate-700"
                      href={subItem.destination}
                      key={subItem.id}>
                      {subItem.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="ml-3 my-auto">
          <ButtonLink
            destination={callToActionDestination}
            label={callToActionLabel}
          />
        </div>
      </div>
    </div>
  );
};
