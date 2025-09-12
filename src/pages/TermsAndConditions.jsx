import BreadcrumbSection from "../components/BreadcrumbSection"
import SubscribeSection from "../components/SubscribeSection"
import termsAndConditions from "../data/termsAndConditions"

function TermsAndConditions() {
  return (
    <main className="overflow-hidden">
      <BreadcrumbSection title="Terms and Conditions" />
      <section className="section-padding bg-primary-light w-full">
        <div className="container mx-auto">
          {termsAndConditions.map((section, index) => (
            <div key={index} className="mb-10">
              {/* Title */}
              <h2
                className={`text-2xl font-bold mb-4 ${
                  index === 0 ? "text-primary text-4xl" : "text-black"
                }`}
              >
                {section.title}
              </h2>

              {/* Paragraphs */}
              {section.content.map((paragraph, i) => (
                <p key={i} className="mb-4 leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <SubscribeSection />
    </main>
  )
}

export default TermsAndConditions
