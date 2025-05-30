import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  if (!country) return null;

  const { flags, name, population, region, capital } = country;

  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        {/* Image with fallback */}
        {flags?.svg ? (
          <img src={flags.svg} alt={`Flag of ${name?.common || "this country"}`} />
        ) : (
          <div className="placeholder-flag">No flag available</div>
        )}

        <div className="countryInfo">
          {/* Country name with fallback */}
          <p className="card-title">
            {name?.common
              ? name.common.length > 10
                ? name.common.slice(0, 10) + "..."
                : name.common
              : "Unnamed Country"}
          </p>

          {/* Population */}
          <p>
            <span className="card-description">Population:</span>{" "}
            {typeof population === "number" ? population.toLocaleString() : "N/A"}
          </p>

          {/* Region */}
          <p>
            <span className="card-description">Region:</span>{" "}
            {region || "N/A"}
          </p>

          {/* Capital */}
          <p>
            <span className="card-description">Capital:</span>{" "}
            {Array.isArray(capital) && capital.length > 0 ? capital[0] : "N/A"}
          </p>

          {/* Navigation */}
          {name?.common ? (
            <NavLink to={`/country/${name.common}`}>
              <button>Read More</button>
            </NavLink>
          ) : (
            <button disabled>Read More</button>
          )}
        </div>
      </div>
    </li>
  );
};
