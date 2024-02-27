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
                <li><a
                    href="https://www.mgt.tum.de/programs/summer-school-for-entrepreneurship-digital-innovation-tum-hec"
                    target="_blank" rel="noopener noreferrer">TUM-HEC Entrepreneurship and Digital
                    Innovation (4.1/5)</a></li>
                <li><a
                    href="https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=en/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=2695201&pSemesterNr=193&pLangCode=EN"
                    target="_blank" rel="noopener noreferrer">Business Analytics with Python (WIHN0039)</a>
                </li>
                <li><a
                    href="https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=en/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=1872278&pSemesterNr=192&pLangCode=EN"
                    target="_blank" rel="noopener noreferrer">Deep Reinforcement Learning (WIHN0033)</a>
                </li>
                <li><a href="https://campus.tum.de/tumonline/WBMODHB.wbShowMHBReadOnly?pKnotenNr=1687263&pOrgNr=50878"
                       target="_blank" rel="noopener noreferrer">Mathematics in Natural and Economic Science I
                    (BMT Campus Heilbronn) (WIHN0001)</a></li>
                <li>Ph.D. Seminar on Recent Research Advances in Analytics, Operations, and Supply Chain Management</li>
                <li>PhD Seminar on Advanced Analytics</li>
                <li>PhD Seminar on Robust Optimization</li>
                <li><a
                    href="https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=en/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=1872281&pSemesterNr=192&pLangCode=EN"
                    target="_blank" rel="noopener noreferrer">Advanced Seminar (WIHN0034): Business
                    Analytics and its Application in Healthcare</a></li>
                <li><a
                    href="https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=en/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=2695252&pSemesterNr=193&pLangCode=EN"
                    target="_blank" rel="noopener noreferrer">Advanced Seminar (WIHN0043): Deep
                    Reinforcement Learning</a></li>
                <li><a
                    href="https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=en/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=2695247&pSemesterNr=193&pLangCode=EN"
                    target="_blank" rel="noopener noreferrer">Seminar Operations & Supply Chain Management:
                    Reinforcement Learning (WIHN0042)</a></li>
                <li><a
                    href="https://campus.tum.de/tumonline/pl/ui/$ctx;design=pl;header=max;lang=en/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=2884542&pSemesterNr=194&pLangCode=EN"
                    target="_blank" rel="noopener noreferrer">Seminar Operations & Supply Chain Management:
                    Business Analytics and its Application (MGTHN0057)</a></li>
            </ul>


            {/* Courses Taught at Brunel University London */}
            <h2>Courses Taught at <a href="https://www.brunel.ac.uk/" target="_blank" rel="noopener noreferrer"
                                     className="university-link">Brunel University London</a></h2>
            <ul>
                <li><a href="https://brunel.rl.talis.com/modules/mg5598.html" target="_blank" rel="noopener noreferrer" className="custom-link">MG5598 Technology
                    Management, graduate course, 2019 Fall, (4/5)</a></li>
                <li><a href="https://brunel.rl.talis.com/modules/mg5580.html" target="_blank" rel="noopener noreferrer" className="custom-link">MG5580 Business
                    Modelling and Simulation in Supply Chain, graduate course, 2020 Spring</a></li>
            </ul>


            {/* Courses Taught at University of Science and Technology of China */}
            <h2>Courses Taught at <a href="https://en.ustc.edu.cn/" target="_blank" rel="noopener noreferrer"
                                     className="university-link">University of Science and Technology of China</a></h2>
            <ul>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">MBA0005 Management Statistics, MBA Program, 2013-2017, (4.5/5)</a></li>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">G025100306 Applied Statistical Methods, Master of Finance, 2015-2016</a>
                </li>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">GL017 Big Data Management and Technology, Executive Development Program
                    (EDP), 2017-2018</a></li>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">MBA0034 Management Case Analysis, International MBA Program,
                    2017-2018</a></li>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">EM06403 Operations Management, International Master Program,
                    2012-2014</a></li>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">MBA0023 Production and Operations Management, MBA, 2017-2018</a></li>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">Advance in Research Methods, International doctoral Program, 2017
                    Spring</a></li>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">016115 Quality Management, undergraduate course, 2014 Spring, (4.6/5)</a>
                </li>
                <li><a href="https://catalog.ustc.edu.cn/catalog" target="_blank" rel="noopener noreferrer"
                       className="custom-link">010194 Introduction to Operations Research, undergraduate course, 2014
                    Fall, (4.6/5)</a></li>
            </ul>

        </div>
    );
};

export default TeachingPage;
