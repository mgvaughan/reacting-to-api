import React, { useState } from 'react';

const App = () => {

    const [films, setFilms] = useState([]);

    const [people, setPeople] = useState([]);

    const getFilms = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then(allFilms => setFilms(allFilms))
    };

    const getPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(response => response.json())
            .then(allPeople => setPeople(allPeople))
    };


    console.log('this is people')
    console.log(people.length);
    if (people.length === 0 && films.length === 0) {
        return (
            <main className="container">
                <section className="row justify-content-evenly mt-5">
                    <button className="col-3" onClick={() => getFilms()}>Load Films</button>
                    <button className="col-3" onClick={() => getPeople()}>Load People</button>
                </section>
                <section className="row justify-content-center mt-5">
                    <div className="col-6 card shadow my-2">
                        <div className="cardbody">
                            <h2 className="card-title text-center">Studio Ghibli Routing Lab</h2>
                            <p className="card-subtitle p-2 text-center">Welcome to my covalence lab called "Reacting to APIs"!  I had a lot of fun working through this one, and am enjoying getting to learn React.</p>
                        </div>
                    </div>
                </section>              
            </main>
        )
    }
    return (
        <main className="container">
            <section className="row justify-content-evenly mt-5">
                <button className="col-3" onClick={() => getFilms()}>Load Films</button>
                <button className="col-3" onClick={() => getPeople()}>Load People</button>
            </section>
            <section className="row justify-content-evenly mt-5">
                {films.map(film => (
                    <div className="col-md-6" key={`film-card-${film.id}`}>
                        <div className="card shadow my-2">
                            <div className="cardbody">
                                <h4 className="card-title text-center">{film.title}</h4>
                                <p className="card-subtitle p-2">{film.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className="row justify-content-evenly mt-5">
                {people.map(people => (
                    <div className="col-md-4" key={`people-card-${people.id}`}>
                        <div className="card shadow my-2">
                            <div className="cardbody">
                                <h4 className="cardtitle px-2 text-decoration-underline">{people.name}</h4>
                                <h5 className="card-subtitle my-1 px-3">age: {people.age}</h5>
                                <h5 className="card-subtitle my-1 px-3">gender: {people.gender}</h5>
                                <h6 className="card-subtitle my-1 px 3">
                                    <a className="my-1 px-3" href={people.url}>link to JSON bio</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default App;