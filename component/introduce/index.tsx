import { Style } from '../common/Style';
import { IntroducePayload } from '../../types/introduce';
import { Section } from '../common/Section';
import { SectionAnimate } from '../common/SectionAnimate';

type Payload = IntroducePayload;

export function IntroduceSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <IntroduceContent payload={payload} />
    </Section>
  );
}

function IntroduceContent({ payload }: { payload: Payload }) {
  const sectionId = 'section-introduce';

  return (
    <SectionAnimate>
      <section className="editorial-section" aria-labelledby={sectionId}>
        <div className="split-row">
          <div className="split-left">
            <h2 id={sectionId} className="section-heading">
              INTRODUCE
            </h2>
          </div>
          <div>
            {payload.contents.map((content, index) => (
              <p key={index.toString()}>{content}</p>
            ))}
            <p className="text-end" style={Style.sign}>
              {payload.sign}
            </p>
          </div>
        </div>
      </section>
    </SectionAnimate>
  );
}
