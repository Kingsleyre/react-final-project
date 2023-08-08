import React, {useContext} from 'react';
import { ThemeContext } from '../components/ThemeContext';


function Education (){
  const { theme } = useContext(ThemeContext);
  return (
    <>
       <div class="row mt-3 ">
      <div class="col-md">
      <div className={`card ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <div className={`card-body ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
            <h2 className={`card-title ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Education</h2>
                        <ul class="list-unstyled">
                            <li>
                                <h6 class="fw-bold">Computer Science / University Name 2001-2004</h6>
                                <p>Sed et ornare quam. Cras scelerisque ex ultricies neque sodales tristique. Phasellus
                                    mattis
                                    dui ut enim
                                    tincidunt auctor. Maecenas euismod, orci eget varius elementum, nunc massa dignissim
                                    sapien,
                                    ac sagittis
                                    libero dolor vitae elit.</p>
                            </li>
                            <li>
                                <h6 class="fw-bold">Testville High School 1994-2000</h6>
                                <p>Aenean nisl enim, dictum in odio ut, suscipit efficitur diam. Nam nec velit a odio
                                    porta
                                    efficitur nec at
                                    magna.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default Education;