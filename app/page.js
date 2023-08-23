import Hero from "@/components/Hero/Hero";
import "../Styles/main.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import CustomFilter from "@/components/CustomFilter/CustomFilter";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard/CarCard";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log(allCars);
  return (
    <main className="home-main_container">
      <Hero />
      <div className="wrapper">
        <div className="home__text-container">
          <h1 className="heading1">Car Catalogue</h1>
          <p className="p">Explore the cars you might like</p>
        </div>

        <div className="home_filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
