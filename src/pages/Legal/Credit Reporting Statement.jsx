import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { motion } from 'framer-motion';

const CreditReportingStatement = () => {
  return (
    <LegalPageTemplate 
      title="Credit Reporting Statement"
      subtitle="Strawberry Loans Pty Ltd"
    >
      <div className="prose prose-invert max-w-none">
        {/* Company Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 p-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Company</p>
                  <p className="font-semibold text-white">Strawberry Loans Pty Ltd</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">ABN</p>
                  <p className="font-semibold text-white">74 621 474 655</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Australian Credit Licence</p>
                  <p className="font-semibold text-white">519253</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Represented by</p>
                  <p className="font-semibold text-white">Auzwide Pty Ltd</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">ACN</p>
                  <p className="font-semibold text-white">688 716 841</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Authorised Credit Representative</p>
                  <p className="font-semibold text-white">574043</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary/20 border-t border-white/10 px-8 py-4">
            <p className="text-sm text-gray-300 font-medium">
              <span className="text-secondary">Date Updated:</span> November 2025
            </p>
          </div>
        </motion.div>

        {/* Section A: Introduction */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION A – INTRODUCTION</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">1. INTRODUCTION</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.1</span>
                  This document is the Credit Reporting Statement of Strawberry Loans Pty Ltd ABN: 74 621 474 655. Strawberry Loans Pty Ltd ("Strawberry Loans, we or us").
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.2</span>
                  The purpose of this Credit Reporting Statement is to tell you how we collect, use, hold, disclose and protect your Credit Information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.3</span>
                  This Credit Reporting Statement should be read in conjunction with our Privacy Statement.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.4</span>
                  We act to protect your Credit Information in accordance with the Australian Privacy Principles, the Privacy Act 1988 (Cth) (the "Privacy Act") and the Privacy (Credit Reporting) Code 2024 ("CR Code").
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.5</span>
                  Please check the privacy page on our website regularly at the following address for amendments and updates to our Privacy Statement and Credit Reporting Statement: <span className="text-secondary">www.strawberryloans.com.au</span>
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section B: Information We May Collect */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION B – INFORMATION WE MAY COLLECT</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">2. WHAT IS CREDIT INFORMATION?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">2.1</span>
                  Credit Information is information that has a bearing on credit that has been provided to you or that you have applied for. This includes credit for personal, domestic or household purposes and credit in connection with a business. It can also cover information about you as a guarantor of a loan or as an insured party under a credit related insurance policy.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">2.2</span>
                  If you apply for credit or give a guarantee, we may collect information about your financial position for the purpose of assessing an application for credit and to assist in the ongoing management of the credit product or guarantee. The credit information we collect may include:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'identification information'],
                    ['(b)', 'credit application information - information in relation to a credit application, including the type and amount credit you have applied for'],
                    ['(c)', 'default information - a record of your consumer credit payments being overdue'],
                    ['(d)', 'serious credit infringement - a record of when a lender reasonably believes that there has been a fraud relating to your consumer credit or that you have avoided paying your consumer credit payments and the credit provider can\'t find you'],
                    ['(e)', 'personal insolvency information - a record relating to your bankruptcy or your entry into a debt agreement or personal insolvency agreement'],
                    ['(f)', 'court proceedings information - an Australian court judgment relating to your credit'],
                    ['(g)', 'publicly available information - a record relating to your activities in Australia and your credit worthiness'],
                    ['(h)', 'consumer credit liability information - certain details relating to your consumer credit, such as the name of the credit provider, the type of consumer credit, the day on which the consumer credit was entered into and terminated, the maximum amount of credit available and certain repayment terms and conditions'],
                    ['(i)', 'repayment history information - a record of whether or not you\'ve made your consumer credit payments and when they were paid'],
                    ['(j)', 'payment information - if a lender gave a credit reporting body default information about you and the overdue amount is paid, a statement that the payment has been made'],
                    ['(k)', 'new arrangement information - if a lender gave a credit reporting body default information about you and your consumer credit contract is varied or replaced, a statement about this']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">3. WHAT CREDIT INFORMATION DO WE COLLECT FROM OTHERS?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">3.1</span>
                  We may collect Credit Information about you from other people. This may happen without your direct involvement. For instance, we may collect credit reports from credit reporting bodies or opinions from other lenders about your creditworthiness. We may also seek credit information about you from:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'publicly available sources of information, such as public registers'],
                    ['(b)', 'your representatives (including your legal adviser, mortgage broker, financial adviser, executor, administrator, guardian or trustee)'],
                    ['(c)', 'your employer'],
                    ['(d)', 'other organisations, who jointly with us, provide products or services to you'],
                    ['(e)', 'commercial information service providers, such as companies that provide fraud prevention reports']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section C: Purposes */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION C – PURPOSES FOR COLLECTING, USING AND DISCLOSING CREDIT INFORMATION</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">4. HOW WE USE OR DISCLOSE YOUR CREDIT INFORMATION</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">4.1</span>
                  We may use the Credit Information that is collected and held by us to help us decide whether or not to provide credit to you (or to your related company or other entity). We may also use this information to derive or calculate a credit assessment score in relation to you, which we may use to help in conducting an assessment of your creditworthiness or the creditworthiness of your related company or other entity.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">4.2</span>
                  The Credit Information that we hold about you may be used by us in accordance with the Privacy Act and the CR Code.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">4.3</span>
                  The purposes for which we use your Credit Information may include:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'using your Credit Information to assess any application that you make to us for credit (or which is made by your related company or other entity)'],
                    ['(b)', 'using your Credit Information to collect payments that are owed to us in respect of any credit that we have previously provided to you (or to your related company or other entity)'],
                    ['(c)', 'disclosing your Credit Information to any of our related companies that are also are considering whether to provide credit to you (or to your related company or other entity)'],
                    ['(d)', 'where you have offered to guarantee credit that we have offered to provide to your related company or entity, to assess your suitability as a guarantor of that credit and to enforce that guarantee if required'],
                    ['(e)', 'disclosing your Credit Information to a third party that you or we ask to act as a guarantor of any credit provided to you'],
                    ['(f)', 'disclosing your Credit Information to the credit reporting body that we deal with. Credit reporting bodies collect different types of Credit Information about individuals and use that information to provide a credit-related service to their customers (including to us)'],
                    ['(g)', 'disclosing your Credit Information to other third parties that provide services to us (or to you on our behalf). These might include debt collectors, credit management agencies and other third parties that process applications for credit made to us'],
                    ['(h)', 'disclosing your Credit Information to other credit providers which provide, or are considering providing, credit to you (or to your related company or other entity)'],
                    ['(i)', 'using and disclosing Credit Information that we hold about you to assess and respond to any access or correction requests that you make to us'],
                    ['(j)', 'where we are consulted by a credit reporting body or another credit provider about an access or correction request that you have made to those entities, to respond to that consultation request'],
                    ['(k)', 'where you complain to the Office of the Australian Information Commissioner ("OAIC") or the Australian Financial Complaints Authority ("AFCA") about our treatment of your Credit Information, to respond to that complaint and to seek legal or other professional advice in relation to your complaint'],
                    ['(l)', 'using and disclosing Credit Information that we hold about you as required by law or the order of a court or tribunal'],
                    ['(m)', 'where you otherwise expressly consent to the use or disclosure']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">5. WHO DO WE DISCLOSE YOUR CREDIT INFORMATION TO?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">5.1</span>
                  We disclose your Credit Information to organisations to help deliver or support the provision of products or services to you. These may include:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'our agents, contractors and external service providers (for example, mailing houses and technology service providers)'],
                    ['(b)', 'credit representatives who sell products and services on our behalf'],
                    ['(c)', 'payment systems operators (for example, merchants receiving credit card payments)'],
                    ['(d)', 'other organisations, who jointly with us, provide products or services to you'],
                    ['(e)', 'other financial services organisations, including banks, superannuation funds, stockbrokers, custodians, fund managers and portfolio service providers'],
                    ['(f)', 'organisations involved in our funding of loans (including securitisation trustees, investors and their advisers)'],
                    ['(g)', 'credit reporting bodies'],
                    ['(h)', 'organisations that provide us with insurance to cover our lending risks'],
                    ['(i)', 'our financial advisers, legal advisers or auditors'],
                    ['(j)', 'your representatives (including your legal adviser, mortgage broker, financial adviser, executor, administrator, guardian or trustee)'],
                    ['(k)', 'government agencies or dispute resolution schemes that assist consumers in relation to credit'],
                    ['(l)', 'where permitted by law, debt collection agencies or other lenders, such as where you have given mortgage security over the same property to us and another lender']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">5.2</span>
                  We may also disclose your Credit Information to others where:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'we are required to disclose information by law e.g. under court orders or statutory notices pursuant to taxation or social security laws or under laws relating to sanctions, antimoney laundering or counter-terrorism financing'],
                    ['(b)', 'you may have expressly consented to the disclosure or your consent may be reasonably inferred from the circumstances'],
                    ['(c)', 'we are otherwise permitted to disclose the information under applicable privacy laws']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">5.3</span>
                  Where required by law, we make a written note (which may be kept in electronic form) of any use or disclosure that we make relating to your Credit Information.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">6. COLLECTING AND DISCLOSING CREDIT INFORMATION TO CREDIT REPORTING BODIES</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.1</span>
                  We may disclose information about you to, or collect information about you from a credit reporting body if you are applying for credit or you have obtained credit from us or if you guarantee or are considering guaranteeing the obligations of another person to us or you are a director of a company that is loan applicant or borrower or guarantor.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.2</span>
                  The Privacy Act and the CR Code limit the information we can give to credit reporting bodies and that the credit reporting body can give to us.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.3</span>
                  The information we can disclose to credit reporting bodies includes:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'identification details'],
                    ['(b)', 'the type and amount of credit you have e.g. credit cards, personal loans etc.'],
                    ['(c)', 'how much you have borrowed'],
                    ['(d)', 'if you have made your repayments'],
                    ['(e)', 'if you have committed fraud or another serious credit infringement']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.4</span>
                  Credit reporting bodies may include your Credit Information in reports that they provide to credit providers to assist those providers in assessing your creditworthiness. Some of that information may reflect adversely on your creditworthiness, e.g. if you fail to make payments or if you commit a serious credit infringement (like obtaining credit by fraud). That sort of information may affect your ability to get credit from other lenders.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.5</span>
                  The Privacy Act and the CR Code also limits what we can do with the information we obtain from a credit reporting body. Generally, it can only be used in relation to the consumer credit products you hold through us.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.6</span>
                  The credit reporting bodies we deal with are:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'Equifax - www.equifax.com.au'],
                    ['(b)', 'Illion - www.illion.com.au'],
                    ['(c)', 'Experian - www.experian.com.au']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.7</span>
                  For contact details and information on how credit reporting bodies manage Credit Information, please see the privacy policies available at the links above.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.8</span>
                  You can also ask a credit reporting body not to use or disclose your personal information for a period if you believe on reasonable grounds that you have been or are likely to be a victim of fraud.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.9</span>
                  We do not share any of your Credit Information with a credit reporting body, unless it has a business operation in Australia. We do not share credit eligibility information (that is, credit information we obtain about you from a credit reporting body or that we derive from that information) with organisations unless they have business operations in Australia.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">7. DO WE DISCLOSE YOUR CREDIT INFORMATION OVERSEAS?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">7.1</span>
                  We may utilise overseas service providers for some of our activities. These service providers may be located in:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'India'],
                    ['(b)', 'Philippines']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">7.2</span>
                  We only disclose your Credit Information when permitted to do so by the Privacy Act and after we ensure that:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'the overseas recipient does not breach the Australian Privacy Principles'],
                    ['(b)', 'you will be able to take action to enforce the protection of a law or binding scheme that has the effect of protecting the information in a way that is at least substantially similar to the way in which the Australian Privacy Principles protect the information'],
                    ['(c)', 'you have consented to the disclosure after we expressly informed you that there is no guarantee that the overseas recipient will not breach the Australian Privacy Principles'],
                    ['(d)', 'the disclosure of the information is required or authorised by or under an Australian law or a court/tribunal order']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">7.3</span>
                  We may store your Credit Information in cloud-based software or other types of networked or electronic systems. As electronic or networked systems can be accessed from various countries via an internet connection, it's not always practicable to know in which country your personal information may be held. If your personal information is stored in this way, disclosures may occur in countries other than those listed.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">7.4</span>
                  Overseas organisations may be required to disclose information we share with them under a foreign law. In those instances, we are not responsible for that disclosure.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section D: Access and Correction */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION D – ACCESS TO AND CORRECTION OF YOUR CREDIT INFORMATION</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">8. ACCESS TO A CREDIT REPORT ABOUT YOU</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">8.1</span>
                  You have the right to ask for a copy of any credit report we have obtained about you from a credit reporting body. However, as we may not have retained a copy after we have used it in accordance with the Privacy Act, the best means of obtaining an up-to-date copy is to get in touch with the credit reporting body directly.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">8.2</span>
                  You have a right to have any inaccuracies corrected or, if there is any dispute as to accuracy, to have a note added to your credit reporting body file explaining your position.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">8.3</span>
                  If we decline your credit application wholly or partly because of adverse information on your credit report, the Privacy Act requires us to tell you of that fact and how you can go about getting a copy of your credit report.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">9. CORRECTION</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">9.1</span>
                  We aim to hold up to date Credit Information about you at all times. If you consider that any information we hold about you is incorrect in any way, you may seek the correction of that information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">9.2</span>
                  To seek such a correction please call the relevant contact number provided at clause 11 below.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">9.3</span>
                  We do not charge a fee for requesting a correction of Credit Information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">9.4</span>
                  In certain situations, we may not agree to a request to correct information we hold about you. If this occurs, we will advise you of this and our reason for not agreeing to the correction request in writing.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">9.5</span>
                  If we refuse your request to correct your Credit Information, you also have the right to request that a statement be associated with your Credit Information noting that you disagree with its accuracy.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section E: Making a Privacy Complaint */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION E – MAKING A PRIVACY COMPLAINT</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">10. COMPLAINTS</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.1</span>
                  We offer a free internal complaint resolution scheme to all of our customers. Should you have a privacy complaint, please contact us to discuss your concerns. Our contact details set out as per clause 11 below.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.2</span>
                  To assist us in helping you, we ask you to follow a simple three-step process:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'gather all supporting documents relating to the complaint'],
                    ['(b)', 'contact us and we will review your situation and if possible, resolve your complaint immediately'],
                    ['(c)', 'if the matter is not resolved to your satisfaction, please contact our Compliance Officer on 0438 762 492, info@auzwideloans.com.au or put your complaint in writing and send it to Strawberry Loans, 325 Pacific Highway, Lake Munmorah, NSW 2259']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.3</span>
                  We rectify any breaches if the complaint is justified and will take necessary steps to resolve the issue.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.4</span>
                  In certain situations, to deal with a complaint it may be necessary to consult with third parties. However, please note any disclosure of personal information to third parties will be provided with your authority and consent.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.5</span>
                  After a complaint has been received, we send you a written notice of acknowledgement setting out the process. The complaint will be investigated, and the decision will be sent to you within thirty (30) days unless you have agreed to a longer time. If a complaint cannot be resolved within the agreed time frame or a decision could not be made within thirty (30) days of receipt, a notification will be sent out to you setting out the reasons and specifying a new date when you can expect a decision or resolution.
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-4">
                  <p>
                    <span className="inline-block w-8 font-semibold text-secondary">10.6</span>
                    If you are not satisfied with our internal privacy practices or the outcome in respect to your complaint, you may approach the Office of the Australian Information Commissioner ("OAIC") Commissioner with your complaint.
                  </p>
                  <div className="ml-8 space-y-1">
                    <p className="font-semibold text-white">Office of the Australian Information Commissioner</p>
                    <p><span className="text-secondary font-semibold">Address:</span> GPO Box 5218, Sydney NSW 2001</p>
                    <p><span className="text-secondary font-semibold">Phone:</span> 1300 363 992</p>
                    <p><span className="text-secondary font-semibold">Email:</span> enquiries@oaic.gov.au</p>
                    <p><span className="text-secondary font-semibold">Website:</span> oaic.gov.au</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-4">
                  <p>
                    <span className="inline-block w-8 font-semibold text-secondary">10.7</span>
                    AFCA is an external dispute resolution scheme in which we are a member. AFCA can consider certain privacy complaints relating to either the provision of credit or credit reporting information in general. You can lodge your complaint with:
                  </p>
                  <div className="ml-8 space-y-1">
                    <p className="font-semibold text-white">Australian Financial Complaints Authority</p>
                    <p><span className="text-secondary font-semibold">Auzwide Membership Number:</span> 119086</p>
                    <p><span className="text-secondary font-semibold">Strawberry Loans Pty Ltd Membership Number:</span> 75661</p>
                    <p><span className="text-secondary font-semibold">Address:</span> PO Box 3 Melbourne VIC 3001</p>
                    <p><span className="text-secondary font-semibold">Phone:</span> 1800 931 678 (free call)</p>
                    <p><span className="text-secondary font-semibold">Email:</span> info@afca.org.au</p>
                    <p><span className="text-secondary font-semibold">Website:</span> www.afca.org.au</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section F: Contact Us */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION F – CONTACT US</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">11. CONTACT DETAILS</h3>
              <p className="mb-4 text-gray-300 leading-relaxed">
                <span className="inline-block w-8 font-semibold text-secondary">11.1</span>
                If you have any questions or would like further information about our privacy, credit reporting and information handling practices, please contact us by:
              </p>
              <div className="ml-8 grid md:grid-cols-3 gap-4">
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(a) Email</p>
                  <p className="text-sm font-medium text-white">info@auzwideloans.com.au</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(b) Phone</p>
                  <p className="text-sm font-medium text-white">0438 762 492</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(c) Post</p>
                  <p className="text-sm font-medium text-white">325 Pacific Highway, Lake Munmorah, NSW 2259</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </LegalPageTemplate>
  );
};

export default CreditReportingStatement;
