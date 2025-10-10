import { Tabcontainer } from "../components/Tabcontainer";
import { Tabs } from "../components/Tabs";
import { Tab } from "../components/Tab";
import { Tabpanels } from "../components/Tabpanels";
import { Tabpanel } from "../components/Tabpanel";

const Demo: React.FC = () => {
  return (
    <div className="body">
      <h1>Tab component </h1>

      <p>
        This simple demo includes two fully-functioning tabs (pill and underline
        variants). You can navigate between them by clicking on the tab buttons,
        or by using the arrow keys when the tabs have focus.
      </p>

      <hr />
      <h2>Pill Variant</h2>

      <p>
        Below is an example of a <code>&lt;Tabcontainer /&gt;</code> component
        with the &ldquo;pill&rdquo; variant style. The initialSelectedTab prop
        is set to <strong>tab1</strong>, which means the first tab will be
        active when the component mounts. The <code>&lt;Tabs /&gt;</code>{" "}
        component has variant set to <strong>pill</strong>
      </p>

      <Tabcontainer initialSelectedTab="tab1">
        <Tabs variant="pill">
          <Tab
            id="tab1"
            label="Want to"
            badgeLabel="be more"
            badgeVariant="positive"
          />
          <Tab id="tab2" label="Not the other way around" />
          <Tab
            id="tab3"
            label="Are we"
            badgeLabel="safe?"
            badgeVariant="negative"
          />
        </Tabs>

        <Tabpanels>
          <Tabpanel id="tab1">
            <>
              <h2>Want to be more</h2>

              <blockquote>
                <p>
                  Nobody ever got fired for buying an IBM, right? What a fearful
                  way to do business. You've made just enough safe choices to
                  stay alive, but not enough to matter. Is that what you want?
                  You can be more. You want to be more, don't you? The window of
                  opportunity is closing. This is your chance. This is not about
                  not losing. This is about you finally having the confidence to
                  walk out on the ledge and know that you're not going to fall.
                </p>
                <cite>Joe McMillan - H&CF S01E01</cite>
              </blockquote>
            </>
          </Tabpanel>
          <Tabpanel id="tab2">
            <>
              <h2>Not the other way around</h2>
              <blockquote>
                <p>
                  After IBM, I went across the country just looking for answers.
                  I'd read your article, and I couldn't stop thinking about it.
                  Open architecture, the idea of it. As a way of life. It kept
                  me up at night. It made me that kid again, and I tracked you
                  down to COMDEX and watched as they chased you, too, and your
                  beautiful machine right off the ledge. And you, when I saw
                  you, everything about you threatens people. I thought that
                  maybe we could do this precisely because we're all
                  unreasonable people and progress depends on our changing the
                  world to fit us. Not the other way around. I want to believe
                  that. I must believe that. Tomorrow, I will show up at 7:00
                  A.M. and I will keep going. You don't have to join me, but
                  something tells me you both need this just as much as I do.
                  <cite>Joe McMillan - H&CF S01E02</cite>
                </p>
              </blockquote>
            </>
          </Tabpanel>
          <Tabpanel id="tab3">
            <>
              <h2>Are we safe?</h2>
              <blockquote>
                <p>
                  We live in a world that is constantly shifting, sometimes
                  bringing us together, and sometimes pulling us apart. Who are
                  our friends? Who are our enemies? What's gonna happen to us?
                  Are we safe? What I created has grown. Now, some of you even
                  call MacMillan Utility the gold standard in corporate
                  antivirus protection. But in the meantime, I've been asking
                  myself, "What should the price of security really be? How much
                  should we pay to feel safe?" Wait, here's another one from
                  that same ancient tradition. The whole secret of existence is
                  to have no fear at all. Never fear what will become of you.
                  Depend on no one. Only in the moment that you reject all help
                  are you really free.
                </p>
                <cite>Joe McMillan - H&CF S03E01</cite>
              </blockquote>
            </>
          </Tabpanel>
        </Tabpanels>
      </Tabcontainer>

      <hr />
      <h2>Underline Variant</h2>

      <p>
        Below is an example of a <code>&lt;Tabcontainer /&gt;</code> component
        with the &ldquo;underline&rdquo; variant style. The initialSelectedTab
        prop is set to <strong>tab2</strong>, the <code>&lt;Tabs /&gt;</code>{" "}
        component has variant set to <strong>underline</strong>
      </p>

      <Tabcontainer initialSelectedTab="tab2">
        <Tabs variant="underline">
          <Tab
            id="tab1"
            label="Want to"
            badgeLabel="be more"
            badgeVariant="positive"
          />
          <Tab id="tab2" label="Not the other way around" />
          <Tab
            id="tab3"
            label="Are we"
            badgeLabel="safe?"
            badgeVariant="negative"
          />
        </Tabs>

        <Tabpanels>
          <Tabpanel id="tab1">
            <>
              <h2>Want to be more</h2>

              <blockquote>
                <p>
                  Nobody ever got fired for buying an IBM, right? What a fearful
                  way to do business. You've made just enough safe choices to
                  stay alive, but not enough to matter. Is that what you want?
                  You can be more. You want to be more, don't you? The window of
                  opportunity is closing. This is your chance. This is not about
                  not losing. This is about you finally having the confidence to
                  walk out on the ledge and know that you're not going to fall.
                </p>
                <cite>Joe McMillan - H&CF S01E01</cite>
              </blockquote>
            </>
          </Tabpanel>
          <Tabpanel id="tab2">
            <>
              <h2>Not the other way around</h2>
              <blockquote>
                <p>
                  After IBM, I went across the country just looking for answers.
                  I'd read your article, and I couldn't stop thinking about it.
                  Open architecture, the idea of it. As a way of life. It kept
                  me up at night. It made me that kid again, and I tracked you
                  down to COMDEX and watched as they chased you, too, and your
                  beautiful machine right off the ledge. And you, when I saw
                  you, everything about you threatens people. I thought that
                  maybe we could do this precisely because we're all
                  unreasonable people and progress depends on our changing the
                  world to fit us. Not the other way around. I want to believe
                  that. I must believe that. Tomorrow, I will show up at 7:00
                  A.M. and I will keep going. You don't have to join me, but
                  something tells me you both need this just as much as I do.
                  <cite>Joe McMillan - H&CF S01E02</cite>
                </p>
              </blockquote>
            </>
          </Tabpanel>
          <Tabpanel id="tab3">
            <>
              <h2>Are we safe?</h2>
              <blockquote>
                <p>
                  We live in a world that is constantly shifting, sometimes
                  bringing us together, and sometimes pulling us apart. Who are
                  our friends? Who are our enemies? What's gonna happen to us?
                  Are we safe? What I created has grown. Now, some of you even
                  call MacMillan Utility the gold standard in corporate
                  antivirus protection. But in the meantime, I've been asking
                  myself, "What should the price of security really be? How much
                  should we pay to feel safe?" Wait, here's another one from
                  that same ancient tradition. The whole secret of existence is
                  to have no fear at all. Never fear what will become of you.
                  Depend on no one. Only in the moment that you reject all help
                  are you really free.
                </p>
                <cite>Joe McMillan - H&CF S03E01</cite>
              </blockquote>
            </>
          </Tabpanel>
        </Tabpanels>
      </Tabcontainer>

      <p>
        Realized by Fabrizio Calderan (me@fabrizio.dev) as a technical challenge
        for Prima between Oct. 7th and 10th, 2025.
        <br />
        https://fabrizio.dev <br />
      </p>
    </div>
  );
};

export default Demo;
