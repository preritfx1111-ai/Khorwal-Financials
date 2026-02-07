import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-emerald-600/20 border-y border-slate-700/50">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Start Your Investment Journey?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation with our expert advisors and take the first step towards financial prosperity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://p.njw.bz/84811"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/919911186409"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
