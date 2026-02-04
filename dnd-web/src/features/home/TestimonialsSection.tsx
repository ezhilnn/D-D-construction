import useScrollReveal from '@/hooks/useScrollReveal';
import Card from '@/components/Card/Card';
import './TestimonialsSection.css';

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'D&D Construction delivered exceptional quality with absolute professionalism. Every detail was handled flawlessly.',
    author: 'Rajesh Kumar',
    role: 'Villa Owner, Chennai',
  },
  {
    id: 2,
    quote: 'A reliable team that values design, structure, and transparency. Highly recommended for anyone seeking premium construction.',
    author: 'Priya Shankar',
    role: 'Commercial Project, Coimbatore',
  },
  {
    id: 3,
    quote: 'Danish Design Studio transformed our space beyond expectations. The attention to detail and aesthetic sensibility is unmatched.',
    author: 'Arun Menon',
    role: 'Residence Renovation, Kodaikanal',
  },
];

export default function TestimonialsSection() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="testimonials section-pad" ref={ref}>
      <div className="container">
        <div className="testimonials__header">
          <h2 className={`testimonials__title ${isVisible ? 'testimonials__title--visible' : ''}`}>
            What Our Clients Say
          </h2>
          <p className={`testimonials__subtitle ${isVisible ? 'testimonials__subtitle--visible' : ''}`}>
            Trusted by homeowners and businesses across Tamil Nadu
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonials__card-wrapper ${isVisible ? 'testimonials__card-wrapper--visible' : ''}`}
              style={{ '--testimonial-index': index } as React.CSSProperties}
            >
              <Card glass>
                <div className="testimonials__card">
                  {/* Quote Icon */}
                  <svg className="testimonials__quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="testimonials__quote">{testimonial.quote}</p>

                  <div className="testimonials__author">
                    <p className="testimonials__author-name">{testimonial.author}</p>
                    <p className="testimonials__author-role">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}