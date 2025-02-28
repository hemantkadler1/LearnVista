import React from 'react';
import './Testimonials.css';
import user_1 from '../../assets/user-1.jpg';
import user_2 from '../../assets/user-2.jpg';
import user_3 from '../../assets/user-3.jpg';
import user_4 from '../../assets/user-4.jpg';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            
            
            <div className="testimonial">
                <div className="user-info">
                    <img src={user_1} alt='User 1' />
                    <div>
                        <h3>Sandy Sisya</h3>
                        <span>LearnVista, India</span>
                    </div>
                </div>
                <p>"My experience with LearnVista has been truly transformative.
                     The structured learning approach, hands-on projects, and expert
                      guidance have significantly improved my skills.I’ve gained a
                       deeper understanding of programming and data analysis, which has 
                       helped me grow both academically and professionally. I highly 
                       recommend this platform to anyone looking to expand their knowledge!"</p>
            </div>

            <div className="testimonial">
                <div className="user-info">
                    <img src={user_2} alt='User 2' />
                    <div>
                        <h3>Pavan sisya</h3>
                        <span>LearnVista, India</span>
                    </div>
                </div>
                <p>"My experience with LearnVista has been truly transformative.
                     The structured learning approach, hands-on projects, and expert
                      guidance have significantly improved my skills.I’ve gained a
                       deeper understanding of programming and data analysis, which has 
                       helped me grow both academically and professionally. I highly 
                       recommend this platform to anyone looking to expand their knowledge!"</p>
            </div>

            <div className="testimonial">
                <div className="user-info">
                    <img src={user_3} alt='User 3' />
                    <div>
                        <h3>Rathod Sisya</h3>
                        <span>LearnVista, India</span>
                    </div>
                </div>
                <p>"My experience with LearnVista has been truly transformative.
                     The structured learning approach, hands-on projects, and expert
                      guidance have significantly improved my skills.I’ve gained a
                       deeper understanding of programming and data analysis, which has 
                       helped me grow both academically and professionally. I highly 
                       recommend this platform to anyone looking to expand their knowledge!"</p>
            </div>

            <div className="testimonial">
                <div className="user-info">
                    <img src={user_4} alt='User 4' />
                    <div>
                        <h3>Aunty</h3>
                        <span>LearnVista, India</span>
                    </div>
                </div>
                <p>"My experience with LearnVista has been truly transformative.
                     The structured learning approach, hands-on projects, and expert
                      guidance have significantly improved my skills.I’ve gained a
                       deeper understanding of programming and data analysis, which has 
                       helped me grow both academically and professionally. I highly 
                       recommend this platform to anyone looking to expand their knowledge!"</p>
            </div>
        </div>
    );
};

export default Testimonials;
