import React, {useContext} from 'react';
import { ThemeContext } from '../components/ThemeContext';


function WorkExperience () {
  const { theme } = useContext(ThemeContext);

  return (
      <>
       <div class="row mt-3 ">
            <div class="col-md">
            <div className={`card ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <div className={`card-body ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
            <h2 className={`card-title ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Work Experience</h2>
                        <ul class="list-unstyled">
                            <li>
                                <h6 class="fw-bold">Senior Web Developer / Digital Agency 2016-2020</h6>
                                <p>Phasellus et tellus iaculis, interdum augue vel, luctus nulla. Aenean viverra,
                                    magna
                                    a
                                    ultricies
                                    elementum, dui mi tristique ligula, non euismod leo mauris ac metus.</p>
                            </li>
                            <li>
                                <h6 class="fw-bold">Web Developer / Big Firm 2010-2015</h6>
                                <p>Mauris volutpat, ex condimentum fringilla imperdiet, nulla turpis semper diam, ac
                                    semper
                                    risus urna quis
                                    libero. Fusce non nunc quam. Ut vulputate, magna eget molestie luctus, elit est
                                    posuere
                                    lorem, quis
                                    dapibus dolor felis id mi.</p>
                            </li>
                            <li>
                                <h6 class="fw-bold">Junior Web Developer / Websites 'R' Us 2004-2009</h6>
                                <p>Sed eu turpis placerat, posuere odio a, viverra velit. Pellentesque habitant
                                    morbi
                                    tristique
                                    senectus et
                                    netus et malesuada fames ac turpis egestas.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default WorkExperience;