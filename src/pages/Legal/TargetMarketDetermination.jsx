import React from 'react';
import { motion } from 'framer-motion';
import LegalPageTemplate from './LegalPageTemplate';

const TargetMarket = () => {
  return (
    <LegalPageTemplate 
      title="Target Market Determination" 
      subtitle="Medium Amount Credit Contracts – Personal Loans"
    >
      <div className="space-y-8 text-gray-300">
        {/* Company Information Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl"
        >
          <div className="p-8 text-center space-y-2">
            <p className="font-bold text-white text-lg">STRAWBERRY LOANS PTY LTD</p>
            <p className="font-bold text-white">REPRESENTED BY AUZWIDE PTY LTD</p>
            <p className="font-semibold text-gray-300">(AUTHORISED CREDIT REPRESENTATIVE)</p>
            <div className="flex justify-center gap-8 mt-4 flex-wrap">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Australian Credit Licence</p>
                <p className="font-bold text-secondary">519253</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Credit Representative Number</p>
                <p className="font-bold text-secondary">574043</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-secondary mb-4">TARGET MARKET DETERMINATION (TMD)</h2>
          <h3 className="text-xl font-semibold text-white mb-4">Medium Amount Credit Contracts – Personal Loans</h3>
          <p className="leading-relaxed">Prepared and published in acknowledgement of the requirements imposed on "issuer" companies involved in the provision of credit under the Treasury Laws Amendment (Design and Distribution Obligations and Product Intervention Powers) Act 2019.</p>
          
          <p className="leading-relaxed">The product is a Medium Amount Credit Contract (as defined in Section 204 and prescribed in Sections 32A and 32B of the National Credit Code) – a consumer loan product regulated by the National Consumer Credit Protection Act 2009.</p>
        </motion.div>

        {/* Key Attributes */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">Key Attributes of the Product</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10">
            <ul className="space-y-2">
              {[
                'Loan amounts from $2,001 to $5,000.',
                'Loan terms from 6 to 24 months.',
                'Interest rates (annual cost rates) up to and including 47.6158% per annum.',
                'Establishment fee - $400.',
                'Secured and unsecured loans, with security, when required, taken over the consumer\'s motor vehicle or other unencumbered asset.',
                'Fixed interest rate.',
                'Equal repayments - weekly, fortnightly or monthly.',
                'No termination or early payout fee.',
                'No balloon payment.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Target Consumers */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">Who are the Target Consumer/s, Target Market?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-3">
            <p className="text-gray-200 font-semibold">Consumers who:</p>
            <ul className="space-y-2">
              {[
                'are individuals between 18-70 years of age;',
                'with a proven source of income;',
                'with an established credit history;',
                'with stable residence;',
                'have security to offer (e.g. unencumbered motor vehicle registered in their name);',
                'meet lending criteria concerning affordability of the loan;',
                'satisfy National Consumer Credit Protection Act responsible lending requirements as to availability of financial information.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Excluded Consumers */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">Consumers or Classes of Consumers Excluded from the Target Market</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-3">
            <p className="text-gray-200 font-semibold">Consumers who are:</p>
            <ul className="space-y-2">
              {[
                'currently bankrupt;',
                'currently in a debt agreement;',
                'unlikely to have a stable and adequate source of income during the loan term;',
                'under the age of 18 or over 70;',
                'not either an Australian citizen, or permanent resident;',
                'are unable to provide financial information required for verification during the application process; and',
                'are unable to understand the nature of a credit contract.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Target Consumers Objectives, Financial Situation and Needs */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">Target Consumers' Likely Objectives, Financial Situation and Needs</h3>
          </div>
          
          <div className="pl-5 border-l-2 border-white/10 space-y-6">
            {/* Consumer's Likely Objectives */}
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Consumer's Likely Objectives</h4>
              <ul className="space-y-2">
                {[
                  'easy online application;',
                  'ease of dealing with their source of loan finance;',
                  'quick responses;',
                  'fast turnaround times;',
                  'fixed interest rates;',
                  'relatively short loan terms;',
                  'equal repayments to fit within their budget;',
                  'flexible payment frequency to suit their budget;',
                  'ability to understand the credit product;',
                  'access to adequate information;',
                  'avoidance of unnecessary financial risk;',
                  'satisfaction of risk profile; and',
                  'ability to derive benefit from the loan product.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consumer's Likely Financial Situation */}
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Consumers Likely Financial Situation</h4>
              <ul className="space-y-2">
                {[
                  'stable income;',
                  'not unemployed or underemployed;',
                  'not retired;',
                  'with an established credit history;',
                  'manageable other debt;',
                  'adequately managed and controlled expenditure on alcohol, Buy Now/Pay Later transactions and gambling;',
                  'recent bank statements demonstrate financial management without experiencing substantial hardship;',
                  'income amount in excess of other existing and projected commitments and proposed loan repayments; and',
                  'no current indication of adverse financial issues arising and negatively impacting on the ability to repay loans over the anticipated term of the new loan.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consumer's Likely Needs */}
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Consumer's Likely Needs</h4>
              <p className="leading-relaxed">Seeking a loan of between $2,001 and $5,000 (plus establishment fee of $400 if applicable) to purchase an asset or other goods and services, or to consolidate other debts/bills, pay for car repairs, holidays, weddings, funerals, education, renovations and spread repayments over a relatively short term.</p>
            </div>
          </div>
        </motion.section>

        {/* Product Consistency */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">Why the Product is Likely to be Consistent with the Likely Objectives, Financial Situation and Needs of Consumers in the Target Market?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="leading-relaxed">The product is a simple credit product, which is the foundation for the likely effect of the company's distribution conditions.</p>
            <p className="leading-relaxed">Product features, such as loan amounts, fixed interest rates, short to medium loan terms, equal repayments and choice of payment frequency are likely to be consistent with the likely objectives, financial situation and needs of consumers in the target market. Additionally, the service provided by Strawberry Loans, including easy online application, quick response and turnaround times, is also likely to meet the likely objectives, financial situation and needs of consumers in the target market.</p>
            <p className="leading-relaxed">The products have been the subject of robust testing under the Commonwealth credit regulatory regime, are fundamental to the Australian market place in that they do not have any unique features that are unfamiliar to the consumers in the target markets, most of whom have relevant borrowing experience.</p>
            <p className="leading-relaxed">Company loan performance data and feedback from distributors, engaged from time to time, does not reveal any systemic inconsistencies between the design of the credit product and the target market's requirements, financial circumstances and needs.</p>
            <p className="leading-relaxed">Industry sector research commissioned by two industry sector representative organisations since 2008, and the industry sector's overall maintenance or growth in demand according to target market sub-set statistics, indicates continuing consistency between this product category and the target market's requirements, financial situation and needs.</p>
          </div>
        </motion.section>

        {/* Distribution Method */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">Distribution Method?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="leading-relaxed">Auzwide Pty Ltd as the Authorised Credit Representative, via internet and telephone contact with applicant consumers.</p>
            <p className="leading-relaxed">The distribution communications methodologies adopted, or that could be adopted, include websites, emails, Australia Post, social media and traditional advertising media such as print, radio and television from time to time.</p>
            <p className="leading-relaxed">In accordance with the National Consumer Credit Protection Act 2009, Strawberry Loans, has the final decision on loan approval and supervises both in-house product distribution and brokers' efforts, with close attention to the Design and Distribution Obligations.</p>
          </div>
        </motion.section>

        {/* Distribution Conditions */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">What Conditions or Restrictions are Placed on Distribution?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="text-gray-200 font-semibold">Conditions and/or restrictions include:</p>
            <ul className="space-y-2">
              {[
                ['(a)', 'No systematic ignoring or avoidance of this Target Market determination.'],
                ['(b)', 'Both company in-house representatives and authorised credit representatives\' roles must adhere to company policy concerning loan suitability for consumers.'],
                ['(c)', 'Consumer decision fatigue, vulnerabilities and decision timing must be accommodated to avoid uninformed or unsuitable distribution to target market sub-sets.']
              ].map(([label, text], idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-secondary">{label}</span>
                  <span className="flex-1">{text}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed">As with the outcome of reviews, the conditions or restrictions imposed are an attempt to eliminate, or at least minimise, the actual or potential degree of harm.</p>
          </div>
        </motion.section>

        {/* Why Conditions Prevent Outside Distribution */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">Why Do Those Conditions Mean the Product is Not Likely to be Distributed to Consumers Outside the Target Market?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="leading-relaxed">These conditions are clearly communicated to all company representatives and distributors and are incorporated in employment and engagement agreements. They form part of the major terms and conditions of those agreements.</p>
            <p className="leading-relaxed">Strawberry Loans has regular reviews of company credit policy, procedures and processes.</p>
          </div>
        </motion.section>

        {/* Triggers for TMD */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">What Triggers Make It (the Product or TMD) No Longer Appropriate?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="text-gray-200 font-semibold">These include, but may not be limited to, the following events and circumstances:</p>
            <ul className="space-y-2">
              {[
                ['(a)', 'Changes in legislation affecting the product or TMD.'],
                ['(b)', 'Reports from distributors and company personnel that a significant number of enquiries and applications are being received from potential consumers outside the defined target market.'],
                ['(c)', 'The companies\' reviews, both ad hoc and scheduled, that reveal an inconsistency or mismatch between the product features and the target market\'s requirements, financial circumstances and/or needs. This causing, or likely to cause, identified material consumer financial or non-financial harm and being incapable of elimination or minimisation by subsequent TMD action.'],
                ['(d)', 'Economic changes, however caused, impacting on target market financial circumstances.'],
                ['(e)', 'Cultural changes and changes in traditions and fads, impacting on borrowing habits, preferences and purchasing and timing decisions using borrowed funds, all potentially leading to changes in target market requirements.'],
                ['(f)', 'Socio-economic changes impacting on perceived and actual target market needs.'],
                ['(g)', 'Significant dealings indicating a material inconsistency between the TMD and the delivered credit product and/or distributors and/or target market.']
              ].map(([label, text], idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-secondary">{label}</span>
                  <span className="flex-1">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Review Frequency */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">How Often We Want to Review the TMD</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="leading-relaxed">The first review will be scheduled to regular reviews will be every 2 years.</p>
            <p className="leading-relaxed">Where issues of concern in regard to inconsistency between the TMD and the credit product and/or target market arise, between these regular scheduled reviews, the companies' policy is to undertake a review and action the review's findings within 10 business days of the adverse information being brought to the attention of the company's TMD Manager, and with implementation of all recommendations.</p>
            <p className="leading-relaxed">Where deemed appropriate and material, complaints, if any, will be brought to ASIC's attention by way of a "Significant Dealing Notification", within 10 days of any relevant review being completed.</p>
          </div>
        </motion.section>

        {/* Review Triggers */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">What Would Trigger a Review Before the Standard Review?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10">
            <ul className="space-y-2">
              {[
                'Legislation changes affecting the product.',
                'Significant and unexpected increase in default rates, hardship rates or product complaint rates.',
                'A significant increase in applications from consumers outside the target market.',
                'Poor product performance or outcomes.',
                'Poor distribution delivery.',
                'Any other material inconsistency coming to the attention of the company, from any information source, in regard to the TMD and/or the product and/or the distribution and/or the target market.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Complaints Reporting */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">How Often Do We Want Distributors to Report Complaints Information to Us?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="leading-relaxed">Reporting from in-house representatives and third party distributors is scheduled monthly, but where numbers or type of complaint indicate a material significance, reporting will occur as soon as that significance emerges and is noted.</p>
            <p className="leading-relaxed">In-house management and staff who are not representatives will also be encouraged to report at any time, where deemed relevant.</p>
            <p className="leading-relaxed">In addition, the companies will welcome reports from other non-representatives and non-distributors at any time.</p>
          </div>
        </motion.section>

        {/* Reporting Format */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">In What Format and with What Detail Do We Want Them to Report to Us?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="leading-relaxed">By email to the Responsible Manager in that Manager's role as TMD Manager.</p>
            <p className="text-gray-200 font-semibold">Details to be reported include:</p>
            <ul className="space-y-2">
              {[
                'number of complaints received;',
                'time period over which the complaints were received;',
                'name of consumers;',
                'what the problem was, with particular attention to target market requirements, financial circumstances and needs;',
                'what the resolution was;',
                'the time to resolve it; and',
                'if there are any unresolved complaints.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Additional Reporting */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">Do We Want Them to Report Anything Else to Us?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10">
            <p className="leading-relaxed">Yes. In circumstances where there is no material level of complaint, or type of complaint, in their professional judgement a trend may be emerging, or the evolution of a more serious or material complaint could occur without attention to the causal issue at the time of the report.</p>
          </div>
        </motion.section>

        {/* Significant Dealing */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="space-y-4"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-secondary mr-4 rounded-full"></div>
            <h3 className="text-xl font-bold text-secondary">What Will We Determine to be a Significant Dealing?</h3>
          </div>
          <div className="pl-5 border-l-2 border-white/10 space-y-4">
            <p className="leading-relaxed text-gray-200 font-semibold">The companies will determine that there has been a significant dealing in the following circumstances (unless these are due to loan application fraud):</p>
            <ul className="space-y-2">
              {[
                ['(a)', 'where there are material levels of interest or demand from consumers outside the target market;'],
                ['(b)', 'if the product is distributed to consumers under 18 years of age;'],
                ['(c)', 'if the product is distributed to consumers who are not Australian citizens or permanent residents; and'],
                ['(d)', 'if the product is distributed in a manner that is otherwise materially inconsistent with company polices, as may be determined from time to time.']
              ].map(([label, text], idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-secondary">{label}</span>
                  <span className="flex-1">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

      </div>
    </LegalPageTemplate>
  );
};

export default TargetMarket;