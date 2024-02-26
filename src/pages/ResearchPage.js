import React from 'react';
import './ResearchPage.css';

const ResearchPage = () => {
    return (
        <div className="research-page">
            <h1>Professor Jingui Xie's Research</h1>
            <div className="section">
                <h2>About My Research</h2>
                <p>
                    My work spans a broad spectrum of disciplines, each presenting unique challenges and opportunities
                    for innovation. From the intricate dynamics of healthcare management to the evolving landscapes of
                    business analytics, my research is a blend of data, analytics, and mathematical models to address
                    some of the most pressing challenges in our world today.
                </p>
            </div>

            {/* Award Section */}
            <div className="section">
                <h2>Awards</h2>
                <ul>
                    <li>Outstanding 2021 Project Performance Evaluation, “Hospital Resource Planning and Allocation”, Grant No. 71571176, Department of Management Science, National Natural Science Foundation of China, 2022.</li>
                    <li>First-Place Prize, Best Student Paper Competition, “The Analytics of Bed Shortages: Coherent Metric, Prediction, and Optimization”, The Ninth POMS-HK International Conference, January 6 to 7, 2018.</li>
                    <li>The 9th International Workshop on Behavioral Operations Management, Best Paper Award, “Priority Service Pricing with Heterogeneous Customers”, Behavioral Operations Management Chapter of the Operations Research Society of China, December 16th, 2017.</li>
                    <li>The 8th International Workshop on Behavioral Operations Management, nomination for Best Paper Award, “Effects of Rescheduling on Patient No-Show Behavior in Outpatient Clinics”, Behavioral Operations Management Chapter of the Operations Research Society of China, 2016.</li>
                    <li>The “Zhang Zhong-Zhi” Young Faculty Teaching Award, University of Science and Technology of China, 2016.</li>
                    <li>The 7th National Hundred Excellent Management Cases Award, “Doctor of Chun Yu: The O+O Pattern in Healthcare Industry”, China Management Case-Sharing Center, 2016.</li>
                    <li>Outstanding PhD Thesis award, “Priority Queueing Systems with Transfers of Customers”, Tsinghua University, 2010.</li>
                </ul>
            </div>

            {/* Research Funding Section */}
            <div className="section">
                <h2>Research Funding</h2>
                <p>I am honored to have received substantial funding to support my research initiatives, which allows me to explore and push the boundaries of knowledge in my fields of expertise. Below is a highlight of the grants that have been awarded:</p>

                <h3>Principal Investigator (PI)</h3>
                <ul>
                    <li>Principal Investigator (PI). RMB 1,030,000 + EUR 60,000</li>
                    <li>Co-PI, “Data-Driven Dynamic Resource Management for Random Time-Varying Demands in the Context of Covid-19 and future crises”, GFA, Oct 2022 – Sep 2023, EUR 60,000. (Co-PI, Prof. Xiaolan Xie, Mines Saint-Etienne)</li>
                    <li>PI, "Hospital resource planning and allocation." NSFC, Jan 2016 - Dec 2019, RMB 600,000.</li>
                    <li>PI, "Policy evaluation of bundled payment." Anhui Health Commission, Jan 2016 - Dec 2017, RMB 80,000.</li>
                    <li>PI, "Optimal control of stochastic service systems with dynamic priority." NSFC, Jan 2013 - Dec 2015, RMB 200,000.</li>
                    <li>PI, "Queues in bed allocation." CPSF, Jan 2013 - Dec 2014, RMB 150,000.</li>
                </ul>

                <h3>Co-Investigators (Co-I)</h3>
                <ul>
                    <li>Co-investigators (Co-I). SGD 1,458,057 + RMB 460,000</li>
                    <li>Co-I, "Optimal management and scheduling of hospital beds based on prediction and optimization." NSFC, Jan 2023 - Dec 2026, RMB 460,000. (PI, Prof. Xiaolei Xie, Tsinghua University)</li>
                    <li>Co-I (international collaborator), "Optimal personalized medical intervention using predictive information in ICUs", Academic Research Fund (AcRF) Tier 2, Ministry of Education, Singapore, Fund No. MOE2019-T2-1-185, January 2020–December 2022, SGD 620,532. (PI, Prof. Zhichao Zheng, Singapore Management University)</li>
                    <li>Primary participant, NUS Academic Research Grant for “Re-design and Analysis of a Hospital Bed Management System”, October 2009 – October 2012. Approved Budget S$57,000. (PI, Prof. Mabel Chou, National University of Singapore)</li>
                    <li>Primary participant, Singapore Science and Engineering Research Council Grant for “Remanufacturing Inventory Forecasting and Management System”, July 2011 – July 2013. Approved Budget S$428,145.</li>
                    <li>Primary participant, Singapore Ministry of Health Grant, “Design and Analysis of the Cross-Hospital Channeling of Emergency Department Patient Flow: Improving EMD Resource Utilization and Reducing Patient Waiting Time”, September 2011 – September 2013. Approved Budget S$173,880.</li>
                    <li>Primary participant, "Production and Inventory Controls in Manufacturing Systems with Multiple Demand Classes and Information Sharing", Singapore Ministry of Education, Academic Research Fund (AcRF) Tier 1, Period: Feb 09 to Jan 12, Amount: S$178,500 </li>
                    <li>Primary participant, 05/2012 – 09/2013 Remanufacturing Inventory Forecasting and Management Systems [WBS No. R-314-000-703-733]</li>
                    <li>Primary participant, 07/2011 – 04/2012 Study on Hospital Bed Management Efficiency [WBS No. C-311-004-003-001]</li>
                </ul>
                </div>


                        {/* Repeat the structure below for each research area */}
            <div className="section">
                <h2>1. Healthcare Management and Analytics</h2>
                <p>
                    In this realm, I delve into how data can revolutionize healthcare delivery. My focus extends from
                    analyzing pandemic trends to optimizing ICU operations to enhance patient care and resource
                    efficiency. I've explored the impact of air pollution on COVID-19 infection rates and used social
                    media data to assess the pandemic's impact on mental health. My goal is to leverage data to improve
                    healthcare outcomes and systems.
                </p>
                {/*more paragraphs*/}
                <h3>Key Focus Areas:</h3>
                <ul>
                    <li>COVID-19 Data Analysis: Utilizing big data to understand the pandemic’s spread and impact and
                        inform policy and healthcare decisions.
                    </li>
                    <li>ICU Data Analysis: Developing predictive models to improve patient care and resource allocation
                        in Intensive Care Units.
                    </li>
                    <li>Medical Resource Optimization: Applying data-driven approaches to optimize the distribution and
                        use of medical resources, enhancing efficiency and patient outcomes.
                    </li>
                </ul>
                <h3>Related Papers:</h3>
                <ul>
                    <li>"The mediating effect of air quality on the association between human mobility and COVID-19
                        infection in China" (2020)
                    </li>
                    <li>"Using social media data to assess the impact of COVID-19 on mental health in China" (2021)</li>
                    <li>"Analytics for Hospital Resource Planning—Two Case Studies" (2020)</li>
                </ul>
            </div>

            {/*sections for Queueing Models and Optimization, Business Analytics in Various Contexts, etc. */}
            <div className="section">
                <h2>2. Queueing Models and Optimization</h2>
                <p>
                    In this area, I explore the transformative potential of technologies like blockchain and the rich insights hidden in traditional medicine practices. My work bridges the gap between cutting-edge technology and age-old wisdom, applying analytical tools to solve real-world business problems.
                    Advanced Mathematical and Computational Techniques
                    I embrace the challenge of solving complex problems with sophisticated mathematical solutions. My research, from dynamic programming to algorithm design, is about finding clarity in complexity and applying advanced mathematical and computational methods to address complex real-world problems.
                </p>
                {/*more paragraphs*/}
                <h3>Key Focus Areas:</h3>
                <ul>
                    <li>
                        Blockchain Technology in Business: Examining how blockchain technology can transform business
                        operations and value creation.
                    </li>
                    <li>
                        Data Mining in Traditional Medicine: Analyzing prescription patterns in traditional Chinese
                        medicine using data mining techniques.
                    </li>
                    <li>Customer Behavior in Service Systems: Studying customer interactions and behavior patterns
                        in service-oriented businesses.
                    </li>
                </ul>
                <h3>Related Papers:</h3>
                <ul>
                    <li>"Optimal control of a multiclass queueing system when customers can change types" (2016)</li>
                    <li>"Priority service pricing with heterogeneous customers: Impact of delay cost distribution" (2019)</li>
                    <li>"Determining the conditions for reverse triage in emergency medical services using queuing theory" (2016)</li>
                </ul>
            </div>

            <div className="section">
                <h2>3. Business Analytics in Various Contexts</h2>
                <p>
                    In this realm, I delve into how data can revolutionize healthcare delivery. My focus extends from
                    analyzing pandemic trends to optimizing ICU operations to enhance patient care and resource
                    efficiency. I've explored the impact of air pollution on COVID-19 infection rates and used social
                    media data to assess the pandemic's impact on mental health. My goal is to leverage data to improve
                    healthcare outcomes and systems.
                </p>
                {/*more paragraphs*/}
                <h3>Key Focus Areas:</h3>
                <ul>
                    <li>COVID-19 Data Analysis: Utilizing big data to understand the pandemic’s spread and impact and
                        inform policy and healthcare decisions.
                    </li>
                    <li>ICU Data Analysis: Developing predictive models to improve patient care and resource allocation
                        in Intensive Care Units.
                    </li>
                    <li>Medical Resource Optimization: Applying data-driven approaches to optimize the distribution and
                        use of medical resources, enhancing efficiency and patient outcomes.
                    </li>
                </ul>
                <h3>Related Papers:</h3>
                <ul>
                    <li>"Joint estimation and robustness optimization" (2022)
                    </li>
                    <li>"Effects of rescheduling on patient no-show behavior in outpatient clinics" (2019)</li>
                    <li>"Feature selection and syndrome classification for rheumatoid arthritis patients with Traditional Chinese Medicine treatment" (2020)
                    </li>
                </ul>
            </div>

            <div className="section">
                <h2>4.Advanced Mathematical and Computational Techniques</h2>
                <p>
                    I embrace the challenge of solving complex problems with sophisticated mathematical solutions. My research, from dynamic programming to algorithm design, is about finding clarity in complexity and applying advanced mathematical and computational methods to address complex real-world problems.
                </p>
                {/*more paragraphs*/}
                <h3>Key Focus Areas:</h3>
                <ul>
                    <li>Dynamic Programming: Developing models and algorithms for decision-making in complex, dynamic environments.
                    </li>
                    <li>Complex Algorithm Design: Creating algorithms to solve intricate problems, particularly in optimization and logistics.
                    </li>
                    <li>Mathematical Modeling: Constructing and analyzing mathematical models to understand and predict system behaviors.
                    </li>
                </ul>
                <h3>Related Papers:</h3>
                <ul>
                    <li>"Dynamic control of a tandem system with abandonments" (2016)
                    </li>
                    <li>"Optimal control of an emergency room triage and treatment process" (2014)</li>
                    <li>"Stability of a priority queueing system with customer transfers" (2008)</li>
                </ul>
            </div>

            <div className="section">
                <h2>Conclusion</h2>
                <p>
                    As you navigate this page, you'll find a collection of my most significant papers, each a testament
                    to my commitment to academic excellence and practical impact. My research is not just about finding
                    answers; it's about asking the right questions that drive us toward a better understanding of our
                    world and the systems that govern it.
                </p>
                <p>
                    Thank you for joining me on this journey of discovery and innovation. I hope my work inspires you as
                    much as your interest and engagement inspire me. Together, we can explore the frontiers of knowledge
                    and make meaningful contributions to society.
                </p>
            </div>
        </div>
    );
};

export default ResearchPage;
