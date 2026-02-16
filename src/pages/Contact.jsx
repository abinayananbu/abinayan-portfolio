import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_p1ok567",     // 🔹 Replace this
        "template_4tf79ts",    // 🔹 Replace this
        form.current,
        "ar5-fkJeRGn6uwmnH"      // 🔹 Replace this
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full -top-20 -left-20" />
      <div className="absolute w-[400px] h-[400px] bg-violet-600/20 blur-[140px] rounded-full bottom-0 right-0" />

      <h1 className="absolute text-[160px] font-bold text-white/5 left-10 top-10 select-none pointer-events-none">
        CONTACT ME
      </h1>

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Let’s Work <span className="text-indigo-400">Together</span>
          </h1>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Have a project in mind? Want to build something scalable?
            I specialize in full-stack SaaS systems and automation platforms.
            Let’s create something impactful.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-400" />
              <span>abinayanaj@email.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-indigo-400" />
              <span>+91 63802 26792</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-400" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <div>
              <label className="block mb-2 text-sm text-gray-400">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90 transition font-medium shadow-lg shadow-indigo-500/30 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                ❌ Failed to send. Please try again.
              </p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}
