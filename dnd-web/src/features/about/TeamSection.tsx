import useScrollReveal from '@/hooks/useScrollReveal';
import './TeamSection.css';

const TEAM_STATS = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Happy Clients', value: '150+' },
  { label: 'Cities Served', value: '6' },
];

export default function TeamSection() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="team-section section-pad" ref={ref}>
      <div className="container">
        <div className="team-section__header">
          <h2 className={`team-section__title ${isVisible ? 'team-section__title--visible' : ''}`}>
            Our Expertise
          </h2>
          <p className={`team-section__subtitle ${isVisible ? 'team-section__subtitle--visible' : ''}`}>
            A dedicated team of construction professionals, engineers, architects, and designers
            committed to delivering excellence in every project.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="team-section__stats">
          {TEAM_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`team-section__stat ${isVisible ? 'team-section__stat--visible' : ''}`}
              style={{ '--stat-index': index } as React.CSSProperties}
            >
              <div className="team-section__stat-value">{stat.value}</div>
              <div className="team-section__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Description */}
        <div className={`team-section__content ${isVisible ? 'team-section__content--visible' : ''}`}>
          <div className="team-section__text">
            <h3>Professional Excellence</h3>
            <p>
              Our team consists of licensed civil engineers, certified architects, experienced site supervisors,
              and skilled craftsmen. Each member brings specialized expertise to ensure structural integrity,
              design innovation, and flawless execution.
            </p>
            <h3>Collaborative Approach</h3>
            <p>
              We work closely with clients throughout the entire journey—from initial consultation and design
              conceptualization to final handover. Transparent communication and collaborative decision-making
              are at the core of our process.
            </p>
            <h3>Continuous Innovation</h3>
            <p>
              We stay ahead of industry trends, adopting modern construction techniques, sustainable materials,
              and cutting-edge technology to deliver projects that meet contemporary standards while standing
              the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}