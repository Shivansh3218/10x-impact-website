import Hero from "../components/sections/Hero";
import Partners from "../components/sections/Partners";
import WorkGrid from "../components/sections/WorkGrid";
import AudienceToggle from "../components/sections/AudienceToggle";
import IndiaMap from "../components/sections/IndiaMap";
import Provocation from "../components/sections/Provocation";
import People from "../components/sections/People";
import { ResourceFeature, ResourceCards } from "../components/sections/Resources";
import Closing from "../components/sections/Closing";
import { SectionHead, ArrowLink, Reveal } from "../components/primitives";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />

      {/* The work */}
      <section className="sec bg-paper">
        <div className="wrap-wide">
          <SectionHead eyebrow="Selected work" title="The work speaks."
            lede="Every figure ties back to a programme still running, a team still using the system, a partner we still meet each quarter." />
          <WorkGrid count={3} />
          <Reveal>
            <div className="mt-10"><ArrowLink to="/work">View all case studies</ArrowLink></div>
          </Reveal>
        </div>
      </section>

      {/* Audience toggle */}
      <section className="sec bg-deep">
        <div className="wrap-wide">
          <SectionHead center dark eyebrow="Who this is for" title="How can we help?"
            lede="Pick the door that’s yours. Services appear only when you choose — no icon grids, no noise." />
          <AudienceToggle />
        </div>
      </section>

      {/* India map centrepiece */}
      <IndiaMap />

      {/* Provocation */}
      <Provocation />

      {/* People */}
      <People />

      {/* Knowledge */}
      <section className="sec bg-deep">
        <div className="wrap-wide">
          <SectionHead dark eyebrow="Our resources" title="What we know. Freely shared."
            lede="Free and open. Because the sector needs it." />
          <div className="mb-[26px]"><ResourceFeature /></div>
          <ResourceCards />
          <Reveal>
            <div className="mt-10"><ArrowLink to="/resources" dark>All resources</ArrowLink></div>
          </Reveal>
        </div>
      </section>

      <Closing />
    </>
  );
}
