import useScrollReveal from '@/hooks/useScrollReveal';
import './LegalPage.css';

export default function LegalPage() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="legal-page">
      <div className="legal-page__hero">
        <div className="container">
          <h1 className="legal-page__title">Legal Information</h1>
          <p className="legal-page__subtitle">Terms, Privacy, and Compliance</p>
        </div>
      </div>

      <div className="legal-page__content section-pad" ref={ref}>
        <div className="container">
          <div className={`legal-page__section ${isVisible ? 'legal-page__section--visible' : ''}`}>
            <h2 className="legal-page__section-title">Terms of Service</h2>
            <div className="legal-page__text">
              <p>
                Welcome to D&D Construction and Danish Design Studio. By engaging our services,
                you agree to the following terms and conditions:
              </p>

              <h3>1. Service Agreement</h3>
              <p>
                All construction and design services are provided under a formal contract outlining
                scope, timeline, costs, and deliverables. Both parties must sign before project commencement.
              </p>

              <h3>2. Payment Terms</h3>
              <p>
                Payment schedules are defined per project. Typically, we operate on a milestone-based
                payment structure: initial deposit (30%), mid-project (40%), and final completion (30%).
              </p>

              <h3>3. Project Timeline</h3>
              <p>
                Timelines are estimates and subject to change due to weather, material availability,
                government approvals, or unforeseen site conditions. We commit to transparent communication
                regarding any delays.
              </p>

              <h3>4. Warranty & Quality Assurance</h3>
              <p>
                D&D Construction provides a 1-year structural warranty from project handover. Danish Design
                Studio guarantees design fidelity and material quality as per agreed specifications.
              </p>

              <h3>5. Limitation of Liability</h3>
              <p>
                We are not liable for damages caused by natural disasters, third-party negligence,
                or client-requested deviations from approved plans.
              </p>
            </div>
          </div>

          <div className={`legal-page__section ${isVisible ? 'legal-page__section--visible' : ''}`}>
            <h2 className="legal-page__section-title">Privacy Policy</h2>
            <div className="legal-page__text">
              <p>
                Your privacy is important to us. This policy outlines how we collect, use, and protect
                your personal information.
              </p>

              <h3>Information Collection</h3>
              <p>
                We collect personal information (name, email, phone, address) when you contact us,
                request quotes, or engage our services. Project-related documents and site photos may
                also be collected.
              </p>

              <h3>Use of Information</h3>
              <p>
                Information is used solely for project execution, communication, invoicing, and legal
                compliance. We do not sell or share your data with third parties except as required by law.
              </p>

              <h3>Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your data from unauthorized
                access, alteration, or disclosure.
              </p>

              <h3>Your Rights</h3>
              <p>
                You have the right to access, update, or request deletion of your personal information.
                Contact us at info@dndconstruction.com for any data-related requests.
              </p>
            </div>
          </div>

          <div className={`legal-page__section ${isVisible ? 'legal-page__section--visible' : ''}`}>
            <h2 className="legal-page__section-title">Compliance & Licensing</h2>
            <div className="legal-page__text">
              <p>
                D&D Construction operates in full compliance with Tamil Nadu construction regulations
                and holds all necessary licenses and registrations.
              </p>

              <h3>Statutory Approvals</h3>
              <p>
                We assist clients in obtaining all required government approvals, building permits,
                and clearances. Final approval responsibility rests with local authorities.
              </p>

              <h3>Building Codes</h3>
              <p>
                All projects adhere to National Building Code (NBC) standards, local municipal regulations,
                and environmental compliance requirements.
              </p>

              <h3>Insurance</h3>
              <p>
                D&D Construction maintains comprehensive liability insurance covering project sites,
                workers, and third-party risks during active construction.
              </p>
            </div>
          </div>

          <div className={`legal-page__section ${isVisible ? 'legal-page__section--visible' : ''}`}>
            <h2 className="legal-page__section-title">Contact for Legal Inquiries</h2>
            <div className="legal-page__text">
              <p>
                For legal questions, contract clarifications, or dispute resolution, please contact:
              </p>
              <p className="legal-page__contact">
                <strong>Email:</strong> info@dndconstruction.com<br />
                <strong>Phone:</strong> +91 915 991 3330<br />
                <strong>Phone:</strong> +91 822 068 1330 <br />
                <strong>Address:</strong> Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}