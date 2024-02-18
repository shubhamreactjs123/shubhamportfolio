import React, { useState } from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Features = () => {
    console.log(2/0)
    // const labels = ["HTML", "CSS", "Java Script", "React JS", "Redux", "Express JS", "Node JS"];
    const experienceDetails = [
        {
            job_duration: 'July 2022 to November 2022',
            company_name: 'Techsell India Infotech (TSI) Pvt Ltd',
            job_description: [
                {
                    journey_title: '3 Month Internship Journey',
                    journey_details: 'During the internship I developed Admin Panels and a Color Prediction App',
                },
                {
                    journey_title: '2 Month Job Journey',
                    journey_details: 'During the Job I developed Admin Panels and one page Landing Websites.',
                },
            ]
        },
        {
            job_duration: 'December 2022 to Present',
            company_name: 'Brimming Grace Capital Pvt Ltd',
            job_description: [
                {
                    journey_title: '1+ Years of Job Journey',
                    journey_details: 'I developed Super Admin Panel & Company Admin Panel with different modules using multiple concepts and technologies. Still I’m working on this product which is using an excellent technology.',
                },
            ]
        }
    ]
    const skillsDetails = [
        {
            skill: "HTML",
            level: "90%",
            description: "I have upper medium knowledge in HTML5."
        },
        {
            skill: "CSS",
            level: "90%",
            description: "I have upper medium knowledge in CSS3."
        },
        {
            skill: "Java Script",
            level: "75%",
            description: "I have medium knowledge in Java Script."
        },
        {
            skill: "React JS",
            level: "80%",
            description: "I have upper medium knowledge in React JS."
        },
        {
            skill: "Redux",
            level: "60%",
            description: "I have medium knowledge in Redux."
        },
        {
            skill: "Express JS",
            level: "30%",
            description: "I have lower medium knowledge in Express JS."
        },
        {
            skill: "Node JS",
            level: "25%",
            description: "I have lower medium knowledge in Node JS."
        },
        {
            skill: "Figma",
            level: "90%",
            description: "I have upper medium knowledge in Figma."
        },
        {
            skill: "Next.js",
            level: "50%",
            description: "I have medium knowledge in Next.js."
        },
    ]

    const [chartData, setChartData] = useState({
        labels: ["HTML5", "CSS3", "Java Script", "React JS", "Redux", "Express JS", "Node JS", "Figma", "Next JS"],
        datasets: [
            {
                label: "My Skills",
                data: [90, 90, 75, 80, 60, 30, 25, 90, 50, 100],
                backgroundColor: [
                    "#363062",
                    "#363062",
                    "#363062",
                    "#363062",
                    "#363062",
                    "#363062",
                    "#363062",
                    "#363062",
                ],
                // borderRadius: 10,
                borderSkipped: false
            }
        ]
    })
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        elements: {
            bar: {
                backgroundColor: '#363062',
                borderColor: '#F5E8C7',
                borderRadius: {
                    topLeft: 10,
                    topRight: 10,
                    bottomLeft: 0,
                    bottomRight: 0,
                },
                borderSkipped: 'bottom',
            }
        },

    }
    const [tabular, setTebular] = useState(false)
    const handleTabular = () => {
        setTebular(!tabular)
    }
    return (
        <div >
            <div className='feature-section'>
                <div className='main-title-forever'>Features</div>
                <div className='feature-inner-section'>
                    <div className='feature-container'>
                        <div className='feature-icon-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="120" viewBox="0 0 196 168" fill="none">
                                <path d="M43.0271 0H100.842H158.657L196 79.1111L158.657 168H100.842H43.0271L0 79.1111L43.0271 0Z" fill="#F5E8C7" />
                                <path d="M109.5 54C117.456 54 125.087 57.1607 130.713 62.7868C136.339 68.4129 139.5 76.0435 139.5 84C139.5 91.9565 136.339 99.5871 130.713 105.213C125.087 110.839 117.456 114 109.5 114C101.544 114 93.9129 110.839 88.2868 105.213C82.6607 99.5871 79.5 91.9565 79.5 84C79.5 76.0435 82.6607 68.4129 88.2868 62.7868C93.9129 57.1607 101.544 54 109.5 54ZM109.5 61.5C103.533 61.5 97.8097 63.8705 93.5901 68.0901C89.3705 72.3097 87 78.0326 87 84C87 89.9674 89.3705 95.6903 93.5901 99.9099C97.8097 104.129 103.533 106.5 109.5 106.5C115.467 106.5 121.19 104.129 125.41 99.9099C129.629 95.6903 132 89.9674 132 84C132 78.0326 129.629 72.3097 125.41 68.0901C121.19 63.8705 115.467 61.5 109.5 61.5ZM105.75 69H111.375V83.175L120.112 91.9125L116.138 95.8875L105.75 85.5V69ZM60.75 106.5C59.7554 106.5 58.8016 106.105 58.0983 105.402C57.3951 104.698 57 103.745 57 102.75C57 101.755 57.3951 100.802 58.0983 100.098C58.8016 99.3951 59.7554 99 60.75 99H75.1125C76.275 101.662 77.775 104.175 79.5 106.5H60.75ZM64.5 87.75C63.5054 87.75 62.5516 87.3549 61.8483 86.6516C61.1451 85.9484 60.75 84.9946 60.75 84C60.75 83.0054 61.1451 82.0516 61.8483 81.3484C62.5516 80.6451 63.5054 80.25 64.5 80.25H72.1875L72 84L72.1875 87.75H64.5ZM68.25 69C67.2554 69 66.3016 68.6049 65.5983 67.9016C64.8951 67.1984 64.5 66.2446 64.5 65.25C64.5 64.2554 64.8951 63.3016 65.5983 62.5984C66.3016 61.8951 67.2554 61.5 68.25 61.5H79.5C77.775 63.825 76.275 66.3375 75.1125 69H68.25Z" fill="#363062" />
                            </svg>
                        </div>
                        <div className='feature-heading'>
                            Fast
                        </div>
                        <p className='feature-description'>
                            Fast load times and lag free interaction, my highest priority.
                        </p>
                    </div>
                    <div className='feature-container'>
                        <div className='feature-icon-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="120" viewBox="0 0 196 168" fill="none">
                                <path d="M43.0271 0H100.842H158.657L196 79.1111L158.657 168H100.842H43.0271L0 79.1111L43.0271 0Z" fill="#F5E8C7" />
                                <path d="M71.3333 60.6667V94H88V80.6667C88 78.8986 88.7024 77.2029 89.9526 75.9526C91.2029 74.7024 92.8985 74 94.6666 74H111.333C113.101 74 114.797 74.7024 116.047 75.9526C117.298 77.2029 118 78.8986 118 80.6667V94H124.667V60.6667H71.3333ZM58 107.333V100.667H71.3333C69.5652 100.667 67.8695 99.9643 66.6193 98.714C65.369 97.4638 64.6667 95.7681 64.6667 94V60.6667C64.6667 58.8986 65.369 57.2029 66.6193 55.9526C67.8695 54.7024 69.5652 54 71.3333 54H124.667C126.435 54 128.13 54.7024 129.381 55.9526C130.631 57.2029 131.333 58.8986 131.333 60.6667V94C131.333 95.7681 130.631 97.4638 129.381 98.714C128.13 99.9643 126.435 100.667 124.667 100.667H138V107.333H118C118 109.101 117.298 110.797 116.047 112.047C114.797 113.298 113.101 114 111.333 114H94.6666C92.8985 114 91.2029 113.298 89.9526 112.047C88.7024 110.797 88 109.101 88 107.333H58ZM96.3333 107.333C95.8913 107.333 95.4674 107.509 95.1548 107.821C94.8422 108.134 94.6666 108.558 94.6666 109C94.6666 109.442 94.8422 109.866 95.1548 110.179C95.4674 110.491 95.8913 110.667 96.3333 110.667C96.7753 110.667 97.1993 110.491 97.5118 110.179C97.8244 109.866 98 109.442 98 109C98 108.558 97.8244 108.134 97.5118 107.821C97.1993 107.509 96.7753 107.333 96.3333 107.333ZM109.667 107.333C109.225 107.333 108.801 107.509 108.488 107.821C108.176 108.134 108 108.558 108 109C108 109.442 108.176 109.866 108.488 110.179C108.801 110.491 109.225 110.667 109.667 110.667C110.109 110.667 110.533 110.491 110.845 110.179C111.158 109.866 111.333 109.442 111.333 109C111.333 108.558 111.158 108.134 110.845 107.821C110.533 107.509 110.109 107.333 109.667 107.333ZM101.333 107.333V110.667H104.667V107.333H101.333ZM94.6666 80.6667V104H111.333V80.6667H94.6666Z" fill="#363062" />
                            </svg>
                        </div>
                        <div className='feature-heading'>
                            Responsive
                        </div>
                        <p className='feature-description'>
                            My layouts will work on any device, big or small.
                        </p>
                    </div>
                    <div className='feature-container'>
                        <div className='feature-icon-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="120" viewBox="0 0 196 168" fill="none">
                                <path d="M43.0271 0H100.842H158.657L196 79.1111L158.657 168H100.842H43.0271L0 79.1111L43.0271 0Z" fill="#F5E8C7" />
                                <path d="M68 84H71.3333M98 54V57.3333M124.667 84H128M76.6667 62.6667L79 65M119.333 62.6667L117 65M90.3333 100.667H105.667M88 97.3333C85.2016 95.2345 83.1344 92.3084 82.0914 88.9695C81.0484 85.6305 81.0824 82.0481 82.1886 78.7295C83.2948 75.411 85.4171 72.5246 88.2548 70.4793C91.0926 68.434 94.502 67.3333 98 67.3333C101.498 67.3333 104.907 68.434 107.745 70.4793C110.583 72.5246 112.705 75.411 113.811 78.7295C114.918 82.0481 114.952 85.6305 113.909 88.9695C112.866 92.3084 110.798 95.2345 108 97.3333C106.699 98.6216 105.719 100.198 105.14 101.935C104.56 103.673 104.398 105.522 104.667 107.333C104.667 109.101 103.964 110.797 102.714 112.047C101.464 113.298 99.7681 114 98 114C96.2319 114 94.5362 113.298 93.286 112.047C92.0357 110.797 91.3333 109.101 91.3333 107.333C91.6015 105.522 91.4395 103.673 90.8604 101.935C90.2813 100.198 89.3014 98.6216 88 97.3333Z" stroke="#363062" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='feature-heading'>
                            Intuitive
                        </div>
                        <p className='feature-description'>
                            Strong preference for easy to use, intuitive UX/UI.
                        </p>
                    </div>
                    <div className='feature-container'>
                        <div className='feature-icon-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="120" viewBox="0 0 196 168" fill="none">
                                <path d="M43.0271 0H100.842H158.657L196 79.1111L158.657 168H100.842H43.0271L0 79.1111L43.0271 0Z" fill="#F5E8C7" />
                                <path d="M85.1841 92.823L81.9411 89.5799L71.8877 92.7905H71.5634C71.4053 92.8004 71.247 92.7765 71.0988 92.7206C70.9507 92.6647 70.8161 92.578 70.7039 92.4662L68.3527 90.1475C68.1628 89.9668 68.0413 89.7259 68.0088 89.4658C67.9763 89.2057 68.0348 88.9424 68.1744 88.7205L70.9147 84.0019C72.6121 81.0971 74.9801 78.6408 77.8208 76.8382C80.6615 75.0356 83.8924 73.9391 87.2434 73.6404L91.281 73.2837M91.281 73.2837C93.6268 70.4947 95.7888 68.1056 97.7671 66.1166C101.521 62.1407 106.001 58.9207 110.966 56.6307C116.027 54.739 121.408 53.8522 126.808 54.0201C127.135 54.023 127.448 54.1506 127.684 54.3768C127.796 54.4799 127.886 54.6052 127.947 54.7448C128.009 54.8843 128.041 55.0351 128.041 55.1875C128.151 60.604 127.187 65.9885 125.203 71.0298C122.972 76.0095 119.788 80.5045 115.831 84.2613C113.836 86.272 111.436 88.4286 108.664 90.7474L108.307 94.7688C108.016 98.1182 106.928 101.349 105.134 104.193C103.34 107.036 100.892 109.409 97.9941 111.114L93.3079 113.854C93.123 113.951 92.9169 114.002 92.7079 114C92.3976 113.994 92.0993 113.879 91.8647 113.676L89.5135 111.308C89.3617 111.163 89.2539 110.978 89.2022 110.775C89.1506 110.571 89.1574 110.357 89.2217 110.157L92.3512 99.9901M91.281 73.2837L82.0221 89.661M92.3512 99.9901L89.2055 96.8443M92.3512 99.9901L108.729 90.7474M119.755 68.9218C119.759 67.1614 119.065 65.4711 117.825 64.2218C116.585 62.9724 114.899 62.2659 113.139 62.2574C112.237 62.2128 111.336 62.352 110.49 62.6664C109.643 62.9808 108.87 63.464 108.216 64.0864C107.562 64.7089 107.041 65.4578 106.685 66.2876C106.329 67.1174 106.146 68.0108 106.146 68.9137C106.146 69.8165 106.329 70.71 106.685 71.5398C107.041 72.3696 107.562 73.1185 108.216 73.7409C108.87 74.3634 109.643 74.8465 110.49 75.1609C111.336 75.4754 112.237 75.6145 113.139 75.57C114.887 75.5726 116.565 74.8849 117.809 73.6566C118.435 73.0393 118.928 72.3013 119.26 71.4874C119.592 70.6734 119.755 69.8006 119.739 68.9218H119.755Z" stroke="#363062" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M80.1573 101.839C86.6434 100.639 98.1562 89.8394 99.502 82.4939C92.1079 83.9046 81.3086 95.3525 80.1573 101.839Z" stroke="#363062" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='feature-heading'>
                            Dynamic
                        </div>
                        <p className='feature-description'>
                            Websites don't have to be static, I love making pages come to life.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className='skill-section'>
                <div className='experience-container'>
                    <div className='main-title-forever'>My Experience</div>
                    {
                        experienceDetails?.map((item, i) => {
                            let lastCircleOn = false;
                            if (experienceDetails?.length - 1 === i) {
                                lastCircleOn = true
                            }
                            return (
                                <div key={i} className='experience-inner'>
                                    <div key={i} className='stepper-exp'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                                            <circle cx="37" cy="37" r="37" fill="#F5E8C7" />
                                        </svg>
                                        <div className='khambha'></div>
                                        {
                                            lastCircleOn &&
                                            <svg style={{ marginTop: "-4px" }} xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                                                <circle cx="37" cy="37" r="37" fill="#F5E8C7" />
                                            </svg>
                                        }
                                    </div>
                                    <div className='exp-details'>
                                        <h3>{item?.job_duration}</h3>
                                        <p style={{ color: "#363062" }}>{item?.company_name}</p>
                                        {
                                            item?.job_description?.map((job, ind) => {
                                                return (
                                                    <>
                                                        <h5 style={{
                                                            borderLeft: "3px solid #F5E8C7",
                                                            paddingLeft: "5px",
                                                            borderRadius: "3px"
                                                        }} key={ind}>{job?.journey_title}</h5>
                                                        <p>{job?.journey_details} </p>
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='skill-container'>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}>
                        <div className='main-title-forever'>My Skills</div>
                        <div style={{
                            fontWeight: '600',
                            color: '#363062',
                            borderLeft: '3px solid #F5E8C7',
                            padding: "5px",
                            cursor: "pointer",
                            backgroundColor: "#36306229",
                            borderRadius: "5px",
                            userSelect: "none"
                        }}
                            onClick={handleTabular}>{tabular ? 'See Skills in Graphical Form' : 'See Skills in Tabular Form'}</div>
                    </div>
                    <div className='skills-graph-container'>
                        {
                            !tabular &&
                            <Bar
                                data={chartData}
                                options={options}
                            />
                        }
                        {
                            tabular &&
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Skill</th>
                                        <th>Knowledge Level (%)</th>
                                        <th>Short Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        skillsDetails?.map((item, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{i + 1}.</td>
                                                    <td>{item?.skill}</td>
                                                    <td>{item?.level}</td>
                                                    <td>{item?.description}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
