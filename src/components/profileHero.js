import React from 'react'

const ProfileHero = () => {
    return (
        <div className='hero-section'>
            <div className='hero-inner-section'>
                <div className='parichay-container'>
                    <div className='parichay'>
                        Hi! I’m <br/>
                        Web Developer<br/>
                        & <br/>
                        Designer
                    </div>
                    <button className='download-btn'>
                        Download My Resume
                    </button>
                </div>
                <div className='profile-section'>
                    {/* <div className='profile-image-frame'>
                        <div className='down-frame'></div>
                        <div className='up-frame'></div>
                        <div className='image-frame'>
                            <img className='image-class' src='./shubham.png' alt='Shubham'/>
                        </div>
                    </div>
                    <div className='skill-bubble skill-bubble-react'>
                        <img className='skill-img' src="./logo512.png" alt="React JS"/>
                        <span>React JS</span>
                    </div>
                    <div className='skill-bubble skill-bubble-node'>
                        <img className='skill-img' src="./nodejs.png" alt="Node JS"/>
                        <span>Node JS</span>
                    </div>
                    <div className='skill-bubble skill-bubble-express'>
                        <img className='skill-img' src="./express.png" alt="Express JS"/>
                        <span>Express JS</span>
                    </div>
                    <div className='skill-bubble skill-bubble-html'>
                        <img className='skill-img' src="./html.png" alt="HTML"/>
                        <span>HTML</span>
                    </div>
                    <div className='skill-bubble skill-bubble-css'>
                        <img className='skill-img' src="./css.png" alt="CSS"/>
                        <span>CSS</span>
                    </div> */}
                    <img src='hero-image.png' alt='Hero Image'/>
                </div>
            </div>

        </div>
    )
}

export default ProfileHero
