import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Send,
  Users,
  GraduationCap,
  Calendar,
  MessageSquare,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

interface MemberData {
  name: string;
  faculty: string;
  batch: string;
  phone: string;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const JoinUsAndContact: React.FC = () => {
  const [joinFormData, setJoinFormData] = useState<MemberData>({
    name: "",
    faculty: "",
    batch: "",
    phone: "",
  });

  const [contactFormData, setContactFormData] = useState<ContactData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [joinLoading, setJoinLoading] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJoinLoading(true);

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbydYxR-pgfa1Sm19W0ZZZG7d1LeMoFFUZEO3_PD4EdTwZ1zc0kkdW-Yb9gV6xFR1AU/exec";

    try {
      // Send as text/plain to avoid CORS preflight check
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Bypass CORS restrictions
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(joinFormData),
      });
      // Note: With no-cors, we can't check response.ok
      // If no error is thrown, assume success
      setJoinSuccess(true);
      setJoinFormData({ name: "", faculty: "", batch: "", phone: "" });
      setTimeout(() => setJoinSuccess(false), 5000);
    } catch (error) {
      console.error("Error!", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setJoinLoading(false);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const recipient = "ieeecomsocuomsb@gmail.com"; // Change this to your email
    const subject = encodeURIComponent(contactFormData.subject);
    const body = encodeURIComponent(
      `Name: ${contactFormData.name}\nEmail: ${contactFormData.email}\n\nMessage:\n${contactFormData.message}`
    );

    // Open email client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Reset form
    setContactFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 network-pattern" />
          <div className="container-max section-padding relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
                Join Us & Contact
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed animate-fade-in-up animation-delay-100">
                Become a part of IEEE Communication Society at University of
                Moratuwa and connect with us for any inquiries.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full">
              <path
                d="M0 80L1440 80V40C1200 70 720 0 0 60V80Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-background">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Join Us Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <UserPlus size={24} className="text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Join Our Community
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Join IEEE ComSoc UoM and unlock opportunities to grow your
                  technical skills, network with industry professionals, and be
                  part of exciting events and projects.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Network & Collaborate
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Connect with like-minded peers and industry experts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Learn & Grow
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Access workshops, seminars, and technical resources
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Events & Activities
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Participate in hackathons, competitions, and field
                        visits
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Join Us Form */}
              <div className="card-elevated p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Fill in your details
                </h3>
                {joinSuccess && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-green-800 dark:text-green-200">
                    🎉 Success! Welcome to IEEE ComSoc UoM!
                  </div>
                )}
                <form onSubmit={handleJoinSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={joinFormData.name}
                      onChange={(e) =>
                        setJoinFormData({
                          ...joinFormData,
                          name: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Faculty
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Faculty of Engineering"
                      value={joinFormData.faculty}
                      onChange={(e) =>
                        setJoinFormData({
                          ...joinFormData,
                          faculty: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Batch
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 2024"
                      value={joinFormData.batch}
                      onChange={(e) =>
                        setJoinFormData({
                          ...joinFormData,
                          batch: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g., 0771234567"
                      value={joinFormData.phone}
                      onChange={(e) =>
                        setJoinFormData({
                          ...joinFormData,
                          phone: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={joinLoading}
                    className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {joinLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <UserPlus size={20} />
                        Join Now
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 bg-muted/50">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions or want to collaborate? We'd love to hear from
                you!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card-elevated p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <MessageSquare
                      size={20}
                      className="text-accent-foreground"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Send us a Message
                  </h3>
                </div>
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={contactFormData.name}
                        onChange={(e) =>
                          setContactFormData({
                            ...contactFormData,
                            name: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={contactFormData.email}
                        onChange={(e) =>
                          setContactFormData({
                            ...contactFormData,
                            email: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      value={contactFormData.subject}
                      onChange={(e) =>
                        setContactFormData({
                          ...contactFormData,
                          subject: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Write your message here..."
                      value={contactFormData.message}
                      onChange={(e) =>
                        setContactFormData({
                          ...contactFormData,
                          message: e.target.value,
                        })
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Open Email
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="card-elevated p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:comsoc@uom.lk"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          ieeecomsocuomsb@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a
                          href="tel:+94112650301"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          +94 11 265 0301
                        </a>
                      </div>
                    </div> */}

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="text-foreground">
                          University of Moratuwa, Katubedda, Sri Lanka
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card-elevated p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/ieeecomsocuom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                    >
                      <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/comsoc-sb-uom/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                    >
                      <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </a>
                    {/* <a
                      href="https://instagram.com/ieeecomsocuom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                    >
                      <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </a> */}
                  </div>
                </div>

                {/* Map or Image */}
                {/* <div className="card-elevated p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Find Us
                  </h3>
                  <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5747080812696!2d79.90020731477271!3d6.795206595070471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245159ba26b85%3A0x9e1ba47c21e765e0!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1647856543210!5m2!1sen!2slk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="University of Moratuwa Location"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUsAndContact;
