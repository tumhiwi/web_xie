import React from 'react';
import './TeamPage.css';
import Lou from '../assets/images/ZhiyuanLou.png';
import Sun from '../assets/images/MaotungSun.png';
import Zhou from '../assets/images/HanZhou.png';
import Yang from'../assets/images/NanYang.png';

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
            <p></p>
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
                        <h3>Maotong Sun</h3>
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
                        <h3>Han Zhou</h3>
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

            <h2>Doctoral Alumni</h2>
            <ul>
                <li>Yongjian Zhu, 2018 – 2023, Assistant Professor at Nanjing University</li>
                <li>Haji Suleman Ali, 2016 – 2022, Assistant Professor at University of Management and Technology
                    Lahore
                </li>
                <li>Ning Wang, 2016 – 2021, Haitong Securities Co Ltd</li>
                <li>Yaolei Wang, 2015 – 2020, Associate professor at University of Science and Technology of China</li>
                <li>Taozeng Zhu, 2014 – 2019, Assistant Professor at Dongbei University of Finance and Economics</li>
                <li>Yiming Fan, 2013 – 2018, Postdoc Researcher at University of Science and Technology of China</li>
                <li>Chudhery M.A. Zahid, 2014 – 2018, Associate Professor at University of Science and Technology of
                    China
                </li>
                <li>Runkang Ding, 2014 – 2017, Assistant Professor at Changzhi Medical College</li>
            </ul>

            <h3>Awards and Honors</h3>
            <ul>
                <li>Runkang Ding, National Scholarship for Doctoral Students 2016</li>
                <li>Fan Yiming, USTC Smart Manufacturing Shunde Scholarship 2017</li>
                <li>Zhu Taozeng, USTC Smart Manufacturing Shunde Scholarship 2018</li>
                <li>Wang Yaolei, National Scholarship for Doctoral Students 2019</li>
                <li>Wang Yaolei, USTC Excellent Doctoral Dissertation Nomination 2021</li>
                <li>Wang Ning, National Scholarship for Postgraduate Students 2018</li>
            </ul>

            <h2>Visiting Doctoral Students</h2>
            <ul>
                <li>Mohamed El Habib MESSABIS, Ecole des Mines de Saint Etienne, March 2023 to June 2023, "Robust
                    capacity planning under crisis," GFA.
                </li>
                <li>Ruilu Huang, Central South University, December, 2021 to December, 2022, "machine learning and its
                    application in healthcare management," CSC.
                </li>
                <li>Ye Qiu, Hefei University of Technology, October, 2021 to October, 2022, "online healthcare and
                    data-driven decision making for healthcare operations," CSC.
                </li>
            </ul>

            <h2>Master Students and Thesis</h2>
            <p>2018 - 2021. Han Zhou, Yongjian Zhu.</p>
            <p>2017 - 2020. Yue Tang, Yan Li, Mairehaba Maimaitiming, Can Muderrisoglu, Arun Bagri.</p>
            <p>2016 - 2019. Haijun Feng, Jie Teng, Guang Chen.</p>
            <p>2015 - 2018. Ji Lou, Yue Xia.</p>
            <p>2014 - 2017. Jiayi Liu, Yunjiao Mao, Lijuan Zhou.</p>
            <p>2013 - 2016. Panpan Li, Gang Liu, Rongrong Hu, Jiamian Huo.</p>
            <p>2012 - 2015. Xinyin Zhao.</p>

            <h2>Undergraduate Thesis</h2>
            <p>2018 Ruiqin Wang, Suting Liu, Zhiyang Zheng, Hanyin Jiang</p>
            <p>2017 Jiayi Shen, Zhanyue Wang, Mairehaba Maimaitiming</p>
            <p>2016 Guixia Zhang, Ziyu Liu, Zhengwei Huang</p>
            <p>2015 Junyi Liu</p>
            <p>2014 Sean Byrn, visiting student from Lehigh University, summer project: simulation in emergency
                department.</p>


            {/*<h2>Student Assistants and Tutors</h2>*/}
            {/*<p>Information about student assistants and tutors is not available on the website.</p>*/}


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
