"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useFormSubmit } from "@/hooks/useFormSubmit";

export function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { handleSubmit, loading, error } = useFormSubmit();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // reset error
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
    setErrors((prev) => ({ ...prev, interest: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must be 3-50 letters only";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid Indian phone number format";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select an interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      console.log("Submitting form data:", formData);
      await handleSubmit("brochure", formData);
      setIsSubmitted(true);
      setTimeout(() => setIsOpen(false), 3000);
    } catch (err) {
      console.error("Form submission error:", err);
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to submit form. Please try again.",
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className={cn(
          "bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden transition-all duration-500",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="bg-gradient-to-b from-[#0B3D2E] via-[#0A5730] to-[#0F6B38] text-white p-6">
          <h3 className="text-xl font-bold mb-2">
            Get Your Free Trading Guide
          </h3>
          <p className="text-gray-200 text-sm">
            Sign up to receive our comprehensive e-book on "7 Proven Strategies
            for Consistent Trading Profits"
          </p>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Thank You!
              </h4>
              <p className="text-gray-600">
                Your free trading guide has been sent to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="popup-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="popup-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="popup-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  required
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="popup-phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number (Optional)
                </label>
                <Input
                  id="popup-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="popup-interest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  I'm Interested In
                </label>
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.interest}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stocks">Recording Class</SelectItem>
                    <SelectItem value="options">Online Class</SelectItem>
                    <SelectItem value="futures">Offline Mentorship</SelectItem>
                  </SelectContent>
                </Select>
                {errors.interest && (
                  <p className="text-xs text-red-600 mt-1">{errors.interest}</p>
                )}
              </div>

              {errors.submit && (
                <p className="text-xs text-red-600 mt-1">{errors.submit}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-[#E6AF2E] hover:bg-[#D4A429] text-[#0A2342]"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Get Free Guide"}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
