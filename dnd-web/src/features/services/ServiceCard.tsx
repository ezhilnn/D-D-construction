import useScrollReveal from '@/hooks/useScrollReveal';
import './ServiceCard.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  design?: boolean;
}

export default function ServiceCard({ service, design = false }: ServiceCardProps) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`service-card ${isVisible ? 'service-card--visible' : ''} ${design ? 'service-card--design' : ''}`}
    >
      {/* Icon */}
      <div className="service-card__icon">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={service.icon} />
        </svg>
      </div>

      {/* Content */}
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.description}</p>

      {/* Features */}
      <ul className="service-card__features">
        {service.features.map((feature, index) => (
          <li key={index} className="service-card__feature">
            <svg className="service-card__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}