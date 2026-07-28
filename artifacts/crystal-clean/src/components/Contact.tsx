import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

function formatUSPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const response = await fetch(
        'https://n8n-stripe.localpackmonster.com/webhook-test/form-submission',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        },
      );

      const result: { success: 'true' | 'false' } = await response.json();

      if (result.success !== 'true') {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setSubmitError('Something went wrong. Please try again or call us.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-border">
          <div className="lg:w-2/5 p-10 md:p-16 bg-[#001D3D] text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Get in Touch</h2>
            <p className="text-white/70 mb-12 text-lg">
              We're located in the heart of Joplin, Missouri. Stop by any time, day or night, for a premium wash.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-white">Location</h4>
                  <p className="text-white/80 leading-relaxed">
                    2202 S Main St<br />
                    Joplin, MO 64804
                  </p>
                  <a
                    href="https://maps.google.com/?q=2202+S+Main+St,+Joplin,+MO+64804"
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-white transition-colors text-sm font-medium mt-2 inline-block uppercase tracking-wider"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-white">Phone</h4>
                  <a href="tel:4176248717" className="text-white/80 hover:text-secondary transition-colors text-xl">
                    (417) 624-8717
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-white">Hours</h4>
                  <p className="text-white/80 text-lg">
                    Open 24 Hours, Monday–Sunday
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-12 bg-gray-50">
            <h3 className="font-heading font-bold text-2xl mb-6 text-foreground">
              Send us a message
            </h3>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in zoom-in-95">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-green-900 text-xl mb-2 font-heading">
                  Message Sent!
                </h4>
                <p className="text-green-800">
                  Thanks for reaching out. We've received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-green-700 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Phone *
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Phone is required',
                        pattern: {
                          value: /^\(\d{3}\) \d{3}-\d{4}$/,
                          message: 'Enter a valid 10-digit US phone number',
                        },
                        onChange: (e) => {
                          e.target.value = formatUSPhone(e.target.value);
                        },
                      })}
                      inputMode="tel"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="(417) 555-0123"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Service Needed *
                  </label>
                  <select
                    {...register('service', {
                      required: 'Please select a service',
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="touchless">Touchless Automatic</option>
                    <option value="soft-touch">Soft-Touch Automatic</option>
                    <option value="self-service">Self-Service Bays</option>
                    <option value="membership">Membership / Unlimited</option>
                    <option value="other">Other / General Question</option>
                  </select>
                  {errors.service && (
                    <span className="text-red-500 text-xs mt-1 block">
                      {errors.service.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    How can we help?
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell us a little bit about what you need..."
                  />
                </div>

                {submitError && (
                  <p className="text-red-500 text-sm">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
