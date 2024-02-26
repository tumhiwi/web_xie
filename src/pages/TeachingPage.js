import React from 'react';
import './TeachingPage.css'; // 确保 CSS 文件在同一目录中

const TeachingPage = () => {
    return (
        <div className="teaching-page">
            <h1>Professor Jingui Xie's Teaching Courses</h1>
            <p>
                As a core member of the Munich Data Science Institute and a W3 Professor at the School of Management,
                I have been part of the Technical University of Munich since June 2020. My academic path has taken me
                through tenured positions and visiting professorships across Europe and Asia, enriching the depth and
                breadth of my expertise. Here at TUM, I teach a variety of courses in Business Analytics and related
                fields, emphasizing the integration of predictive information into decision-making, especially within
                the context of healthcare management. My approach to teaching is shaped by a rich tapestry of global
                academic and research experiences, from my tenure at the University of Science and Technology of China
                to my collaborative research at universities around the world.
            </p>
            {/* Academic Positions Section */}
            <h2>Academic Positions</h2>
            <div className="academic-positions">
                <p><span className="position-title">Munich Data Science Institute (core member)</span><br/>
                    School of Management, Technical University of Munich<br/>
                    2020.06 – now: W3 Professor</p>

                <p><span className="position-title">Brunel Business School, Brunel University London</span><br/>
                    2019.11 – 2020.05: Senior Lecturer</p>

                <p><span className="position-title">Cambridge Judge Business School, University of Cambridge</span><br/>
                    2019.01 – 2019.10: Visiting Researcher</p>

                <p><span
                    className="position-title">School of Management, University of Science and Technology of China</span><br/>
                    2016.03 – 2019.10: Associate Professor (tenured)<br/>
                    The First Affiliated Hospital of USTC (management advisory board)<br/>
                    2011.07 – 2016.02: Associate Professor (research-track)</p>

                <p><span
                    className="position-title">USTC-UW Institute for Global Business and Finance Innovation</span><br/>
                    Michael G. Foster School of Business, University of Washington<br/>
                    2017.10: Visiting Professor</p>

                <p><span
                    className="position-title">Lee Kong Chian School of Business, Singapore Management University</span><br/>
                    2017, 2019.12 – 2020.01: Visiting Professor</p>

                <p><span className="position-title">NUS Business School, National University of Singapore</span><br/>
                    2012.12, 2013 (Jan, Aug), 2017 (Jul, Aug, Dec),<br/>
                    2018 (Mar, Jul, Aug, Oct), 2019.08: Visiting Professor</p>

                <p><span className="position-title">Business School, Chinese University of Hong Kong</span><br/>
                    2016.05 – 2016.06: Research Fellow</p>

                <p><span className="position-title">College of Business, City University of Hong Kong</span><br/>
                    2014.01 – 2014.04, 2015. 04 – 2015.08: Research Fellow</p>

                <p><span className="position-title">NUS Business School, National University of Singapore</span><br/>
                    2011.07 – 2012.09: Research Fellow</p>

                <p><span className="position-title">Department of Industrial & Systems Engineering, National University of Singapore</span><br/>
                    2010.04 – 2011.07: Research Fellow</p>

                <p><span className="position-title">Graduate School of Business, Columbia University</span><br/>
                    2008.09 – 2009.04: Chazen Visiting Scholar</p>
            </div>

            <h2>Courses Taught at <a href="https://www.tum.de/" target="_blank" rel="noopener noreferrer"
                                     className="university-link">Technical University of Munich</a></h2>
            <h3>
                <a href="https://campus.tum.de/tumonline/WBMODHB.wbShowMHBReadOnly?pKnotenNr=1687263&pOrgNr=50878"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="course-link">Mathematics in Natural and Economic Science 1</a>
            </h3>
            <p>
                Since joining TUM, I have been teaching this course, which lays the foundation in
                mathematical concepts and their applications in natural sciences and economics. The
                course is designed to enhance analytical thinking and problem-solving skills among students.
            </p>
            <h3>
                <a href="https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=de/WBMODHB.wbShowMHBReadOnly?pKnotenNr=2884557&pOrgNr=50878"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="course-link">Introduction to Reinforcement Learning</a>
            </h3>
            <p>
                This course, which I started teaching recently, introduces students to the core
                principles of reinforcement learning. It is a key area in machine learning and
                artificial intelligence, focusing on how machines learn from their environment to
                achieve specific goals.
            </p>
            <h3>
                <a href="https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=en/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=1872281&pSemesterNr=192&pLangCode=EN"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="course-link">Advanced Seminar Operations & Supply Chain Management: Business Analytics and
                    its Application in Healthcare</a>
            </h3>
            <p>
                In this seminar, I delve into the complexities of operations and supply chain
                management, with a special focus on Business Analytics and its application in healthcare.
                The seminar involves in-depth discussions, case studies, and research projects.
            </p>
            <h3>
                <a href="https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/courses/950670367?$ctx=design=ca;lang=en&$scrollTo=toc_overview"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="course-link">Business Analytics</a>
            </h3>
            <p>
                This course covers a range of topics in business analytics, teaching students how to
                analyze data and make informed business decisions. It includes learning about various
                analytical tools and techniques.
            </p>
            <h3>
                <a href="https://www.mgt.tum.de/center-for-digital-transformation/prof-dr-jingui-xie"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="course-link">PhD Seminar on Advanced Dynamic Programming</a>
            </h3>
            <p>
                Aimed at doctoral students, this seminar explores advanced concepts in dynamic programming.
                It is a mathematical technique used in various fields, including economics, bioinformatics,
                and software engineering.
            </p>
            <p>
                In my teaching, I emphasize the blend of theoretical knowledge and practical application,
                especially in the context of healthcare management and business analytics. My goal is to
                equip students with the skills needed to tackle real-world challenges using data-driven
                approaches.
            </p>
            {/* More Courses Taught at TUM */}
            <h3 className="more-courses">More Courses Taught at TUM</h3>
            <ul>
                <li>TUM-HEC Entrepreneurship and Digital Innovation (4.1/5)</li>
                <li>Business Analytics (WIHN0038)</li>
                <li>Business Analytics with Python (WIHN0039)</li>
                <li>Introduction to Reinforcement Learning (MGTHN0058)</li>
                <li>Deep Reinforcement Learning (WIHN0033)</li>
                <li>Mathematics in Natural and Economic Science I (BMT Campus Heilbronn) (WIHN0001)</li>
                <li>Ph.D. Seminar on Recent Research Advances in Analytics, Operations, and Supply Chain Management</li>
                <li>PhD Seminar on Advanced Dynamic Programming</li>
                <li>PhD Seminar on Advanced Analytics</li>
                <li>PhD Seminar on Robust Optimization</li>
                <li>Advanced Seminar (WIHN0034): Business Analytics and its Application in Healthcare</li>
                <li>Advanced Seminar (WIHN0043): Deep Reinforcement Learning</li>
                <li>Seminar Operations & Supply Chain Management: Reinforcement Learning (WIHN0042)</li>
                <li>Seminar Operations & Supply Chain Management: Business Analytics and its Application (MGTHN0057)
                </li>
            </ul>

            {/* Courses Taught at Brunel University London */}
            <h2>Courses Taught at <a href="https://www.brunel.ac.uk/" target="_blank" rel="noopener noreferrer"
                                     className="university-link">Brunel University London</a></h2>
            <ul>
                <li>MG5598 Technology Management, graduate course, 2019 Fall, (4/5)</li>
                <li>MG5580 Business Modelling and Simulation in Supply Chain, graduate course, 2020 Spring</li>
            </ul>

            {/* Courses Taught at University of Science and Technology of China */}
            <h2>Courses Taught at <a href="https://en.ustc.edu.cn/" target="_blank" rel="noopener noreferrer"
                                     className="university-link">University of Science and Technology of China</a></h2>
            <ul>
                <li>MBA0005 Management Statistics, MBA Program, 2013-2017, (4.5/5)</li>
                <li>G025100306 Applied Statistical Methods, Master of Finance, 2015-2016</li>
                <li>GL017 Big Data Management and Technology, Executive Development Program (EDP), 2017-2018</li>
                <li>MBA0034 Management Case Analysis, International MBA Program, 2017-2018</li>
                <li>EM06403 Operations Management, International Master Program, 2012-2014</li>
                <li>MBA0023 Production and Operations Management, MBA, 2017-2018</li>
                <li>Advance in Research Methods, International doctoral Program, 2017 Spring</li>
                <li>016115 Quality Management, undergraduate course, 2014 Spring, (4.6/5)</li>
                <li>010194 Introduction to Operations Research, undergraduate course, 2014 Fall, (4.6/5)</li>
            </ul>

            <h2>Academic Leadership and Service</h2>
            <p>
                In my roles at the Technical University of Munich and beyond, I have actively contributed to academic
                leadership and scholarly service. As an academic director, committee member, and program director,
                my endeavors focus on shaping future education and research in management sciences. My editorial work
                and involvement in organizing international workshops and conferences further demonstrate my commitment
                to advancing the field of business analytics and operations research.
            </p>
            {/* University Service Subsection */}
            <h3>University Service</h3>
            <p>Technical University of Munich</p>
            <ul>
                <li>Academic director of TUM-HEC summer school, 2021-</li>
                <li>Task Force Heilbronn, 2023 -</li>
                <li>Hiring committee, School of Management, TUM - Marketing/digital marketing (2022), smart
                    manufacturing (2023)
                </li>
                <li>Faculty Tenure-Track Evaluation Committee, TUM</li>
                <li>Undergraduate and graduate students’ admission, 2020 -</li>
            </ul>
            <p>2020 Master program director of Global Supply Chain, Brunel University London</p>
            <p>2016 – 2019 Deputy Head, Department of Management Science, School of Management, USTC</p>
            <p>Co-director, NUS-USTC Business Analytics Center
                (<a href="http://bs-data.ustc.edu.cn/" target="_blank" rel="noopener noreferrer"
                    className="custom-link">http://bs-data.ustc.edu.cn/</a>)
            </p>
            <p>Director, USTC Health Service Research Center
                (<a href="http://bs.ustc.edu.cn/hsrc/" target="_blank" rel="noopener noreferrer"
                    className="custom-link">http://bs.ustc.edu.cn/hsrc/</a>)
            </p>
            <p>2014 – 2017 Faculty Searching Committee, School of Management, USTC</p>

            {/* Academic Service Subsection */}
            <h3>Academic Service</h3>
            <p>Journal Editor</p>
            <ul>
                <li>Queueing Models and Service Management, associate editor, 2022 –</li>
                <li>International Journal of Environmental Research and Public Health, special issue editor, 2022-2023
                </li>
            </ul>
            <p>2023 INFORMS Public Sector Operations Research (PSOR) Best Paper Award Committee</p>
            <p>Research Fund Reviewer</p>
            <ul>
                <li>National Natural Science Foundation of China (NSFC)</li>
                <li>Research Grants Council (RGC) of Hong Kong</li>
            </ul>
            <p>General Chair</p>
            <ul>
                <li>Workshop on Data-Driven Dynamic Resource Management, Heilbronn, Germany, Mar 7-8, 2023</li>
                {/* ... more workshops ... */}
                <li>3rd NUS-USTC workshop on business analytics, Singapore, Sep 28-29, 2018</li>
                <li>2nd NUS-USTC workshop on business analytics, Hefei, China, Apr 9-10, 2017</li>
                <li>1st NUS-USTC workshop on business analytics, Hefei, China, Sep 9-10, 2016</li>
                <li>Third China-Korea Joint Seminar on Sustainable Transportation Systems, Jeju, Korea, Oct. 27-29,
                    2014
                </li>
                <li>International workshop on management science and operations research, Hefei, China, Jul 21-25,
                    2013
                </li>
            </ul>
            <p>Conference Program Committee</p>
            <ul>
                <li>MSOM 2022: Technical University of Munich (TUM). June 26-28, 2022</li>
                {/* ... other conferences ... */}
                <li>EAI VALUETOOLS 2021 - 14th EAI International Conference on Performance Evaluation Methodologies
                    and Tools, October 29-31, 2021, Guangzhou, China (Online), Technical program committee
                </li>
            </ul>
            <p>Conference Session Chair</p>
            <ul>
                <li>The 21st INFORMS Applied Probability Society Conference, June 28-30, 2023 in Nancy, France.</li>
                <ul>
                    <li>Huang, Junfei / Xie, Jingui - Stochastic models and their application</li>
                </ul>
                {/* ... other conference sessions ... */}
                <li>2019 INFORMS Healthcare Conference, July 27 - 29, 2019, Cambridge, Massachusetts</li>
                <li>POMS 30th Annual Conference, Washington D.C., USA, May 2-6th 2019</li>
                <li>POMS 29th Annual Conference, Houston, USA, May 4-7th 2018</li>
                <li>The Tenth POMS-HK International Conference, 5-6 January 2019, City University of Hong Kong</li>
                <li>The Ninth POMS-HK International Conference, 6-7 January 2019, Chinese University of Hong Kong</li>
                <li>The 10th International Workshop on Behavioral Operations Management, Guangzhou, China, December
                    15-16, 2018
                </li>
            </ul>
            <p>Secretary</p>
            <ul>
                <li>Society of Stochastic Service and Operations Management, ORSC, 2015 - 2019</li>
            </ul>
            <p>Member</p>
            <ul>
                <li>Institute for Operations Research and Management Sciences (INFORMS)</li>
                <ul>
                    <li>INFORMS Health Applications Subdivision</li>
                    <li>Applied Probability Society of INFORMS</li>
                </ul>
                <li>Operations Research Society of China (ORSC)</li>
            </ul>
            {/* Journal Reviewer Section */}
            <h3>Journal Reviewer</h3>
            <ul>
                <li>Management Science (MS)</li>
                <li>Manufacturing & Service Operations Management (MSOM)</li>
                <li>Production and Operations Management (POM)</li>
                <li>INFORMS Journal on Computing (JOC)</li>
                <li>European Journal of Operational Research (EJOR)</li>
                <li>IEEE Transactions on Automatic Control (IEEE-TAC)</li>
                <li>IEEE Transactions on Automation Science and Engineering (T-ASE)</li>
                <li>Naval Research Logistics (NRL)</li>
                <li>IIE Transactions (IIE)</li>
                <li>Operations Research Letters (ORL)</li>
                <li>Health Care Management Science (HCMS)</li>
                <li>Journal of Operational Research Society (JORS)</li>
                <li>Journal of Operational Research Society of China (JORC)</li>
                <li>International Journal of Production Research (IJPR)</li>
                <li>International Journal of Management Science (Omega)</li>
                <li>Asia-Pacific Journal of Operational Research (APJOR)</li>
                <li>Queueing Models and Service Management (QMSM)</li>
                <li>Stochastic Models</li>
                <li>Computers & Operations Research</li>
                <li>Risk Analysis</li>
                <li>Health Policy and Planning (HPP)</li>
                <li>Journal of Public Health (JPH)</li>
                <li>International Journal of Hygiene and Environmental Health (IJHEH)</li>
                <li>International Journal of Environmental Research and Public Health (IJERPH)</li>
                <li>Science of the Total Environment (STOTEN)</li>
                <li>Scientific Reports</li>
                <li>Environmental Pollution</li>
                <li>Environmental Research</li>
                <li>One Earth</li>
                <li>Transportation Research Part D: Transport and Environment</li>
                <li>Journal of Industrial and Management Optimization</li>
                <li>Quality Technology and Quantitative Management</li>
                <li>Mathematical Problems in Engineering</li>
                <li>Scientometrics</li>
            </ul>

        </div>
    );
};

export default TeachingPage;
