import React from "react";

type FilterProps = {
  genres: string[];
  selectedGenres: string[];
  onGenreChange: (genre: string) => void;

  selectedType: string;
  onTypeChange: (type: string) => void;

  selectedYear: number | null;
  onYearChange: (year: number | null) => void;

  selectedRating: number | null;
  onRatingChange: (rating: number | null) => void;
};

const Filter: React.FC<FilterProps> = ({
  genres,
  selectedGenres,
  onGenreChange,
  selectedType,
  onTypeChange,
  selectedYear,
  onYearChange,
  selectedRating,
  onRatingChange
}) => {
  return (
    <div className="filters">

      {/* TYPE */}
      <div>
        <h4>Type</h4>
        <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
          <option value="">Tous</option>
          <option value="film">Film</option>
          <option value="série">Série</option>
        </select>
      </div>

      {/* GENRES */}
      <div>
        <h4>Genres</h4>
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              checked={selectedGenres.includes(genre)}
              onChange={() => onGenreChange(genre)}
            />
            {genre}
          </label>
        ))}
      </div>

      {/* ANNÉE */}
      <div>
        <h4>Année</h4>
        <input
          type="number"
          value={selectedYear ?? ""}
          onChange={(e) =>
            onYearChange(e.target.value ? Number(e.target.value) : null)
          }
          placeholder="Ex: 2015"
        />
      </div>

      {/* NOTE */}
      <div>
        <h4>Note minimum</h4>
        <input
          type="number"
          min={0}
          max={10}
          step={1}
          value={selectedRating ?? ""}
          onChange={(e) =>
            onRatingChange(e.target.value ? Number(e.target.value) : null)
          }
          placeholder="Ex: 7.5"
        />
      </div>

    </div>
  );
};

export default Filter;