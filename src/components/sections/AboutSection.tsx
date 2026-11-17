import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image - Shows second on mobile, first on desktop */}
          <div className="order-1 lg:order-1 scroll-animate">
            <div className="relative mx-4 lg:mx-0">
              <div className="absolute top-4 right-4 z-10 rounded-full border border-white/30 bg-white/25 px-4 py-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.18)]">
                <p className="text-xs lg:text-sm font-semibold tracking-widest uppercase text-white/95">
                  Meet Your Doctor
                </p>
              </div>

              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:aspect-[4/5]">
                <Image
                  src="/daksh.png"
                  alt="Dr. Daksh Mutreja"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/30 bg-white/25 px-4 py-4 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.22)] lg:left-6 lg:right-6 lg:bottom-6 lg:max-w-xl lg:px-6 lg:py-5">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Dr. Daksh Mutreja
                </h2>
                <p className="mt-1 text-xs lg:text-sm font-medium text-white/90">
                  MDS, Oral Medicine & Radiology | PG certificate course in
                  implantology, Karnataka
                </p>
              </div>
              {/* Accent border - hidden on mobile */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-blue -z-10"></div>
            </div>
          </div>

          {/* Content - Shows first on mobile, second on desktop */}
          <div className="order-2 lg:order-2 scroll-animate">
            <p className="hidden text-brand-blue text-sm font-semibold tracking-widest uppercase mb-4">
              Meet Your Doctor
            </p>

            <h2 className="hidden font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-4">
              Dr. Daksh Mutreja
            </h2>

            <p className="hidden text-brand-green font-semibold text-lg mb-6">
              MDS, Oral Medicine & Radiology | PG certificate course in
              implantology, Karnataka
            </p>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
              With over 12 years of clinical experience, Dr. Daksh specializes
              in advanced dental implant procedures, bringing precision and care
              to every patient.
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  BDS from the reputed Govt. Dental College and Research
                  Institute, Bangalore
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  MDS in Oral Medicine and Radiology - Rajarajeswari Dental
                  College, Bangalore
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  Certificate Course in Implantology - RGUHS
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  Experienced clinician with over 11+years in dentistry with
                  expertise in handling diagnosis, root canals, crowns,
                  extractions, TMJ pain, minor oral surgery, esthetic dentistry,
                  smile designing, prosthetic rehabilitation, complete dentures,
                  pediatric and geriatric dentistry and all general dentistry
                  procedures and their complications.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  Specialised in simple/endosseous implants and specialised in
                  zygomatic and pterygoid implants with brands like Israeli
                  brands like Noris, Adin, MIS and South Korean brands like
                  Osstem, Dentium, Dio and global brands like Straumann and
                  Nobel.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  Specialist in ALL-ON-X, Sinus Lift, and Ridge Augmentation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  1000+ implants in total and 100+ implants placed for
                  underprivileged patients (volunteer work Acharya Tulsi jain
                  charitable trust )
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  10+ clinics (Acura Dental care, Padmanabhanagar and MS Dental
                  Nest, Konanakunte cross; to name a few), as a visiting dental
                  implantologist
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  Visiting ex-assistant professor in department of Oral Medicine
                  and Radiology at Sri Hasanamba Dental College and Hospital
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  Ex scientific writer for esteemed organisations like Sanofi
                  and Indegene
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-blue rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700 text-sm lg:text-base">
                  4+ publications in various global journals
                  <span className="mt-2 flex flex-col gap-1">
                    <a
                      href="https://www.researchgate.net/publication/360937540_BILATERAL_MANDIBULAR_IMPACTION_A_CASE_REPORT_AND_REVIEW_OF_LITERATURE_ARTICLE_INFO_ABSTRACT_CASE_REPORT"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/60 bg-white/30 px-4 py-2 text-center text-sm font-medium text-brand-blue shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/90 hover:bg-white/60 hover:shadow-lg"
                    >
                      Publication 1
                    </a>
                    <a
                      href="https://www.researchgate.net/publication/323320629_Assessment_of_Accuracy_and_Reliability_of_Linear_Measurements_of_CBCT-_An_in_vitro_study"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/60 bg-white/30 px-4 py-2 text-center text-sm font-medium text-brand-blue shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/90 hover:bg-white/60 hover:shadow-lg"
                    >
                      Publication 2
                    </a>
                    <a
                      href="https://www.researchgate.net/publication/323335700_MPNST_A_Rare_Yet_Ambiguous_LesionInternational_Journal_of_Tobacco_And_Oral_Health"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/60 bg-white/30 px-4 py-2 text-center text-sm font-medium text-brand-blue shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/90 hover:bg-white/60 hover:shadow-lg"
                    >
                      Publication 3
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
