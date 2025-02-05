import { Header } from "./_components/header";
import { AddEventButton } from "./_components/events-add";
import { EventList } from "./_components/events-list";

export default function Home() {
  return (
    <div className="max-w-7xl m-auto">
      <Header />
      <main>
        <EventList />
      </main>
    </div>
  );
}
