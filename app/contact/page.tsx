'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Upload, X, CheckCircle, Send, Loader2, ImageIcon, FileText } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';
import { siteConfig, services } from '@/lib/data/siteData';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  file: File;
}

const budgetRanges = [
  { value: 'under-25k', label: 'Under $25K' },
  { value: '25k-50k', label: '$25K - $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k+', label: '$100K+' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Scroll to top when form is submitted successfully
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [isSubmitted]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, budget: prev.budget === value ? '' : value }));
  };

  const handleServiceSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, service: prev.service === value ? '' : value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    const newFiles: UploadedFile[] = [];
    const maxSize = 10 * 1024 * 1024;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];

    Array.from(fileList).forEach((file) => {
      if (file.size > maxSize) return;
      if (!allowedTypes.includes(file.type)) return;
      if (files.length + newFiles.length >= 5) return;
      newFiles.push({ name: file.name, size: file.size, type: file.type, file });
    });

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + 'KB';
    return (bytes / (1024 * 1024)).toFixed(1) + 'MB';
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('');
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, email: value }));
    if (emailTouched) {
      validateEmail(value);
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    validateEmail(formData.email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      setEmailTouched(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert files to base64 for sending
      const fileAttachments = await Promise.all(
        files.map(async (file) => {
          const buffer = await file.file.arrayBuffer();
          const base64 = Buffer.from(buffer).toString('base64');
          return {
            filename: file.name,
            content: base64,
            type: file.type,
          };
        })
      );

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          attachments: fileAttachments,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-brand pt-16 lg:pt-20 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/wallpanel/wallpanel-1.jpg"
          alt="Success background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand/90 to-brand-light/85" />

        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <section className="relative z-10 min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center justify-center py-12">
          <div className="container-custom">
            <div className="max-w-lg mx-auto text-center">
              {/* Animated success icon */}
              <div className="relative mb-10">
                <div className="absolute inset-0 w-28 h-28 mx-auto bg-accent/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                <div className="relative w-28 h-28 bg-gradient-to-br from-accent to-accent-hover rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-accent/30">
                  <CheckCircle className="w-14 h-14 text-brand-dark" />
                </div>
              </div>

              {/* Sparkle decoration */}
              <div className="flex justify-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>

              <h1 className="font-display text-4xl lg:text-5xl font-medium text-white mb-4">
                Thank You!
              </h1>
              <p className="text-white/80 text-xl mb-3">
                Your request has been received.
              </p>
              <p className="text-white/60 text-base mb-10">
                Our team will review your project details and get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-brand-dark font-medium hover:bg-accent-hover transition-all hover:scale-105 shadow-lg shadow-accent/20"
                >
                  Back to Home
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>

              {/* Trust badge */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm">
                  Trusted by 350+ property managers across Ontario
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-brand">
      {/* Split Layout */}
      <section className="min-h-screen grid lg:grid-cols-5 pt-16 lg:pt-20">
        {/* Left Side - Info */}
        <div className="lg:col-span-2 bg-brand relative overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/wallpanel/wallpanel-1.jpg"
            alt="Contact background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand/85" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />

          <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-12 xl:px-16 py-16 lg:py-12">
            <ScrollAnimation direction="left">
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                  Get Started
                </span>
              </span>

              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight mb-6">
                Let&apos;s Build
                <br />
                <span className="text-accent-light">Something Great</span>
              </h1>

              <p className="text-white/60 text-lg mb-12 max-w-md">
                Tell us about your vision and we&apos;ll make it happen. Free consultation, no obligations.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-accent/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">Call Us</div>
                    <div className="text-white font-medium group-hover:text-accent transition-colors">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-accent/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">Email</div>
                    <div className="text-white font-medium group-hover:text-accent transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10">
                  <div className="w-12 h-12 bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">Location</div>
                    <div className="text-white font-medium">
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.province}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:col-span-3 bg-gray-50 flex items-center">
          <div className="w-full max-w-2xl mx-auto px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
            <ScrollAnimation direction="right">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection - Dropdown on mobile, grid on desktop */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What can we help you with?
                  </label>

                  {/* Mobile: Dropdown */}
                  <div className="sm:hidden">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.slug}>
                          {service.shortTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Desktop: Grid of buttons */}
                  <div className="hidden sm:grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.slug)}
                        className={`p-3 text-sm font-medium text-left border transition-all ${
                          formData.service === service.slug
                            ? 'bg-brand text-white border-brand'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-brand hover:text-brand'
                        }`}
                      >
                        {service.shortTitle}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Info Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                      placeholder="(416) 357-6597"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    className={`w-full px-4 py-3 bg-white border outline-none transition-colors ${
                      emailError && emailTouched
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-gray-200 focus:border-brand focus:ring-1 focus:ring-brand'
                    }`}
                    placeholder="john@example.com"
                  />
                  {emailError && emailTouched && (
                    <p className="mt-1 text-sm text-red-500">{emailError}</p>
                  )}
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Estimated Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((range) => (
                      <button
                        key={range.value}
                        type="button"
                        onClick={() => handleBudgetSelect(range.value)}
                        className={`px-4 py-2 text-sm font-medium border transition-all ${
                          formData.budget === range.value
                            ? 'bg-brand text-white border-brand'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attachments <span className="text-gray-400 font-normal">(optional)</span>
                  </label>

                  <div
                    className={`relative border-2 border-dashed transition-all ${
                      dragActive ? 'border-brand bg-brand/5' : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/jpeg,image/png,image/webp,application/pdf"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full p-4 flex items-center justify-center gap-3 text-gray-500 hover:text-brand transition-colors"
                    >
                      <Upload className="w-5 h-5" />
                      <span className="text-sm">
                        Drop files or <span className="text-brand font-medium">browse</span>
                      </span>
                    </button>
                  </div>

                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-sm"
                        >
                          {file.type.startsWith('image/') ? (
                            <ImageIcon className="w-3.5 h-3.5 text-gray-400" />
                          ) : (
                            <FileText className="w-3.5 h-3.5 text-gray-400" />
                          )}
                          <span className="text-gray-700 max-w-[120px] truncate">{file.name}</span>
                          <span className="text-gray-400 text-xs">{formatFileSize(file.size)}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-brand text-white font-medium hover:bg-brand-hover transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Free Quote
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="text-brand hover:underline">Privacy Policy</a>
                </p>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
