import React from 'react';
import './HomePage.css'; // 确保 CSS 文件路径正确
import professorImage from '../assets/images/professorImage.jpg';
import googleScholarIcon from '../assets/images/googleScholar.png';
import linkedInIcon from '../assets/images/linkedIn.png';
import orcidIcon from '../assets/images/orcid.png';
import ssrnIcon from '../assets/images/ssrn.png';
import RGIcon from '../assets/images/ReaserchGate.png';

const HomePage = () => {
    return (
        <div className="home-container">
            <img src={professorImage} alt="Professor" className="professor-image"/>
            <h1>Welcome!</h1>
            <p>
                Welcome to My Personal Website!
                I am
                <a
                    href="https://www.mgt.tum.de/center-for-digital-transformation/prof-dr-jingui-xie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > Professor Jingui Xie
                </a>,
                currently holding the esteemed position of W3 Professor at the
                <a
                    href="https://www.mgt.tum.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > Technical University of Munich (TUM) School of Management
                </a>, a role I have proudly served since June 2020.
                My academic journey and professional dedication are deeply rooted in
                <a
                    href="https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/courses/950670367?$ctx=design=ca;lang=en&$scrollTo=toc_overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > Business Analytics and Healthcare Management
                </a>,
                where I explore the transformative power of data analytics and Queueing Models in enhancing
                healthcare systems, particularly in contexts like air pollution and the COVID-19 pandemic.
            </p>

            <p>
                Before joining
                <a
                    href="https://www.tum.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > TUM
                </a>,
                I held several notable positions in academia. I was a Senior Lecturer at Brunel Business School,
                <a
                    href="https://www.brunel.ac.uk/business-school"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > Brunel University London
                </a>, from November 2019 to May 2020. Prior to that, I served as a Visiting
                Researcher at Cambridge Judge Business School,
                <a
                    href="https://www.cam.ac.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > University of Cambridge
                </a>, and as an Associate Professor
                (tenured) at the School of Management,
                <a
                    href="https://en.ustc.edu.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > University of Science and Technology of China
                </a>. My international experience is further enriched by my tenure as a Visiting Professor at various
                prestigious institutions, including the
                <a
                    href="https://www.washington.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > University of Washington
                </a>,
                <a
                    href="https://www.smu.edu.sg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > Singapore Management University
                </a>, and the
                <a
                    href="https://nus.edu.sg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > National University of Singapore
                </a>.
            </p>

            <p>
                My research projects are diverse, significantly contributing to areas such as
                <a
                    href="https://www.sciencedirect.com/science/article/pii/S004896972032221X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > COVID-19 Data Analytics
                </a>,
                <a
                    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3397530"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > ICU Data Analytics
                </a>,
                and
                <a
                    href="https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2020.3898"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > Joint Estimation and Optimization
                </a>.
                These projects aim to develop efficient
                healthcare resource allocation models and enhance decision-making processes in critical healthcare
                settings. My work has been recognized and published in several UTD24/FT50 Journals, including
                <a
                    href="https://pubsonline.informs.org/journal/opre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > Manufacturing & Service Operations Management
                </a> and
                <a
                    href="https://journals.sagepub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link" /* 应用自定义样式 */
                > Production and Operations Management
                </a>. These publications reflect my commitment to advancing the field through rigorous research
                and innovative methodologies.
            </p>

            <p>
                My role at TUM as an educator and mentor in business analytics and healthcare management is dedicated
                to nurturing the next generation of professionals. I emphasize a teaching philosophy that blends
                theoretical foundations with practical applications, ensuring students understand key concepts and
                their real-world applications. My commitment to both teaching and research has been recognized through
                several prestigious awards. These include the Outstanding 2021 Project Performance Evaluation from the
                National Natural Science Foundation of China, the First-Place Prize at the Ninth POMS-HK International
                Conference, and the “Zhang Zhong-Zhi” Young Faculty Teaching Award from the University of Science and
                Technology of China. These honors reflect not just my personal achievements but also the collaborative
                efforts of my students and colleagues. Together, we strive to advance a future driven by data-informed
                decision-making and innovative healthcare solutions.
            </p>


            {/* 底部的学术平台链接部分 */}
            <div className="academic-links-container">
                <p className="follow-text">FOLLOW JINGUIXIE!</p>
                <div className="academic-links">
                    <a href="https://scholar.google.com/citations?user=E5UAxjkAAAAJ&hl=en" target="_blank"
                       rel="noopener noreferrer">
                        <img src={googleScholarIcon} alt="Google Scholar" className="academic-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jingui-xie-349b7238/?originalSubdomain=de" target="_blank"
                       rel="noopener noreferrer">
                        <img src={linkedInIcon} alt="LinkedIn" className="academic-icon"/>
                    </a>
                    <a href="https://orcid.org/0000-0003-4100-2339" target="_blank" rel="noopener noreferrer">
                        <img src={orcidIcon} alt="ORCID" className="academic-icon"/>
                    </a>
                    <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=4688297" target="_blank"
                       rel="noopener noreferrer">
                        <img src={ssrnIcon} alt="SSRN" className="academic-icon"/>
                    </a>
                    <a href="https://www.researchgate.net/profile/Jingui-Xie" target="_blank"
                       rel="noopener noreferrer">
                        <img src={RGIcon} alt="ResarchGate" className="academic-icon"/>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
