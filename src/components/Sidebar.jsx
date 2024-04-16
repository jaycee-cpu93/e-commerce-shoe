export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`dark:bg-night fixed right-0 top-0 overflow-y-auto z-50 w-full h-full bg-white transform transition duration-300 p-5 md:w-[50%] lg:w-[35%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 text-black font-bold dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
}
