import { Building2, MapPin, Calendar } from "lucide-react";
import { experiences } from "../../data/experince";

import FadeIn from "../animations/FadeIn";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Industry Experience
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Professional Journey
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Internship and professional experience in mobile and backend development.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6 space-y-10">

          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 100}>
              
              {/* Dot */}
              <div className="absolute -left-[34px] mt-2 w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_#00ff99]" />

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">

                <div className="flex flex-col md:flex-row gap-6">

                  {/* Company Image */}
                  <div className="w-full md:w-1/4">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-28 object-cover rounded-xl border border-white/10"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    {/* Role + Type */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-white text-lg font-semibold">
                        {exp.role}
                      </h3>

                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-2 text-white/70 mt-1">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>

                    {/* Location + Period */}
                    <div className="flex flex-wrap gap-4 text-white/50 text-sm mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>

                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period || `${exp.startDate} → ${exp.endDate}`}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/60 mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.Skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;