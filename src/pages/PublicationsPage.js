import React from 'react';
import './PublicationsPage.css'; // Make sure the CSS file is in the same directory
import googleScholarIcon from '../assets/images/googleScholar.png';
import orcidIcon from "../assets/images/orcid.png";
import ssrnIcon from "../assets/images/ssrn.png";
import RGIcon from "../assets/images/ReaserchGate.png"; // 确保路径正确

const PublicationsPage = () => {
    return (
        <div className="publication-page">
            <h1>Professor Jingui Xie's Publications</h1>
            <p>Welcome to the comprehensive publications page of Prof. Dr. Jingui Xie, a renowned professor at the
                Technical University of Munich. My extensive research in Business Analytics and Healthcare Management
                has led to numerous contributions in various academic journals. Below is a detailed list of my
                publications, reflecting the depth and breadth of my research endeavors.</p>


            <div className="academic-links-container">
                <p className="below-text">Below are several links via which you may discover more about my research:</p>
                <div className="academic-links">
                    {/* SSRN Page */}
                    <a href="https://www.ssrn.com/index.cfm/en/" target="_blank" rel="noopener noreferrer"
                       className="academic-link-item">
                        <img src={ssrnIcon} alt="SSRN Logo" className="academic-icon"/>
                        <span>SSRN Page</span>
                    </a>
                    {/* Google Scholar Profile */}
                    <a href="https://scholar.google.com/citations?user=E5UAxjkAAAAJ&hl=en" target="_blank"
                       rel="noopener noreferrer" className="academic-link-item">
                        <img src={googleScholarIcon} alt="Google Scholar Icon" className="academic-icon"/>
                        <span>Google Scholar Profile</span>
                    </a>
                    {/* ORCID Publications */}
                    <a href="https://orcid.org/0000-0003-4100-2339" target="_blank" rel="noopener noreferrer"
                       className="academic-link-item">
                        <img src={orcidIcon} alt="ORCID Logo" className="academic-icon"/>
                        <span>ORCID Publications</span>
                    </a>
                    {/* ResearchGate Publications */}
                    <a href="https://www.researchgate.net/profile/Jingui-Xie" target="_blank" rel="noopener noreferrer"
                       className="academic-link-item">
                        <img src={RGIcon} alt="RG Logo" className="academic-icon"/>
                        <span>ResearchGate Page</span>
                    </a>
                    {/*/!* BibTeX File of All Papers *!/*/}
                    {/*<a href="http://example.com/bibtex_all" target="_blank" rel="noopener noreferrer"*/}
                    {/*   className="academic-link-item">*/}
                    {/*    <img src={bibtexIcon} alt="BibTeX Logo" className="academic-icon"/>*/}
                    {/*    <span>BibTeX File of All Papers</span>*/}
                    {/*</a>*/}
                </div>
            </div>

            {/* Publications in UTD24/FT50 Journals Section */}
            <h2>Publications in UTD24/FT50 Journals</h2>
            <div className="publication-item">
                <p>1. J Xie, GG Loke, M Sim, SW Lam:
                    <a href="https://pubsonline.informs.org/doi/abs/10.1287/opre.2021.2231" target="_blank"
                       rel="noopener noreferrer"> The analytics of bed shortages: Coherent metric, prediction, and
                        optimization. </a>
                    Operations Research, 2023
                </p>
            </div>
            <div className="publication-item">
                <p>2. T Zhu, J Xie, M Sim:
                    <a href="https://pubsonline.informs.org/doi/10.1287/mnsc.2021.4018" target="_blank"
                       rel="noopener noreferrer"> Joint estimation and robustness optimization. </a>
                    Management Science, 2022
                </p>
            </div>
            <div className="publication-item">
                <p>3. J Xie, W Zhuang, M Ang, MC Chou, L Luo, DD Yao:
                    <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/poms.13158" target="_blank"
                       rel="noopener noreferrer"> Analytics for Hospital Resource Planning—Two Case Studies. </a>
                    Production and Operations Management, 2020
                </p>
            </div>
            <div className="publication-item">
                <p>4. P Cao, Y Wang, J Xie:
                    <a href="https://onlinelibrary.wiley.com/doi/10.1111/poms.13058" target="_blank"
                       rel="noopener noreferrer"> Priority service pricing with heterogeneous customers:
                        Impact of delay cost distribution. </a>
                    Production and Operations Management, 2019
                </p>
            </div>
            <div className="publication-item">
                <p>5. J. Liu, J. Xie, K. K. Yang and Z. Zheng:
                    <a href="https://onlinelibrary.wiley.com/doi/10.1111/poms.13058" target="_blank"
                       rel="noopener noreferrer"> Effects of Rescheduling on Patient No-Show Behavior in
                        Outpatient Clinics. </a>
                    Manufacturing & Service Operations Management, 2019
                </p>
            </div>

            <div className="publication-item">
                <p>6. Fu, C. and Zhou, M. and Lou, Z. and Xie, J. and Sim, M. and Tan, K. B.:
                    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3869521" target="_blank"
                       rel="noopener noreferrer"> Analytics with Robust Epidemiological Compartmental Optimization
                        Models. </a>
                    SSRN, 2021</p>
            </div>

            <div className="publication-item">
                <p>7. Y Wang, P Cao, J Xie, D Zhan:
                    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4518047" target="_blank"
                       rel="noopener noreferrer"> Advance Selling and Upgrading in Priority Queues</a>
                    SSRN, 2023
                </p>
            </div>

            <div className="publication-item">
                <p>8. Y Chen, J Xie, T Zhu:
                    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4038588" target="_blank"
                       rel="noopener noreferrer"> The impact of prolonged service time under off-service placement on
                        flexibility configurations. </a>
                    SSRN, 2022
                </p>
            </div>

            <div className="publication-item">
                <p>9. Y Zhu, J Xie, Y Yu, Z Zheng, H Luo, OC Ooi:
                    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4163713" target="_blank"
                       rel="noopener noreferrer"> Air Pollution and Doctors’ Work Performance: Evidence from
                        Extubation Failure in the Intensive Care Unit. </a>
                    SSRN, 2021
                </p>
            </div>

            {/* Under review or revision Section 已更新 */}
            <p>(Under review or revision)</p>
            <div className="publication-item">
                <p>10. G. Chen, J. Xie, Z. Zheng, H. Luo, O.C. Ooi. Optimal Stopping for Medical Treatment with
                    Predictive Information. (Under minor revision after the 3rd round review at Management Science)</p>
            </div>

            <div className="publication-item">
                <p>11. T. Zhu, Z. Lou, J. Xie, Loke, G.G. Joint admission and discharge control with readmissions.
                    (Prepare for submission at Manufacturing & Service Operations Management)</p>
            </div>
            <div className="publication-item">
                <p>12. Z. Lou, M. Sun, J. Xie, H. Zhou. Risk-based Markov decision process.
                    (Prepare for submission at Operations Research)</p>
            </div>

            <h2>Other Published Journal Papers</h2>
            <h2>Operations & Analytics</h2>
            <div className="publication-item">
                <p>13. Fan, Y., Wang, J., Xie, J., Yu, Y. and Cao, L.:
                    <a href="https://pubsonline.informs.org/doi/abs/10.1287/serv.2022.0314" target="_blank"
                       rel="noopener noreferrer"> The Impact of Bundled Payment on Hospital Operations. </a>
                    Service Science, 2023</p>
            </div>

            <div className="publication-item">
                <p>14. Shen, Z.J.M., Xie, J., Zheng, Z. and Zhou, H.:
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0377221723001479" target="_blank"
                       rel="noopener noreferrer"> Dynamic scheduling with uncertain job types. </a>
                    European Journal of Operational Research, 2023</p>
            </div>

            <div className="publication-item">
                <p>15. Girard, C., Green, L.V., Lewis, M.E. and Xie, J.:
                    <a href="https://www.researchgate.net/publication/339601632_Two-class_constrained_optimization_with_applications_to_queueing_control"
                       target="_blank"
                       rel="noopener noreferrer"> Two‐class constrained optimization with applications to queueing
                        control. </a>
                    Naval Research Logistics, 2023</p>
            </div>

            <div className="publication-item">
                <p>16. Cao, P., Huang, J. and Xie, J.:
                    <a href="http://queueing.gatecoin.tech/index.php/qmsm/article/view/72" target="_blank"
                       rel="noopener noreferrer"> Asymptotic Optimal Scheduling of V-Systems with Deadlines and Customer
                        Abandonment. </a>
                    Queueing Models and Service Management, 2023</p>
            </div>

            <div className="publication-item">
                <p>17. Hong, L.J., Liu, G., Luo, J. and Xie, J.:
                    <a href="https://www.sciencedirect.com/science/article/pii/S2667325822002047" target="_blank"
                       rel="noopener noreferrer"> Variability scaling and capacity planning in Covid-19 pandemic. </a>
                    Fundamental Research, 2023</p>
            </div>

            <div className="publication-item">
                <p>18. Ali, H.S., Jia, F., Lou, Z. and Xie, J.:
                    <a href="https://jfin-swufe.springeropen.com/articles/10.1186/s40854-023-00456-8" target="_blank"
                       rel="noopener noreferrer"> Effect of blockchain technology initiatives on firms’ market
                        value. </a>
                    Financial Innovation, 2023</p>
            </div>

            <div className="publication-item">
                <p>19. Y. Tang, H. Jiang, J. Xie, Z. Zheng et al.:
                    <a href="https://www.tandfonline.com/doi/full/10.1080/20479700.2023.2225760" target="_blank"
                       rel="noopener noreferrer"> Behavioral Factors Associated with Patients’ Non-Attendance in
                        Outpatient Clinics: A Retrospective Study in Singapore. </a>
                    International Journal of Healthcare Management, 2023</p>
            </div>

            <div className="publication-item">
                <p>20. Y Chen, J Xie, T Zhu:
                    <span>Y Chen, J Xie, T Zhu</span>
                    <span></span>
                    <a href="https://link.springer.com/article/10.1007/s10696-022-09455-w" target="_blank"
                       rel="noopener noreferrer"> Overflow in systems with two servers: the negative consequences.</a>
                    Flexible Services and Manufacturing Journal, 2023
                </p>
            </div>

            <div className="publication-item">
                <p>21. Tang, Y., Xie, J., Shen, A., Liu, L., Zhai, F. and Fu, C.:
                    <a href="https://www.tandfonline.com/doi/full/10.1080/24725579.2021.1955777" target="_blank"
                       rel="noopener noreferrer">The impact of prescriber experience and continuity on adverse drug
                        reactions in hospitalized cancer patients. </a>
                    Healthcare Systems Engineering, 2022</p>
            </div>

            <div className="publication-item">
                <p>22. Tang, Y., Jiang, H., Xie, J., & Zheng, Z.:
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S0167637721001358" target="_blank"
                       rel="noopener noreferrer"> A queueing model for customer rescheduling and no-shows in service
                        systems. </a>
                    Operations Research Letters, 2021</p>
            </div>

            <div className="publication-item">
                <p>23. G. Zayas-Cabán, J. Xie, L.V. Green, M.E. Lewis.:
                    <a href="https://www.tandfonline.com/doi/full/10.1080/24725579.2019.1620384" target="_blank"
                       rel="noopener noreferrer"> Policies for Physician Allocation to Triage and Treatment in Emergency
                        Departments. </a>
                    IIE Transactions on Healthcare Systems Engineering，2019</p>
            </div>

            <div className="publication-item">
                <p>24. Y. Wang, Y. Fan, T. Zhu, P. Cao, J. Xie.:
                    <a href="https://www.tandfonline.com/doi/abs/10.1080/00207543.2018.1556410" target="_blank"
                       rel="noopener noreferrer"> An approximation method for 2-chain flexible queues with preemptive
                        priority. </a>
                    International Journal of Production Research，2019</p>
            </div>

            <div className="publication-item">
                <p>25. J. Xie, N. Wang, R. Ding, etc.:
                    <a href="https://www.tandfonline.com/doi/abs/10.1080/00207543.2018.1480841" target="_blank"
                       rel="noopener noreferrer"> Association learning of Chinese herbal medicines and disease treatment
                        efficacy. </a>
                    International Journal of Production Research，2019</p>
            </div>

            <div className="publication-item">
                <p>26. R Ding, F Jiang, J Xie, Y Yu:
                    <a href="https://www.tandfonline.com/doi/abs/10.1080/00207543.2016.1208372" target="_blank"
                       rel="noopener noreferrer"> Algorithmic prediction of individual diseases. </a>
                    International Journal of Production Research, 2017
                </p>
            </div>

            <div className="publication-item">
                <p>27. J Xie, T Zhu, AK Chao, S Wang:
                    <a href="https://link.springer.com/article/10.1007/s10479-016-2370-6" target="_blank"
                       rel="noopener noreferrer"> Performance analysis of service systems with priority upgrades. </a>
                    Annals of Operations Research, 2017
                </p>
            </div>

            <div className="publication-item">
                <p>28. J Xie, Y Fan, MC Chou:
                    <a href="https://link.springer.com/article/10.1007/s10696-016-9251-9" target="_blank"
                       rel="noopener noreferrer"> Flexibility design in loss and queueing systems: efficiency of
                        k-chain configuration. </a>
                    Flexible Services and Manufacturing Journal, 2017
                </p>
            </div>

            <div className="publication-item">
                <p>29. G. Zayas-Cabán, J. Xie, L.V. Green, M.E. Lewis.:
                    <a href="https://link.springer.com/article/10.1007/s11134-016-9489-7" target="_blank"
                       rel="noopener noreferrer"> Dynamic control of a tandem system with abandonments. </a>
                    Queueing Systems，2016</p>
            </div>

            <div className="publication-item">
                <p>30. P. Cao, J. Xie.:
                    <a href="https://link.springer.com/article/10.1007/s11134-015-9466-6" target="_blank"
                       rel="noopener noreferrer"> Optimal control of a multiclass queueing system when customers can
                        change types. </a>
                    Queueing Systems，2016</p>
            </div>

            <div className="publication-item">
                <p>31. J. Xie, P. Cao, B. Huang, M. Ong.:
                    <a href="https://www.tandfonline.com/doi/abs/10.1080/00207543.2015.1109718" target="_blank"
                       rel="noopener noreferrer"> Determining sufficient conditions of reverse triage in emergency
                        medical services using queueing theory. </a>
                    International Journal of Production Research, 2016</p>
            </div>

            <div className="publication-item">
                <p>32. P. Cao, J. Xie.:
                    <a href="https://ieeexplore.ieee.org/document/7360141" target="_blank"
                       rel="noopener noreferrer"> Optimal Control of an Inventory System With Joint Production and
                        Pricing Decisions. </a>
                    IEEE transactions on Automatic Control, 2016</p>
            </div>

            <div className="publication-item">
                <p>33. B. Huang, J. Xie, and Q.-M. He:
                    <a href="https://ieeexplore.ieee.org/document/6646265" target="_blank"
                       rel="noopener noreferrer"> Cyclic Change of Server's Performance: Impacts and Applications. </a>
                    IEEE transactions on Automatic Control, 2016</p>
            </div>

            <div className="publication-item">
                <p>34. Q.-M. He, J. Xie, X. Zhao:
                    <a href="https://onlinelibrary.wiley.com/doi/10.1002/nav.21494" target="_blank"
                       rel="noopener noreferrer"> Priority queue with customer upgrades. </a>
                    Naval Research Logistics, 2012</p>
            </div>

            <div className="publication-item">
                <p>35. J. Xie, Q.-M. He, X. Zhao:
                    <a href="https://link.springer.com/article/10.1007/s11134-009-9130-0" target="_blank"
                       rel="noopener noreferrer"> On the Stationary Distribution of Queue Lengths in a Multi-Class
                        Priority Queueing System with Customer Transfers. </a>
                    Queueing Systems, 2009</p>
            </div>

            <div className="publication-item">
                <p>36. J Xie, QM He, X Zhao:
                    <a href="https://www.sciencedirect.com/science/article/pii/S0167637708000451" target="_blank"
                       rel="noopener noreferrer"> Stability of a priority queueing system with customer transfers. </a>
                    Operations Research Letters, 2008
                </p>
            </div>

            <h2>Healthcare Data Analytics</h2>
            {/* Publication items */}
            <div className="publication-item">
                <p>37. Y Zhu, J Xie, Y Yu, A Chen:
                    <a href="https://www.cambridge.org/core/journals/psychological-medicine/article/abs/using-social-media-data-to-assess-the-impact-of-covid19-on-mental-health-in-china/53FE167AEB2D0E07E45493804D55C9DB"
                       target="_blank" rel="noopener noreferrer"> Using social media data to assess the impact of
                        COVID-19 on mental health in China. </a>
                </p>
            </div>

            <div className="publication-item">
                <p>38. Xin, L., Zhu, Y., Zhao, J., Fang, Y. and Xie, J.:
                    <a href="https://pubmed.ncbi.nlm.nih.gov/36125681/#:~:text=The%20results%20suggest%20that%20extreme,vary%20with%20sex%20and%20age."
                       target="_blank"
                       rel="noopener noreferrer">Association between short-term exposure to extreme humidity and painful
                        diabetic neuropathy: a case-crossover analysis. </a>
                    Environmental Science and Pollution Research, 2023
                </p>
            </div>

            <div className="publication-item">
                <p>39. Maimaitiming, M., Xie, J., Zheng, Z. and Zhu, Y.:
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9947051/" target="_blank"
                       rel="noopener noreferrer"> Effect of the announcement of human-to-human transmission on
                        telemedicine services in China during COVID-19. </a>
                    Disaster Medicine and Public Health Preparedness, 2023
                </p>
            </div>

            <div className="publication-item">
                <p>40. Maimaitiming, M., Xie, J., Zheng, Z. and Zhu, Y., Luo, H. and Ooi, O.C.:
                    <a href="https://pubmed.ncbi.nlm.nih.gov/35332942/" target="_blank"
                       rel="noopener noreferrer"> Impact of restrictive red blood cell transfusion strategy on
                        thrombosis‐related events: A meta‐analysis and systematic review. </a>
                    Vox Sanguinis, 2022
                </p>
            </div>

            <div className="publication-item">
                <p>41. Zhao, W., Zhu, Y., Xie, J., Zheng, Z., Luo, H. and Ooi, O.C.:
                    <a href="https://pubmed.ncbi.nlm.nih.gov/34342824/" target="_blank"
                       rel="noopener noreferrer"> The moderating effect of solar radiation on the association between
                        human mobility and COVID-19 infection in Europe. </a>
                    Environmental Science and Pollution Research, 2022
                </p>
            </div>

            <div className="publication-item">
                <p>42. Xin, L., Zhu, Y., Liu, J., Fang, Y. and Xie, J.:
                    <a href="https://pubmed.ncbi.nlm.nih.gov/34523037/#:~:text=Results%3A%20We%20detected%20significant%20and,to%201.12)%20for%20extreme%20dampness."
                       target="_blank"
                       rel="noopener noreferrer"> Exposure-lag-response associations between extreme environmental
                        conditions and primary Sjögren’s syndrome. </a>
                    Clinical rheumatology, 2021</p>
            </div>

            <div className="publication-item">
                <p>43. Y Zhu, J Xie, Y Yu:
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=E5UAxjkAAAAJ&cstart=20&pagesize=80&citation_for_view=E5UAxjkAAAAJ:JV2RwH3_ST0C"
                       target="_blank"
                       rel="noopener noreferrer"> Effect of home isolation on domestic violence and divorce in China
                        during COVID-19 pandemic. </a>
                    Psychiatry Research, 2021
                </p>
            </div>

            <div className="publication-item">
                <p>44. Shao, W., Xie, J. and Zhu, Y.:
                    <a href="https://pubmed.ncbi.nlm.nih.gov/33338486/" target="_blank"
                       rel="noopener noreferrer"> Mediation by human mobility of the association between temperature and
                        COVID-19 transmission rate. </a>
                    Environmental Research, 2021</p>
            </div>

            <div className="publication-item">
                <p>45. J Xie, Y Zhu:
                    <a href="https://www.sciencedirect.com/science/article/pii/S0048969720321215" target="_blank"
                       rel="noopener noreferrer"> Association between ambient temperature and COVID-19 infection in 122
                        cities from China. </a>
                    Science of The Total Environment, 2020
                </p>
            </div>

            <div className="publication-item">
                <p>46. Y Zhu, J Xie, F Huang, L Cao:
                    <a href="https://www.sciencedirect.com/science/article/pii/S0048969720323305" target="_blank"
                       rel="noopener noreferrer"> Association between short-term exposure to air pollution and COVID-19
                        infection: Evidence from
                        China. </a>
                    Science of The Total Environment, 2020</p>
            </div>

            <div className="publication-item">
                <p>47.H Zhou, J Xie, Z Zheng, OC Ooi, H Luo:
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S1043067920304196" target="_blank"
                       rel="noopener noreferrer"> Effect of renin-angiotensin system inhibitors on acute kidney injury
                        among patients undergoing
                        cardiac surgery: A review and meta-analysis. </a>
                    Seminars in Thoracic and Cardiovascular Surgery, 2021
                </p>
            </div>

            <div className="publication-item">
                <p>48.D Huang, J Liu, L Xin, J Xie, Q Zhu, P Chen, Z Shen, Q Meng, H Wang:
                    <a href="https://link.springer.com/article/10.1007/s11655-020-3480-1" target="_blank"
                       rel="noopener noreferrer"> Data Mining Study on Prescription Patterns of Different Dosage Forms
                        of Chinese Herbal Medicines for Treating and Improving Immune-Inflammatory Indices in Patients
                        with Rheumatoid Arthritis. </a>
                    Chinese Journal of Integrative Medicine, 2022
                </p>
            </div>

            <div className="publication-item">
                <p>49. Zhu, Y., Xie, J., Huang, F. and Cao, L.:
                    <a href="https://www.sciencedirect.com/science/article/pii/S0013935120308069#:~:text=A%20unit%20increase%20in%20human,index%20and%20air%20quality%20index."
                       target="_blank"
                       rel="noopener noreferrer"> The mediating effect of air quality on the association between human
                        mobility and COVID-19 infection in China. </a>
                    Environmental research, 2020
                </p>
            </div>

            <div className="publication-item">
                <p>50. Xie, J., Zhu, Y., Fan, Y., Xie, L., Xie, R., Huang, F. and Cao, L.:
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7686207/#:~:text=In%20conclusion%2C%20this%20paper%20found,information%20for%20hospitals%20and%20policymakers."
                       target="_blank"
                       rel="noopener noreferrer"> Association between extreme heat and hospital admissions for cataract
                        patients in Hefei, China. </a>
                    Environmental Science and Pollution Research, 2020
                </p>
            </div>

            <div className="publication-item">
                <p>51. J. Xie, Y. Li, N. Wang, L. Xin, Y. Fang, J. Liu.:
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S1876382019310182#:~:text=According%20to%20TCM%20theory%20and,%2C%204%20%25)%20%5B3%5D."
                       target="_blank"
                       rel="noopener noreferrer"> Feature Selection and Syndrome Classification for Rheumatoid Arthritis
                        Patients with Traditional Chinese Medicine Treatment. </a>
                    European Journal of Integrative Medicine, 2020
                </p>
            </div>

            <div className="publication-item">
                <p>52. J Xie, Y Zhu, Y Fan, L Xin, J Liu:
                    <a href="https://link.springer.com/article/10.1007/s00484-019-01805-y" target="_blank"
                       rel="noopener noreferrer"> Association between rainfall and readmissions of rheumatoid arthritis
                        patients: a time-stratified
                        case-crossover analysis. </a>
                    International Journal of Biometeorology, 2020
                </p>
            </div>

            <div className="publication-item">
                <p>53. J. Xie, G. Chen, Z. Zheng et al.:
                    <a href="https://pubmed.ncbi.nlm.nih.gov/31374585/"
                       target="_blank"
                       rel="noopener noreferrer"> To extubate or not to extubate: Risk factors for extubation failure
                        and deterioration with further mechanical ventilation. </a>
                    Journal of Cardiac Surgery, 2019
                </p>
            </div>

            <div className="publication-item">
                <p>54. J Xie, J Teng, Y Fan, R Xie, A Shen:
                    <a href="https://link.springer.com/article/10.1007/s00484-018-01665-y" target="_blank"
                       rel="noopener noreferrer"> The short-term effects of air pollutants on hospitalizations for
                        respiratory disease in Hefei,
                        China. </a>
                    International journal of biometeorology, 2019
                </p>
            </div>

            <div className="publication-item">
                <p>55. J Xie, H Feng, R Ding, W Dong, L Xin, J Liu:
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S1876382018302427" target="_blank"
                       rel="noopener noreferrer"> Risk factors for readmission of rheumatoid arthritis patients
                        receiving integrative medicine: a
                        retrospective analysis. </a>
                    European Journal of Integrative Medicine, 2018
                </p>
            </div>

            <div className="publication-item">
                <p>56. J Mao, L Sun, JG Xie, KKW Yau:
                    <a href="https://www.cambridge.org/core/journals/epidemiology-and-infection/article/epidemiological-features-and-spatiotemporal-clusters-of-handfootmouth-disease-at-town-level-in-fuyang-anhui-province-china-20082013/ECAEE38C9B6A412B8986EDB5D8AEB726"
                       target="_blank"
                       rel="noopener noreferrer"> Epidemiological features and spatio-temporal clusters of
                        hand-foot-mouth disease at town level in
                        Fuyang, Anhui Province, China (2008–2013). </a>
                    Epidemiology & Infection, 2016
                </p>
            </div>

            <h2>Published Papers in Chinese</h2>
            <div className="publication-item">
                <p>57. G Liu, Z Cui, Y Liu, J Xie: A simulation approach to financial options Greeks estimation under
                    Lévy processes. Journal of University of Science and Technology of China, 2017, 47(03): 262-266.</p>
            </div>
            <div className="publication-item">
                <p>58. J Huo, J Xie: Modelling and forecasting of call center arrival process. Journal of University of
                    Science and Technology of China, 2017, 47(09): 770-777.</p>
            </div>
            <div className="publication-item">
                <p>59. G Zhang, L Sun, J Xie, Y Mao: Application of autoregressive integrated moving average model in
                    forecasting the incidence of Hand-Food-Mouth disease in Fuyang, Anhui. Journal of Preventive
                    Medicine, 2015, 21(4):231-234.</p>
            </div>
            <div className="publication-item">
                <p>60. Z Hua, Y Sun, H Liu, J Xie: Service science development research. 2012-2013 Management Science
                    and Engineering Development Research, 2014.</p>
            </div>
            <div className="publication-item">
                <p>61. S Du, J Xie, Z Liu: Progress and prospects in an emerging hot topic: healthcare operations
                    management, Journal of Management Science in China, 2013, 16(8):1-19.</p>
            </div>
            <div className="publication-item">
                <p>62. J Xie, Z-Y Zhang, W Luo: Study on Train Set Assignment with Uncertain Maintenance Time, Railway
                    Transport and Economy, 2008, 4(30): 75-78.</p>
            </div>
            <div className="publication-item">
                <p>63. J Xie, L Zeng, X Xu: Study on Optimization Model of Railway Passenger Train Set Assignment,
                    Railway Transport and Economy, 2006, 28(12): 75-77.</p>
            </div>

            <h2>Conference proceedings</h2>
            <div className="publication-item">
                <p>64. Q.-M. He, J. Xie, X. Zhao: Stability Conditions of a Preemptive Repeat Priority Queue with
                    Customer Transfers. In 13th International Conference on Applied Stochastic Models and Data Analysis.
                    Editors: L. Sakalauskas, C. Skiadas, E.K. Zavadskas, 463-467, June 30 - July 3, 2009. Vilnius,
                    LITHUANIA.</p>
            </div>

            <h2>Published teaching cases</h2>
            <div className="publication-item">
                <p>65. J. Xie, F. Jia, H. S. Ali: HAODF: The Pioneer of Online Healthcare in China. 2019. Ivey
                    Publishing.</p>
            </div>
            <div className="publication-item">
                <p>66. J. Xie, H. S. Ali, F. Jia, M. A. Z. Chudhery: Chunyu: The First Mover in Chinese M-Health
                    Industry. 2018. Ivey Publishing.</p>
            </div>
            <div className="publication-item">
                <p>67. M. A. Z. Chudhery, J. Xie, M. C. Chou, et al: The National University Hospital: Overcrowding in
                    the Emergency Department. 2018. Ivey Publishing.</p>
            </div>
            <div className="publication-item">
                <p>68. J. Xie, Z. Liu, M. A. Z. Chudhery, R. Yu: iFLYTEK: Leading Chinese Speech Technology. 2016. Ivey
                    Publishing.</p>
            </div>
            <div className="publication-item">
                <p>69. J. Xie, F. Jia, Y. Li, G. Huang: BOE: The Exploration of Operational Diversification Strategy.
                    China Management Case-Sharing Center, 2019.</p>
            </div>
            <div className="publication-item">
                <p>70. J. Xie, F. Jia, T. Wan, L. Zhang: Morning-LY: From a Small Shop at Taobao to a Social E-commerce
                    Company. China Management Case-Sharing Center, 2019.</p>
            </div>
            <div className="publication-item">
                <p>71. J. Xie, F. Jia, X. Wang, Z. Wang: Feeyo: The dilemma of Human Resources Management. China
                    Management Case-Sharing Center, 2019.</p>
            </div>
            <div className="publication-item">
                <p>72. J. Xie, F. Jia: IE Orchard: The Entrepreneur Incubator for Alumni. China Management Case-Sharing
                    Center, PJMT-0380, 2018.</p>
            </div>
            <div className="publication-item">
                <p>73. J. Xie, Y. Xia: Haodaifu Online: The Pioneer in Internet + Hierarchical Diagnosis and Treatment.
                    China Management Case-Sharing Center, OM-0216, 2017.</p>
            </div>
            <div className="publication-item">
                <p>74. J. Xie, Z. Liu: Rich-healthcare: A Strategic Choice in the Turbulent Environment. China
                    Management Case-Sharing Center, STR-0603, 2017.</p>
            </div>
            <div className="publication-item">
                <p>75. J. Xie, L. Zhou: Doctor of Chun Yu: The O+O Pattern in Healthcare Industry. China Management
                    Case-Sharing Center, OM-0199, 2016.</p>
            </div>

            <h2>Submitted Journal Papers</h2>
            <div className="publication-item">
                <p>76. J. Liu, H. Zhou, J. Xie, Z. Zheng et al: Efficacy of Renal Replacement Therapy for Patients with
                    Acute Kidney Injury in a Cardiothoracic Intensive Care Unit. (Under review at The Journal of
                    Thoracic and Cardiovascular Surgery)</p>
            </div>
            <div className="publication-item">
                <p>77. H. Zhou, W. Zhao, J. Xie, Z. Zheng, O.C. Ooi, H. Luo: A1c and sternal wound infection after
                    coronary artery bypass: systematic review and meta-analysis. (Under review at Journal of
                    Cardiothoracic Surgery)</p>
            </div>

            <h2>Work in progress</h2>
            <div className="publication-item">
                <p>78. J. Xie, H. Zhou: The treatment effect and optimal timing of RRT initialization.</p>
            </div>
            <div className="publication-item">
                <p>79. M. Sun, J. Xie: Deep reinforcement learning in extubation decision making.</p>
            </div>
            <div className="publication-item">
                <p>80. J. Xie, N. Yang, T. Zhu: Data-driven robust scheduling of elective patients.</p>
            </div>
            <div className="publication-item">
                <p>81. Z. Lou, J. Xie, N. Yang: Robust priority queue pricing.</p>
            </div>
            <div className="publication-item">
                <p>82. Z. Lou, M. Sim, J. Xie: Distributionally robust queueing networks.</p>
            </div>

        </div>
    );
};

export default PublicationsPage;
