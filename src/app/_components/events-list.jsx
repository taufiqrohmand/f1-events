import React from "react";
import moment from "moment";
import DeleteEvenetButton from "./events-delete";
import { UpdateEventButton } from "./events-update";
import { Button } from "@heroui/react";

export const EventList = async () => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/81n23oKED5XU");
  const { data } = await res.json();

  return (
    <div className="grid py-6 md:grid-cols-2 xl:grid-cols-3 auto-rows-max">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="flex flex-col h-auto w-96 mt-6 border bg-white rounded-lg shadow-sm  hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex justify-between pl-3">
              <div className="flec flex-row">
                <div className="font-bold text-4xl">
                  {item.country[0]
                    .toUpperCase()
                    .concat(item.country.slice(1, 50).toLowerCase())}
                </div>
                <div className="font-semibold text-base mt-2">
                  {item.length} KM
                </div>
              </div>
              <div className="flex flex-row p-2">
                <div className="gap-2 space-y-1">
                  <UpdateEventButton
                    id={item._id}
                    title={item.title}
                    date={item.date}
                    session={item.session}
                    country={item.country}
                    length={item.length}
                    circuit={item.circuit}
                  />
                  <DeleteEvenetButton id={item._id} />
                </div>
              </div>
            </div>
            <Button color="primary" variant="flat" size="sm">
              {item.session.toUpperCase()}
            </Button>
            <div>
              <img
                src={item.circuit}
                alt="Circuit Images"
                className="h-52"
              ></img>
            </div>
            <div className="flex justify-between h-20  items-center mt-auto bg-black rounded-b-lg">
              <div className="font-medium text-lg text-white text-wrap">
                {item.title.toUpperCase()}
              </div>
              <div className="font-medium text-sm text-white">
                {moment(item.date).format("DD-MMM-YYYY")}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
