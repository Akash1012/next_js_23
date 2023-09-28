// import { getFeaturedEvents } from "../dummy-data";
import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();
  const { events } = props;
  return (
    <>
      <div>
        <Head>
          <title>NextJS Events</title>
          <meta
            name="description"
            content="Find a lot of great events that allow you to evolve"
          />
        </Head>
        <EventList items={events} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 10, // In seconds
  };
}

export default HomePage;
