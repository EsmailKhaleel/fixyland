
function BurgerButton({isDrawerOpen}) {

  return (
    <button
      onClick={() => {}}
      aria-label="Toggle menu"
      aria-expanded={isDrawerOpen}
      className="relative w-10 h-10 cursor-pointer"
    >
      {/* Top bar */}
      <span
        className={[
          "absolute left-1/2 w-7 h-[3px] rounded-sm bg-gray-900",
          "origin-center transition-all duration-300 ease-in-out",
          isDrawerOpen
            ? "top-1/2 -translate-x-1/2 -translate-y-1/3 -rotate-45"
            : "top-3 -translate-x-1/2"
        ].join(" ")}
      />
      {/* Middle bar */}
      <span
        className={[
          "absolute left-1/2 w-7 h-[3px] rounded-sm bg-gray-900",
          "origin-center transition-all duration-300 ease-in-out",
          isDrawerOpen
            ? "top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
            : "top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100"
        ].join(" ")}
      />
      {/* Bottom bar */}
      <span
        className={[
          "absolute left-1/2 w-7 h-[3px] rounded-sm bg-gray-900",
          "origin-center transition-all duration-300 ease-in-out",
          isDrawerOpen
            ? "top-1/2 -translate-x-1/2 -translate-y-1/3 rotate-45"
            : "bottom-3 -translate-x-1/2"
        ].join(" ")}
      />
    </button>
  );
}

export default BurgerButton;
