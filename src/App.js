import React, { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
const Course = lazy(() => import("./components/Course"));

function App() {
  const imagesLink = "https://www.imumk.ru/svc/coursecover/";
  const [courses, setCourses] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    axios
      .post("https://krapipl.imumk.ru:8443/api/mobilev1/update", {})
      .then(function (response) {
        // console.log(response);
        setIsFetching(false)
        setCourses(response.data.items);
      });
  }, []);

  const [units, setUnits] = useState(true);
  const toggleUnits = () => {
    setUnits(!units);
  };

  const subjects = React.useMemo(() => [...new Set(courses.map(n => n.subject))], [ courses ]);
  const genres = React.useMemo(() => [...new Set(courses.map(n => n.genre))], [ courses ]);
  const grades = React.useMemo(() => [...new Set(courses.map(n => n.grade))], [ courses ]);

const [subject, setSubject] = useState('')
const [genre, setGenre] = useState('')
const [grade, setGrade] = useState('')
const [searchValue, setSearchValue] = useState("")
const [searchValueToSubmit, setSearchValueToSubmit] = useState("")

const onSubjectChange = e => setSubject(e.target.value)
const onGenreChange = e => setGenre(e.target.value)
const onGradeChange = e => setGrade(e.target.value)
const handleSearchInputChanges = (e) => setSearchValue(e.target.value);

const resetInputField = () => setSearchValue("")

const callSearchFunction = (e) => {
  e.preventDefault();
  setSearchValueToSubmit(searchValue);
  resetInputField();
}
let regexp = new RegExp(searchValueToSubmit, "i")

const filteredCourses = courses.filter(n => (
  (!subject || n.subject === subject) &&
  (!genre || n.genre === genre) &&
  (!grade || n.grade === grade) &&
  (!searchValueToSubmit || regexp.test(n.subject) || regexp.test(n.genre)  || regexp.test(n.grade))
))

  return (
    <div className="wrapper">
      <button className="toggle" onClick={toggleUnits}>
        рубли/бонусы
      </button>
      <div className="content">
        <header className="l-header">
          <div className="header">
            <div className="header-logo-menu">
            <a href="##" className="header-logo"></a>
            <div className="menu-host">
              <nav className="menu-wrapper">
                <a href="##" className="menu-burger">
                  <span></span>
                </a>
              </nav>
            </div>
            </div>
            <div className="header-nav">
              <a href="##" className="header-btn">
                Каталог
              </a>
              <a href="##" className="header-btn">
                Активация
              </a>
              <a href="##" className="header-btn">
                Вход
              </a>
            </div>
          </div>
        </header>
        <main className="l-container">
          <h1 className="heading">Витрина</h1>
          <div className="courses">
            <form className="courses-form">
              <div>
                <select onChange={onSubjectChange}>
                  <option value="">Все предметы</option>
                  {subjects.map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <select onChange={onGenreChange}>
                  <option value="">Все жанры</option>
                  {genres.map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <select onChange={onGradeChange}>
                  <option value="">Все классы</option>
                  {grades.map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <input
                  className="find"
                  type="text"
                  placeholder="Поиск"
                  value={searchValue}
                  onChange={handleSearchInputChanges}
                />
                <button
                  className="courses-form-search-btn"
                  type="submit"
                  onClick={callSearchFunction}
                ></button>
              </div>
            </form>
          </div>
          <ul className="courses-list">
            {isFetching ? <div className="loader"></div> : null}
          <Suspense fallback={<div className="loader"></div>}>
            {filteredCourses.map((obj, i) => (
              <Course
                key={obj.courseHash}
                courseId={obj.courseId}
                coursesImagesLink={`${imagesLink}${obj.courseId}`}
                genre={obj.genre}
                grade={obj.grade}
                subject={obj.subject}
                price={obj.price}
                priceBonus={obj.priceBonus}
                units={units}
              />
            ))}
          </Suspense>
          </ul>
        </main>
      </div>
      <footer className="l-footer">
        <div className="footer">
          <div className="footer-legal">
            <p>
              © <a href="##">ООО «Физикон Лаб»</a>, 2013-2021
            </p>
            <p>
              <a href="##">Пользовательское соглашение</a>
            </p>
          </div>
          <ul className="footer-social">
            <li>
              <a href="##">
                <img src="https://www.imumk.ru/Content/skins/bubble/images/icons/social_links.svg" />
              </a>
            </li>
          </ul>
          <div className="footer-info">
            <p>
              <a href="##">+7 (499) 322-07-57</a>,{" "}
              <a href="##">info@imumk.ru</a>
            </p>
            <p>
              <a href="##">Правила пользования сайтом</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
