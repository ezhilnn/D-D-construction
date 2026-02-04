import useScrollReveal from '@/hooks/useScrollReveal';
import { APPROVAL_STEPS } from '@/config';
import './ApprovalTracker.css';

export default function ApprovalTracker() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div className="approval-tracker" ref={ref}>
      <div className="approval-tracker__header">
        <h2 className={`approval-tracker__title ${isVisible ? 'approval-tracker__title--visible' : ''}`}>
          Government Approvals Timeline
        </h2>
        <p className={`approval-tracker__subtitle ${isVisible ? 'approval-tracker__subtitle--visible' : ''}`}>
          We handle the entire approval process — from permits to completion clearance
        </p>
      </div>

      <div className="approval-tracker__timeline">
        {APPROVAL_STEPS.map((step, index) => (
          <div
            key={step.stage}
            className={`approval-tracker__step ${isVisible ? 'approval-tracker__step--visible' : ''}`}
            style={{ '--step-index': index } as React.CSSProperties}
          >
            {/* Step Number */}
            <div className="approval-tracker__step-number">{index + 1}</div>

            {/* Connector Line */}
            {index < APPROVAL_STEPS.length - 1 && (
              <div className="approval-tracker__connector" />
            )}

            {/* Content */}
            <div className="approval-tracker__step-content">
              <h3 className="approval-tracker__step-title">{step.label}</h3>
              <p className="approval-tracker__step-desc">{step.description}</p>
              <span className="approval-tracker__step-duration">
                Est. {step.estimatedDays} days
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={`approval-tracker__footer ${isVisible ? 'approval-tracker__footer--visible' : ''}`}>
        <p>
          <strong>Total estimated timeline:</strong> {APPROVAL_STEPS.reduce((sum, step) => sum + step.estimatedDays, 0)} days
          (approx. {Math.ceil(APPROVAL_STEPS.reduce((sum, step) => sum + step.estimatedDays, 0) / 30)} months)
        </p>
        <p className="approval-tracker__note">
          *Timelines may vary based on project complexity and government processing times
        </p>
      </div>
    </div>
  );
}