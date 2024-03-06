import React from 'react';
import './TalksPage.css';
import DDRM from'../assets/images/DDRM.jpg';
const TalksPage = () => {
    const pdfDownloadUrl = "https://www.mi.imati.cnr.it/ettore/attached/DDRM.pdf";

    return (
        <div className="talking-page">
            <h1>Professor Jingui Xie's Talks</h1>
            <p>Welcome to my TalkingPage, where I share the essence of my engagements with global academic institutions
                through seminars and invited talks. These sessions have offered platforms for me to disseminate my
                research findings, particularly on the optimization of healthcare processes and analytics in
                resource-constrained environments. From discussing the critical decisions in intensive care units
                to addressing the operational challenges of emergency rooms, each talk aims to spark innovation and
                provoke thought in the quest for efficiency and efficacy in healthcare management.</p>
            <h2>Reflections on a Key Segment of Digital Transformation</h2>
            <p>
                In this engaging segment from Research at the Center for Digital Transformation, you can explore key
                concepts and innovative ideas of Data-driven Decision Making. This particular excerpt, running from the
                1-minute mark to the
                2-minute mark of the video, offers a concise yet insightful glimpse into the topic. Watch as myself
                delves into the subject, providing valuable knowledge and perspectives.
            </p>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TK5NwMYWsSo?start=60&end=120"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <h2>Media</h2>
            <ul>
                <li>
                    Jingui Xie, Xiaolan Xie:
                    <a href="https://www.future-industry.org/ddrm/" target="_blank" rel="noopener noreferrer"> DDRM:
                        Data-Driven Dynamic Resource Management for Random Time-Varying Demands in the Context of
                        Covid-19 and future crises
                    </a>
                </li>
                <li>
                    Jingui Xie:
                    <a href="https://www.chn.tum.de/stories/mindshift-online/mindshift-article/how-data-science-and-analytics-can-make-healthcare-more-resilient"
                       target="_blank" rel="noopener noreferrer"> "How Data Science and Analytics Can Make Healthcare
                        More Resilient,"</a> TUM Campus Heilbronn October 26, 2023.
                </li>
                <li>
                    Tang, Y., Jiang, H., Xie, J., Zheng, Z., Loke, C.Y. and Goh, B.K.:  <a
                    href="https://www.jbs.cam.ac.uk/2023/saving-hospitals-money-by-reducing-no-shows/" target="_blank"
                    rel="noopener noreferrer">"Saving hospitals money by reducing no-shows,"</a> Cambridge Judge Business School News
                    & Insight, 2023.
                </li>
            </ul>

            {/* 新的部分开始 */}
            <h2>Workshop</h2>
            <div className="pdf-section">
                <a href={pdfDownloadUrl} target="_blank" rel="noopener noreferrer" download>
                    <img src={DDRM} alt="DDRM PDF Cover" className="pdf-cover-image"/>
                    <p>DDRM: Data-Driven Dynamic Resource Management for Random Time-Varying Demands in the Context of Covid-19 and future crises (Download PDF)</p>
                </a>
            </div>
            {/* 新的部分结束 */}

            <h2>Seminar and Invited Talks</h2>
            <ul>
                <li><strong>Extubation Decision Making with Predictive Information for Mechanically Ventilated Patients
                    in ICU</strong> - University of Southampton (2021), Tsinghua University (2021), USTC (2021), USST
                    (2022), SYSU (2022)
                </li>
                <li><strong>Analytics of Bed Shortages</strong> - University of Waterloo (2018)</li>
                <li><strong>Optimal control of an ER Triage and Treatment Process</strong> - City University of Hong
                    Kong, 21 Feb 2014; Chinese University of Hong Kong, 7 Mar 2014
                    <ul>
                        <li><a
                            href="http://seminar.se.cuhk.edu.hk/content/optimal-control-emergency-room-triage-and-treatment-process">CUHK
                            Seminar Details</a></li>
                        <li><a href="http://www.cb.cityu.edu.hk/ms/resarch/seminars/">CityU Seminar Details</a></li>
                    </ul>
                </li>
                <li><strong>Cyclic Change of Server's Performance: Impacts and Applications</strong> - Eindhoven
                    University of Technology, Oct 2012
                </li>
            </ul>

            <h2>Conferences and Presentations</h2>
            <ul>
                <li>The Sixth International Conference on Matrix-Analytic Methods in Stochastic Models (MAM6), Beijing,
                    P. R. China, June 11-14, 2008
                </li>
                <li>“Analysis of a Priority Queueing System with Two Types of Customers and Customer Transfers” 2008
                    INFORMS ANNUAL MEETING, Washington, DC on October 12-15, 2008.
                </li>
                <li>“Stability Conditions of a Preemptive Repeat Priority Queue with Customer Transfers” 13th
                    International Conference on Applied Stochastic Models and Data Analysis, Vilnius, LITHUANIA, June
                    30-July 3, 2009.
                </li>
                <li>“Control of a Single-Server Priority Queueing System with Two Types of Customers and Customer
                    Transfers” 2009 INFORMS ANNUAL MEETING, San Diego on October 11-14, 2009.
                </li>
                <li>“Optimal control of an ER Triage and Treatment Process” 2009 INFORMS ANNUAL MEETING, San Diego on
                    October 11-14, 2009.
                </li>
                <li>International Workshop on Behavioral Operations Management, Tsinghua University, Beijing, P.R.
                    China, December 19 - 20, 2009
                </li>
                <li>Healthy Aging Conference Program 2010, Singapore, 11th – 15th October 2010</li>
                <li>1st Singapore Health and Biomedical Congress: Improving Health in Our Community – A Holistic and
                    Integrated Approach, Singapore, November 12-13, 2010
                </li>
                <li>Integrated clinical environments – the future of improved healthcare, Singapore, 30th April 2011
                </li>
                <li>“Clinical Outcome Optimization of Non-Critical Patients at Emergency Department via Prioritization”
                    Healthcare Decision Making in the Age of Personalized Medicines Symposium, Singapore, May 18-19,
                    2012
                </li>
                <li>“Dynamic Control of Emergency Medical Services with Patient Transfers and Abandonments”, INFORMS
                    International Beijing 2012, Beijing, China, Jun 24-27, 2012
                </li>
                <li>Young European Queueing Theorists (YEQT-VI) Workshop on "Analytic Methods in Queueing Systems",
                    European Institute for Statistics, Probability, Stochastic Operations Research and their
                    Applications (EURANDOM), Eindhoven, Netherlands, Nov 1-3, 2012.
                </li>
                <li>The Sixth International Annual Conference of the Chinese Scholars Association for Management Science
                    and Engineering (CSAMSE). Beijing, China, Jun 30 - Jul 1, 2013
                </li>
                <li>Organizing committee, 2013 international workshop on management science and operations research,
                    Hefei, China, Jul 21-25, 2013
                </li>
                <li>“Optimal control of an ER Triage and Treatment Process” The Fifth POMS-HK International Conference,
                    The University of Hong Kong, 3-4 January 2014
                </li>
                <li>The Healthcare Management Workshop, City University of Hong Kong, 5th January 2014</li>
                <li>International Workshop on Healthcare Operations Management, 25th-26th August 2014, Sichuan, China
                </li>
                <li>中国运筹学会2014年学术交流年会，2014年10月17 - 20日，徐州，江苏师范大学</li>
                <li>中国系统工程学会第十八届学术年会，2014年10月24 - 27日，合肥，中国科学技术大学</li>
                <li>The Sixth POMS-HK International Conference, 3-4 January 2015, Sun Yat-Sen University, Guangzhou,
                    China
                </li>
                <li>中国运筹学会随机服务与运作管理分会，2015年学术年会，2015年7月1-2日，北京</li>
                <li>INFORMS Workshop on Data Mining and Analytics on October 31, 2015</li>
                <li>2015 INFORMS ANNUAL MEETING in Philadelphia, Pennsylvania, USA on November 1 - 4, 2015</li>
                <li>2015年度互联网环境下的医疗健康服务与医院运作管理国际学术会议，2015 年 12 月 13 日~14
                    日，上海交通大学，上海
                </li>
                <li>The 7th International Workshop on Behavioral Operations Management，第七届“行为运筹学与行为运营管理”国际研讨会，2015
                    年12 月19 - 20 日，天津，天津大学
                </li>
                <li>The Seventh POMS-HK International Conference，January 9-10, 2016，Faculty of Business Administration
                    (E22 Building), University of Macau
                </li>
                <li>2018 INFORMS International Conference in Taipei, Taiwan, on June 17-20 2018.
                    <ul>
                        <li>Zuo-Jun (Max) Shen, J. Xie and Z. Zheng. Dynamic Learning and Rescheduling with uncertain
                            customer types.
                        </li>
                        <li>J. Xie, M. Ang, M. Chou, and D. D. Yao, Bed allocation to reduce overflow.</li>
                        <li>J. Xie, G. G. Loke, M. Sim and L. S. Wei. The Analytics of Bed Shortages: Coherent Metric,
                            Prediction and Optimization.
                        </li>
                    </ul>
                </li>
            </ul>



        </div>
    );
};

export default TalksPage;