function ServiceCard({ service, active, onActivate }) {
  return (
    <div
      onMouseEnter={onActivate}
      className={`relative py-10 px-8 flex flex-col gap-4 rounded-xl bg-white cursor-pointer overflow-hidden
        ${active ? "text-white" : ""}`}
    >
      <img
        src={service.image}
        alt="Overlay"
        className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-all duration-300 z-0 origin-top
          ${active ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 "}`}
      />
      <div
        className={`bg-primary/70 absolute top-0 left-0 w-full h-full rounded-xl transition-all duration-300 z-[2] origin-top
          ${active ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
      />
      <service.icon
        className={`w-20 h-20 z-10 transition-colors duration-300
          ${active ? "text-white" : "text-gray-800"}`}
      />
      <h3
        className={`text-2xl font-bold z-10 transition-colors duration-300
          ${active ? "text-white" : "text-gray-900"}`}
      >
        {service.label}
      </h3>

      <p
        className={`text-lg z-10 transition-colors duration-300
          ${active ? "text-white" : "text-gray-600"}`}
      >
        Lorem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse
        cteturs adipiscin
      </p>
    </div>
  );
}

export default ServiceCard;
