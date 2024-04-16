import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";
export function Select({ title, options, className, value, onChange }) {
  return (
    <div className="relative">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 bg-white p-4 dark:text-black ${className}`
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className="absolute pointer-events-none inset-y-0 right-0 flex-center pr-3 dark:text-black">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
