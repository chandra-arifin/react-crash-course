export function ProductFilter({ filters, onFilters }) {
    return (
        <div>
            Price:
            <input defaultValue={filters.price.min}
                onChange={(event) => onFilters('min', event.target.value)}
                type="number" min={0} max={999} /> -
            <input defaultValue={filters.price.max}
                onChange={(event) => onFilters('max', event.target.value)}
                type="number" min={0} max={999} />
        </div>
    );
}