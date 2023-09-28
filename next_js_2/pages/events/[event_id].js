import { useRouter } from "next/router";
// import { getEventById } from "../../dummy-data";
import Head from "next/head";
import {
  getEventById,
  getAllEvents,
  getFeaturedEvents,
} from "../../helpers/api-utils";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailsPage(props) {
  // const router = useRouter();

  // const eventId = router.query.event_id;
  // const event = getEventById(eventId);

  const { selectedEvent } = props;
  const event = selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading .....</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent>
        <h3>AKASH</h3>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticPaths() {
  // const events = await getAllEvents();
  const events = await getFeaturedEvents();
  const paths = events.map((event) => {
    return {
      params: {
        event_id: event.id,
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const {
    params: { event_id },
  } = context;
  const event = await getEventById(event_id);
  return {
    props: {
      selectedEvent: event,
      revalidate: 30,
    },
  };
}

export default EventDetailsPage;
