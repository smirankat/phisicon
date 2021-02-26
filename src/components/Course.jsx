import React, { useState } from "react";

function Course({ courseId, coursesImagesLinks, genre, grade, subject, price, priceBonus, units }) {

  const [tryButton, setTryButton] = useState(true);
  const handleTryButton = (i) => {
   setTryButton(!tryButton)
  }

  return (
    <li className="courses-sci">
      <div className="sci-figure">
        <img src={coursesImagesLinks} alt="" />
      </div>
      <div className="sci-info">
        {/* <p>{courseId}</p> */}
        <p className="sci-title">{subject}</p>
        <p className="sci-grade">{grade.length>1 && grade!=='11' ? grade.match(/^\d+\b/)+'-'+grade.match(/\b\d+$/) : grade} класс{grade.length>1 && grade!=='11' ? 'ы' : ''}</p>
        <p className="sci-genre">{genre}</p>
        <p className="sci-meta">
          <a>Подробнее</a>
        </p>
        <p className="sci-controls">
        <a href="##" onClick={() => handleTryButton()}>
          {(tryButton) ? 'Поробовать' : (units) ? price + ' руб.' : priceBonus + ' бонусов'}
        </a>
        </p>
      </div>
    </li>
  );
}

export default Course;
