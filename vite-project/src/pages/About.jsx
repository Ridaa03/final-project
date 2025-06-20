import countryFacts from "../api/countryData.json"
export const About =()=>{
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the Intresting Facts
                <br/>
                We are proud of
            </h2>
            <div className="gradient-cards">
                {countryFacts.map((country)=>{
                    const {id,countryName,capital,population,intrestingFacts} = country
                    return(
                    <div className="card" key={id}>
                    <div className="container-card bg-blue-box">
                        <p className="card-title" >{countryName}</p>
                        <p>
                            <span className="card-description">Capital:</span>
                            {capital}
                        </p>
                        <p>
                            <span className="card-descrition">Population:</span>
                            {population}
                        </p>
                        <p>
                            <span className="card-description">Interesting Facts:</span>
                        </p>
                    </div>
                </div>
                );
                })}
                
                </div>

        </section>
    )
};