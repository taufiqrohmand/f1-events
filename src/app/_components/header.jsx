import { AddEventButton } from "./events-add";

export const Header = () => {
  return (
    <header className="font-regular px-2 flex items-center justify-between sticky bg-red-600">
      <div>
        <img
          src="https://media.formula1.com/image/upload/f_auto,c_limit,w_195,q_auto/etc/designs/fom-website/images/f1_logo"
          className="py-3 w-40 hover:w-28"
        ></img>
      </div>
      <div>
        <AddEventButton />
      </div>
    </header>
  );
};
