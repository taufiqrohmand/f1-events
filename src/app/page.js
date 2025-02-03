import { AddEventButton } from "./_components/events-add";
import { EventList } from "./_components/events-list";

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <AddEventButton />
        <EventList />
      </main>
    </div>
  );
}
