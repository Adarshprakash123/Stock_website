"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Contact Form Submission",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { handleSubmit, loading, error } = useFormSubmit();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // Name: Only letters, min 2 chars
    if (!/^[a-zA-Z\s]{2,}$/.test(formData.name.trim())) {
      newErrors.name =
        "Name must contain only letters and be at least 2 characters long";
    }

    // Email: Standard pattern
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone: Optional, but if provided, must be valid
    if (formData.phone && !/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    // Message: Minimum 10 characters
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const sanitizeInput = (input: string) =>
    input.replace(/<[^>]*>?/gm, "").trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      subject: formData.subject,
      message: sanitizeInput(formData.message),
    };

    setFormData(sanitizedData);

    if (!validate()) return;

    try {
      console.log("Form Data Submitted:", sanitizedData);
      await handleSubmit("contact", sanitizedData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Contact Form Submission",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to submit form. Please try again.",
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-3" variant="outline">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or need personalized advice? Our
            team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Contact Info */}
          <div>
            <div className="bg-[#0A4223] rounded-lg p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-full p-3 mt-1">
                    <Mail className="h-5 w-5 text-[#E6AF2E]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200 mb-1">Email Us</h4>
                    <p className="text-white">founder@tradingwalla.com</p>
                    {/* <p className="text-white">info@tradepro.com</p> */}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-full p-3 mt-1">
                    <Phone className="h-5 w-5 text-[#E6AF2E]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200 mb-1">Call Us</h4>
                    <p className="text-white">+91 9289736744</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-full p-3 mt-1">
                    <MapPin className="h-5 w-5 text-[#E6AF2E]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200 mb-1">Visit Us</h4>
                    <p className="text-white">
                      Sasaram (Rohtash), Bihar 821115
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-medium text-gray-200 mb-3">Office Hours</h4>
                <p className="text-white">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-white">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-white">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#0A2342]">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg
                  className="h-12 w-12 text-green-500 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="text-lg font-semibold text-green-800 mb-2">
                  Message Sent!
                </h4>
                <p className="text-green-700">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 **********"
                    className="w-full"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    className="w-full min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

                <Button
                  type="submit"
                  className="w-full bg-[#0A4223] hover:bg-[#0D2E5A]"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-opacity-50 border-t-transparent rounded-full"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
