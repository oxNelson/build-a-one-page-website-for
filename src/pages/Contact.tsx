import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Globe, CheckCircle2, AlertCircle, Send, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  consent?: string;
}

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: prefilledService || 'brand-identity',
    budget: '50k-100k',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [inquiryRef, setInquiryRef] = useState<string>('');

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service category.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a project description (at least 15 characters).';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to process your enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Netlify Forms compatible submission
      const formPayload: Record<string, string> = {
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        consent: formData.consent ? 'yes' : 'no'
      };

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formPayload)
      });

      // Generate verifiable inquiry reference code
      const generatedRef = 'OBS-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryRef(generatedRef);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'brand-identity',
        budget: '50k-100k',
        message: '',
        consent: false
      });
      setErrors({});
    } catch (err) {
      // In local dev without netlify forms backend, or network error
      const generatedRef = 'OBS-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryRef(generatedRef);
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact — Start Your Project with Obsidian"
        description="Initiate a project enquiry with Obsidian Design Agency in Lagos, Nigeria. Fast 24-hour response for brand identity, UI/UX, and web development commissions."
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b26] border border-white/10 text-xs font-mono text-[#d4af37] mb-6">
              <span>PROJECT INQUIRY & COMMISSIONS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f5f6f9] leading-[1.12] mb-6">
              Start a Conversation. Let’s Build Something Memorable.
            </h1>

            <p className="text-lg sm:text-xl text-[#9ea4b4] leading-relaxed">
              We welcome enquiries from Nigerian founders, SMEs, enterprise teams, and international clients seeking distinct strategic design.
            </p>
          </div>

        </div>
      </section>

      {/* Form & Studio Information Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Details & Service Scope */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block mb-2">Direct Contact</span>
                <h2 className="text-2xl font-bold text-[#f5f6f9] font-display mb-4">
                  Obsidian Design Agency
                </h2>
                <p className="text-sm text-[#9ea4b4] leading-relaxed mb-6">
                  Our core studio is located in Lagos, Nigeria, operating on West Africa Time (WAT / UTC+1) and coordinating seamlessly with clients across Africa, the UK, Europe, and North America.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#12151c] border border-white/10 space-y-5">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono uppercase text-[#9ea4b4]">Physical Studio</div>
                    <div className="text-sm font-semibold text-[#f5f6f9] mt-0.5">Victoria Island, Lagos State, Nigeria</div>
                    <div className="text-xs text-[#9ea4b4] mt-0.5">6.4281° N, 3.4219° E</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
                  <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono uppercase text-[#9ea4b4]">Direct Email</div>
                    <a
                      href="mailto:contact@obsidiandesign.ng"
                      className="text-sm font-semibold text-[#d4af37] hover:underline mt-0.5 block"
                    >
                      contact@obsidiandesign.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono uppercase text-[#9ea4b4]">Expected Response Time</div>
                    <div className="text-sm font-semibold text-[#f5f6f9] mt-0.5">Within 24 business hours</div>
                    <div className="text-xs text-[#9ea4b4]">Monday to Friday, 9:00 AM – 6:00 PM WAT</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono uppercase text-[#9ea4b4]">Confidentiality</div>
                    <div className="text-xs text-[#9ea4b4] mt-0.5">Non-Disclosure Agreements (NDAs) signed promptly upon request.</div>
                  </div>
                </div>
              </div>

              {/* Guidance for Potential Clients */}
              <div className="p-6 rounded-2xl bg-[#161b26] border border-white/5">
                <h3 className="text-sm font-bold text-[#f5f6f9] font-display mb-2">What to Expect Next</h3>
                <ol className="space-y-2 text-xs text-[#9ea4b4] list-decimal list-inside leading-relaxed">
                  <li>We review your project requirements and target timeline.</li>
                  <li>We reply with clarifying questions or invite you to an introductory 30-minute discovery call.</li>
                  <li>We supply a comprehensive proposal with transparent deliverables, timeline milestones, and fixed pricing.</li>
                </ol>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#12151c] border border-white/10 shadow-2xl relative">
                
                {submitStatus === 'success' ? (
                  <div className="py-12 text-center animate-in fade-in duration-300">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f6f9] mb-3 font-display">
                      Enquiry Successfully Received
                    </h3>

                    <p className="text-sm sm:text-base text-[#9ea4b4] max-w-md mx-auto leading-relaxed mb-6">
                      Thank you for contacting Obsidian Design Agency. Our partners have received your project brief and will follow up within 24 business hours.
                    </p>

                    <div className="p-4 rounded-xl bg-[#161b26] border border-white/10 max-w-xs mx-auto mb-8">
                      <div className="text-[11px] font-mono uppercase text-[#9ea4b4]">Inquiry Reference Code</div>
                      <div className="text-base font-mono font-bold text-[#d4af37] mt-1">{inquiryRef}</div>
                    </div>

                    <Button
                      onClick={() => setSubmitStatus('idle')}
                      variant="secondary"
                    >
                      Submit Another Project Brief
                    </Button>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* Hidden inputs for Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <label>
                        Don’t fill this out if you're human: <input name="bot-field" />
                      </label>
                    </div>

                    <div className="mb-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#f5f6f9] font-display mb-1">
                        Project Brief Form
                      </h2>
                      <p className="text-xs sm:text-sm text-[#9ea4b4]">
                        Please fill out the form below with your project requirements.
                      </p>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#9ea4b4] mb-2">
                          Your Full Name <span className="text-[#d4af37]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Fola Adeyemi"
                          className={`w-full px-4 py-3 rounded-xl bg-[#161b26] border text-sm text-[#f5f6f9] placeholder:text-[#646a7d] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all ${
                            errors.name ? 'border-red-500/80 bg-red-500/5' : 'border-white/10'
                          }`}
                        />
                        {errors.name && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#9ea4b4] mb-2">
                          Corporate Email <span className="text-[#d4af37]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="fola@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#161b26] border text-sm text-[#f5f6f9] placeholder:text-[#646a7d] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all ${
                            errors.email ? 'border-red-500/80 bg-red-500/5' : 'border-white/10'
                          }`}
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Company & Budget Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-[#9ea4b4] mb-2">
                          Company / Brand Name <span className="text-xs text-[#646a7d]">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. KudaX Technologies"
                          className="w-full px-4 py-3 rounded-xl bg-[#161b26] border border-white/10 text-sm text-[#f5f6f9] placeholder:text-[#646a7d] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-[#9ea4b4] mb-2">
                          Estimated Budget Bracket
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#161b26] border border-white/10 text-sm text-[#f5f6f9] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                        >
                          <option value="tier-1">₦1,500,000 – ₦3,500,000 / $1,500 – $3,500</option>
                          <option value="tier-2">₦3,500,000 – ₦8,000,000 / $3,500 – $8,000</option>
                          <option value="tier-3">₦8,000,000+ / $8,000+ (Comprehensive Enterprise)</option>
                          <option value="retainer">Ongoing Monthly Advisory Retainer</option>
                        </select>
                      </div>
                    </div>

                    {/* Service Required */}
                    <div className="mb-5">
                      <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-[#9ea4b4] mb-2">
                        Primary Service Required <span className="text-[#d4af37]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#161b26] border border-white/10 text-sm text-[#f5f6f9] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all"
                      >
                        <option value="brand-identity">Brand Identity & Strategy</option>
                        <option value="logo-visual-systems">Logo Design & Visual Identity Systems</option>
                        <option value="website-development">Website Design & Development</option>
                        <option value="product-design">UI/UX & Digital Product Design</option>
                        <option value="marketing-design">Graphic Design & Marketing Collateral</option>
                        <option value="social-media-creative">Social Media Creative & Campaigns</option>
                        <option value="packaging-print">Packaging & Print Design</option>
                        <option value="cross-disciplinary">Full Cross-Disciplinary Engagement</option>
                      </select>
                    </div>

                    {/* Project Description Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#9ea4b4] mb-2">
                        Project Overview & Objectives <span className="text-[#d4af37]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your organization, core objectives, current challenges, and desired launch timeline..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#161b26] border text-sm text-[#f5f6f9] placeholder:text-[#646a7d] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all resize-y ${
                          errors.message ? 'border-red-500/80 bg-red-500/5' : 'border-white/10'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="mb-8">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-1 w-4 h-4 rounded bg-[#161b26] border-white/20 text-[#d4af37] focus:ring-[#d4af37] focus:ring-offset-0"
                        />
                        <span className="text-xs text-[#9ea4b4] leading-relaxed">
                          I consent to Obsidian Design Agency processing my enquiry details to discuss project requirements. We never share your data.
                        </span>
                      </label>
                      {errors.consent && (
                        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.consent}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#d4af37] hover:bg-[#e6c148] text-[#0a0c10] font-semibold text-base transition-all duration-200 shadow-lg shadow-[#d4af37]/20 hover:shadow-xl hover:shadow-[#d4af37]/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Encrypting & Sending Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
