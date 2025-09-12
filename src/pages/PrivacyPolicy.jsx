import BreadcrumbSection from "../components/BreadcrumbSection"
import privacyPolicy from "../data/privacyPolicy"

function PrivacyPolicy() {
  return (
       <main>
      <BreadcrumbSection title="Terms and Conditions" />
      <section className="section-padding bg-primary-light w-full">
        <div className="container mx-auto">
          {privacyPolicy.map((section, index) => (
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
    </main>
  )
}

export default PrivacyPolicy