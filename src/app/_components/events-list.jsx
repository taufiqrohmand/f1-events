import React from "react";
import moment from "moment";

export const EventList = async () => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/81n23oKED5XU");
  const { data } = await res.json();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-3 py-6">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="flex flex-col h-auto w-96 border rounded-lg shadow-sm  hover:-translate-y-1 hover:shadow-md"
          >
            <div className="font-bold text-lg">
              {item.country.toUpperCase()}
            </div>
            <div className="font-bold text-lg">{item.length} KM</div>
            <div className="font-bold text-lg">{item.session}</div>
            <div>
              <div>
                <img
                  src={item.circuit}
                  alt="Circuit Images"
                  className="h-auto w-96 rounded-lg"
                ></img>
              </div>
            </div>
            <div className="flex justify-between space-x-3 py-2 items-center mt-auto bg-black rounded-b-lg">
              <div className="font-medium text-lg text-white text-wrap">
                {item.title.toUpperCase()}
              </div>
              <div className="flex justify-start font-medium text-sm text-white">
                {moment(item.date).format("DD-MMM-YYYY")}
              </div>
              {/* <div className="gap-2 flex justify-between pr-3">
                <UpdateNoteButton item={item} />
                <NoteDelete id={item._id} />
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
