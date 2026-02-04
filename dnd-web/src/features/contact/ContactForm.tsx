import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { updateField, submitFormRequest, resetForm } from '@/store/slices/contactSlice';
import Button from '@/components/Button/Button';
import type { CompanyId } from '@/types';
import './ContactForm.css';

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const { formData, isSubmitting, submitStatus } = useAppSelector((state) => state.contact);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitFormRequest());
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // dispatch(updateField({ field, value: e.target.value }));
    const value = e.target.value;

  dispatch(updateField({ field, value }));

  if (field === 'service') {
    dispatch(
      updateField({
        field: 'companyInterest',
        value: value === 'design'
          ? 'danish-design'
          : 'dnd-construction',
      })
    );
  }
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Send Us a Message</h2>

      {submitStatus === 'success' && (
        <div className="contact-form__success">
          <p>Thank you! We'll get back to you within 24 hours.</p>
          <button onClick={() => dispatch(resetForm())}>Send Another Message</button>
        </div>
      )}

      {submitStatus !== 'success' && (
        <form onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange('name')}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange('phone')}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange('email')}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="service">Service Interested In *</label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange('service')}
                required
                disabled={isSubmitting}
              >
                <option value="">Select a service</option>
                <option value="construction">Construction</option>
                <option value="design">Design</option>
                <option value="renovation">Renovation</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <div className="contact-form__field">
              <label htmlFor="companyInterest">Company</label>
              <select
                id="companyInterest"
                value={formData.companyInterest}
                onChange={handleChange('companyInterest')}
                disabled={isSubmitting}
              >
                <option value="dnd-construction">D&D Construction</option>
                <option value="danish-design">Danish Design Studio</option>
              </select>
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange('message')}
              required
              disabled={isSubmitting}
            />
          </div>

          {submitStatus === 'error' && (
            <div className="contact-form__error">
              Failed to send message. Please try again or call us directly.
            </div>
          )}

          <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
}