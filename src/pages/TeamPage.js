import React from 'react';
import './TeamPage.css';
import Lou from '../assets/images/ZhiyuanLou.png';
import Sun from '../assets/images/MaotungSun.png';
import Zhou from '../assets/images/HanZhou.png';
import Yang from'../assets/images/NanYang.png';
import Du from '../assets/images/WeiyuanDu.jpg';
import Fan from '../assets/images/YichengFan.jpg';
import Gu from '../assets/images/YutianGu.JPEG';
import Liu from '../assets/images/Aijia Liu.jpg';

const TeamPage = () => {
    return (
        <div className="team-page">
            <h1>Professor Jingui Xie's Team</h1>
            <p>Welcome to the team page of Prof. Dr. Jingui Xie, an esteemed associate professor of Business Analytics
                at the Technical University of Munich (TUM) School of Management, TUM Campus Heilbronn. My team is
                composed of talented individuals who contribute significantly to our research projects and academic
                endeavors. Our team's expertise spans various aspects of Business Analytics and Healthcare Management,
                reflecting a diverse range of skills and knowledge.</p>

            <h2>Current doctoral students</h2>
            <div className="doctoral-students-container">
                <div className="doctoral-student">
                    <div className="photo">
                        <img src={Lou} alt="Zhiyuan Lou"/>
                    </div>
                    <div className="info">
                        <h3>Zhiyuan Lou</h3>
                        <div className="contact-interest-container">
                            <div className="contact-info">
                                <h4>CONTACT</h4>
                                <p>📞 +49 (7131) 264 18 818</p>
                                <p>📧 zhiyuan.lou@tum.de</p>
                            </div>
                            <div className="area-of-interest">
                                <h4>AREA OF INTEREST</h4>
                                <li>Robust Optimization and Joint Stochastic Estimation</li>
                            </div>
                        </div>
                        <div className="section">
                            <h4>CURRICULUM VITAE</h4>
                            <p><strong>Career</strong></p>
                            <li>Sept. 2020 – present: Research Assistant at Center of Digital Transformation, TUM School
                                of Management.
                            </li>
                            <li>Aug. 2019 – May 2020: Teaching Assistant at University of Southern California</li>
                            <p><strong>Education</strong></p>
                            <li>2018 – 2020: Master of Science in Financial Engineering, University of Southern
                                California
                            </li>
                            <li>2014 – 2018: Bachelor of Science in Statistics, University of Science and Technology of
                                China
                            </li>
                        </div>
                    </div>
                </div>

                {/* ... 重复上面的结构来添加更多的博士生信息 ... */}
                <div className="doctoral-student">
                    <div className="photo">
                        <img src={Sun} alt="Maotong Sun"/>
                    </div>
                    <div className="info">
                        <h3><a href="https://www.linkedin.com/in/maotong-sun-75b51b12a/?locale=en_US" target="_blank"
                               rel="noopener noreferrer">Maotong Sun</a></h3>
                        <div className="contact-interest-container">
                            <div className="contact-info">
                                <h4>CONTACT</h4>
                                <p>📞 +49 (7131) 264 18 825</p>
                                <p>📧 maotong.sun@tum.de</p>
                            </div>
                            <div className="area-of-interest">
                                <h4>AREA OF INTEREST</h4>
                                <li>Robust Optimization and Joint Stochastic Estimation</li>
                                <li>Machine Learning and its applications in healthcare</li>
                            </div>
                        </div>
                        <div className="section">
                            <h4>CURRICULUM VITAE</h4>
                            <p><strong>Career</strong></p>
                            <li>09/2019-12/2020: Research Assistant at the University of Pittsburgh, USA</li>
                            <li>02/2018-05/2018: Computer Vision Algorithm Engineer Intern at SmartEye, Shenzhen,
                                China
                            </li>
                            <p><strong>Education</strong></p>
                            <li>01/2021-Present: Ph.D. Candidate at the Technical University of Munich, Germany</li>
                            <li>08/2019-12/2020: Master of Science in Industrial Engineering, University of Pittsburgh
                            </li>
                            <li>09/2015-05/2019: Bachelor of Science in Statistics, Chinese University of Hong Kong</li>
                        </div>
                    </div>
                </div>

                <div className="doctoral-student">
                    <div className="photo">
                        <img src={Zhou} alt="Han Zhou"/>
                    </div>
                    <div className="info">
                        <h3><a href="https://www.linkedin.com/in/han-zhou-71186a144/?originalSubdomain=de"
                               target="_blank" rel="noopener noreferrer">Han Zhou</a></h3>
                        <div className="contact-interest-container">
                            <div className="contact-info">
                                <h4>CONTACT</h4>
                                <p>📞 +49 (7131) 264 18 819</p>
                                <p>📧 han.zhou@tum.de</p>
                            </div>
                            <div className="area-of-interest">
                                <h4>AREA OF INTEREST</h4>
                                <li>Heterogeneous treatment effect estimation and causal inference</li>
                                <li>Scheduling under uncertainty</li>
                            </div>
                        </div>
                        <div className="section">
                            <h4>CURRICULUM VITAE</h4>
                            <p><strong>Career</strong></p>
                            <li>02/2021-07/2021: Research Assistant at Singapore Management University, Singapore</li>
                            <li>02/2018-06/2018: Data Analysis Intern at Institute of Automation, Chinese Academy of
                                Sciences, China
                            </li>
                            <p><strong>Education</strong></p>
                            <li>10/2021-Present: Ph.D. Candidate at the Technical University of Munich, Germany</li>
                            <li>09/2018-06/2021: Master of Management Science and Engineering, University of Science and
                                Technology of China, China
                            </li>
                            <li>09/2014-06/2018: Bachelor of Information Management and Information System, Central
                                China Normal University, China
                            </li>
                        </div>
                    </div>
                </div>

                <div className="doctoral-student">
                    <div className="photo">
                        <img src={Yang} alt="Nan Yang"/>
                    </div>
                    <div className="info">
                        <h3>Nan Yang</h3>
                        <div className="contact-interest-container">
                            <div className="contact-info">
                                <h4>CONTACT</h4>
                                <p>📞 +49 (7131) 264 18 817</p>
                                <p>📧 n.yang@tum.de</p>
                            </div>
                            <div className="area-of-interest">
                                <h4>AREA OF INTEREST</h4>
                                <li>Robust Optimization and Joint Stochastic Estimation</li>
                            </div>
                        </div>
                        <div className="section">
                            <h4>CURRICULUM VITAE</h4>
                            <p><strong>Career</strong></p>
                            <li>01/2021-08/2021: Master Thesis Student at BMW Group, Munich</li>
                            <li>001/2020-07/2020: Data Mining Intern at BMW Group, Munich</li>
                            <li>10/2019-12/2019: Machine Learning Intern at Retorio GmbH, Munich</li>
                            <p><strong>Education</strong></p>
                            <li>12/2021-Present: Ph.D. Candidate at Technical University of Munich, Germany</li>
                            <li>010/2018-09/2021: Master of Mathematics, Technical University of Munich, Germany</li>
                            <li>09/2014-06/2018: Bachelor of Statistics, University of Science and Technology of China,
                                China
                            </li>
                        </div>
                    </div>
                </div>

            </div>


            <h2>Student Assistants and Tutors</h2>
            <div className="student-assistants-container">
                <div className="student-assistant">
                    <div className="photo">
                        <img src={Du} alt="Weiyuan Du"/>
                    </div>
                    <div className="info">
                        <h3>Weiyuan Du</h3>
                        <p>TUM Bachelor of Information Engineering</p>
                        <p><a href="mailto:weiyuan.du@tum.de">weiyuan.du@tum.de</a></p>
                        <p>Tutor of Introduction to Python Programming for Data Analytics, maintain the coures exercise
                            on <a href="https://artemis.ase.in.tum.de"
                                  target="_blank" rel="noopener noreferrer"> Artemis</a>.</p>
                    </div>
                </div>
            </div>

            <div className="student-assistants-container">
                <div className="student-assistant">
                    <div className="photo">
                        <img src={Fan} alt="Yicheng Fan"/>
                    </div>
                    <div className="info">
                        <h3>Yicheng Fan</h3>
                        <p>TUM Bachelor in Management and Technology</p>
                        <p><a href="mailto:yicheng.fan@tum.de">yicheng.fan@tum.de</a></p>
                        <p>Responsible for tutorial session materials and additional learning support for
                            Advanced Mathematics course (HN0001).</p>
                    </div>
                </div>
            </div>

            <div className="student-assistants-container">
                <div className="student-assistant">
                    <div className="photo">
                        <img src={Gu} alt="Yutian Gu"/>
                    </div>
                    <div className="info">
                        <h3>Yutian Gu</h3>
                        <p>Universität Heidelberg Bachelor of Medical Information</p>
                        <p><a href="mailto:leona.yutian.gu@gmail.com">leona.yutian.gu@gmail.com</a></p>
                        <p>Assistant in project related literature researching and data processing.</p>
                    </div>
                </div>
            </div>

            <div className="student-assistants-container">
                <div className="student-assistant">
                    <div className="photo">
                        <img src={Liu} alt="Aijia Liu"/>
                    </div>
                    <div className="info">
                        <h3>Aijia Liu</h3>
                        <p>TUM Bachelor of Information Engineering</p>
                        <p><a href="mailto:aijia.liu@tum.de">aijia.liu@tum.de</a></p>
                        <p>Assistant in designing and maintaining the personal website for Prof.Xie.</p>
                    </div>
                </div>
            </div>


            <h2>More About...</h2>
            <p>The team plays a crucial role in advancing our research projects, including those focusing on COVID-19
                Data Analytics, ICU Data Analytics, and Joint Estimation and Optimization. Each member brings unique
                insights and skills, contributing to the rich academic environment at TUM.</p>

            <div className="more-info">
                <p>For more detailed information about individual team members and their roles, please visit the TUM
                    School of Management website.</p>
                <a href="https://www.mgt.tum.de/" target="_blank" rel="noopener noreferrer">TUM School of Management
                    Website</a>
            </div>
        </div>
    );
};

export default TeamPage;
