export default function FilterSidebar({ filters, selected, onChange }) {
  return (
    <div className="w-64 border-r pr-4 space-y-6">
      {Object.entries(filters).map(([filterName, options]) => (
        <div key={filterName}>
          <h3 className="font-semibold mb-2">{filterName}</h3>

          {options.map((value) => (
            <label key={value} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selected[filterName]?.includes(value) || false}
                onChange={() => onChange(filterName, value)}
              />
              {value}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
