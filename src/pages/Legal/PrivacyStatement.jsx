import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { motion } from 'framer-motion';

const PrivacyStatement = () => {
  return (
    <LegalPageTemplate title="Privacy Statement">
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
                  <p className="font-semibold text-white">519 253</p>
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
                  <p className="font-semibold text-white">574 043</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary/20 border-t border-white/10 px-8 py-4">
            <p className="text-sm text-gray-300 font-medium">
              <span className="text-secondary">Updated:</span> November 2025
            </p>
          </div>
        </motion.div>

        {/* Section A - Introduction */}
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
                  This document is the Privacy Statement of Strawberry Loans Pty Ltd ABN: 74 621 474 655 ("Strawberry Loans, we or us").
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.2</span>
                  The purpose of this Privacy Statement is to tell you how we collect, use, hold, disclose and protect your Personal Information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.3</span>
                  Please refer to Strawberry Loans' Credit Reporting Statement for information about how we manage your Personal Information collected in connection with a credit application or facility.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.4</span>
                  We act to protect your Personal Information in accordance with the Australian Privacy Principles ("APP") and the Privacy Act 1988 (Cth) (together "Privacy Laws").
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.5</span>
                  Please always check the privacy policy page on our website regularly for amendments and updates to our Privacy Statement and Credit Reporting Statement.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">1.6</span>
                  This Privacy Statement does not cover information that you submit on other websites, even if we communicate with you on those sites. For example, if contact us via Instagram, Facebook, Pinterest, Twitter, or YouTube, that information is governed by the privacy policies on those websites and is not governed by this Privacy Statement.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section B - Information We May Collect */}
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
              <h3 className="text-xl font-semibold text-white mb-4">2. WHAT IS PERSONAL INFORMATION?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">2.1</span>
                  Personal Information is any information or opinion about you that is capable, or reasonably capable, of identifying you, whether the information or opinion is true or not and is recorded in material form or not. Personal Information includes Sensitive Information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">2.2</span>
                  Sensitive Information includes such things as your racial or ethnic origin, political opinions or membership of political associations, religious or philosophical beliefs, membership of a professional or trade association or trade union, sexual orientation or criminal record, that is also personal information. Your health, genetic and biometric information and biometric templates are also Sensitive Information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">2.3</span>
                  We only collect Sensitive Information about you if we obtain prior consent to the collection of the information or if the collection is required or authorised by law.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">2.4 WHAT KIND OF PERSONAL INFORMATION DO WE COLLECT AND HOLD?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">2.5</span>
                  The Personal Information we collect and hold generally includes or consists of:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'identification information such as your name, postal or email address, telephone numbers and date of birth'],
                    ['(b)', 'other contact details such as social media handles'],
                    ['(c)', 'your tax file number and tax residency status'],
                    ['(d)', 'financial and transactional information'],
                    ['(e)', 'health and biometric information (where permitted)'],
                    ['(f)', 'information about how you interact with us when you use our website (such as device information - which browser you use and your operating system language, your location or activity including IP address and geolocation data based on the GPS of your mobile device (when accessing our services) and whether you\'ve accessed third party sites)'],
                    ['(g)', 'other information we think is necessary']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">2.6</span>
                  Over the course of our relationship with you, we may collect and hold additional pieces of Personal Information about you, including transactional information, account or policy information, complaint or enquiries about your product or service.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">2.7</span>
                  We are required by law to identify you if you are opening a new account or adding a new signatory to an existing account. The Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth) and Anti-Money Laundering and Counter-Terrorism Financing Rules Instrument 2007 (No. 1) ("Anti-Money Laundering Laws") require us to sight and record details of certain documents (i.e. photographic and non-photographic documents) in order to meet the standards set under those laws.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section C - Consent */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION C – CONSENT</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">3. CONSENT</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">3.1</span>
                  In most cases, before or at the time of collecting your Personal Information, we obtain your consent for the purposes for which we intend to use and disclose your Personal Information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">3.2</span>
                  If you don't give us consent, we may not be able to provide you with the products or services you want. This is because we are required to collect this Personal Information to provide you with the products or services.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">4. WITHDRAWING CONSENT</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">4.1</span>
                  Having provided consent, you are able to withdraw it at any time. To withdraw consent, please contact us. Please note that withdrawing your consent may lead to us no longer being able to provide you with the product or service you enjoy given that, as mentioned above, it is impracticable for us to treat some customers differently.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section D - When and How We Collect Personal Information */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION D – WHEN AND HOW WE COLLECT PERSONAL INFORMATION</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">5. HOW DO WE COLLECT PERSONAL INFORMATION?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">5.1</span>
                  We collect most Personal Information about you directly from you whether in person, over the phone or electronically. For example:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'when you apply for, register your interest in or enquire about a product or service'],
                    ['(b)', 'when you provide us with feedback or make a complaint'],
                    ['(c)', 'when you visit our website or social media channels'],
                    ['(d)', 'when you complete a form on our website'],
                    ['(e)', 'when you talk to us or do business with us'],
                    ['(f)', 'when you subscribe to our newsletter']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">5.2</span>
                  We may collect Personal Information about you from others, such as from:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'service providers'],
                    ['(b)', 'agents'],
                    ['(c)', 'advisors'],
                    ['(d)', 'employers'],
                    ['(e)', 'friends/family members']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">5.3</span>
                  We may take steps to verify the information we collect for example, a birth certificate provided as identification may be verified with records held by the Registry of Births, Deaths and Marriages to protect against impersonation, or we may verify with an employer that employment and remuneration information provided in an application for credit is accurate.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">6. DO WE COLLECT INFORMATION ELECTRONICALLY?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.1</span>
                  We may collect information from you electronically through internet browsing on our websites.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.2</span>
                  Each time you visit our websites, we may collect information about you which may include Personal Information (which is de-identified) and may include the following:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'the date and time of visits'],
                    ['(b)', 'the pages viewed and your browsing behaviour'],
                    ['(c)', 'how you navigate through the site and interact with pages (including fields completed in forms and applications completed)'],
                    ['(d)', 'general location information'],
                    ['(e)', 'information about the device used to visit our website (including your tablet or mobile device) such as device IDs'],
                    ['(f)', 'IP addresses']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.3</span>
                  We collect information using cookies when you use our website. Cookies are small pieces of information stored on your hard drive or in memory. One of the reasons for using cookies is to offer you increased security. They can also record information about your visit to our websites, allowing us to remember you the next time you visit and provide a more meaningful experience.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.4</span>
                  We may also collect information from third party websites, applications or platforms containing our interactive content or that interface with our own website such as Google Analytics.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">6.5</span>
                  We may collect Personal Information about you from social media platforms if you publicly comment. We NEVER ask you to supply Personal Information publicly over any social media platforms that we use. We may, invite you to send your details to us via private messaging, for example, to answer a question about your account. You may also be invited to share your Personal Information through secure channels to participate in other activities, such as online competitions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">7. HOW DO WE DEAL WITH UNSOLICITED PERSONAL INFORMATION?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">7.1</span>
                  If we receive Personal Information that is not solicited by us, we only retain it, if we determine that it is reasonably necessary for one or more of our functions or activities and that you have consented to the information being collected or given the absence of your consent that it was impracticable or unreasonable for us to obtain it under the circumstances.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">7.2</span>
                  If these conditions are not met, we destroy or de-identify the information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">7.3</span>
                  If such unsolicited information is Sensitive Information, we obtain your consent to retain it regardless of what the circumstances are.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section E - Purposes for Collecting, Using and Disclosing Personal Information */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION E – PURPOSES FOR COLLECTING, USING AND DISCLOSING PERSONAL INFORMATION</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">8. WHY DO WE COLLECT, USE AND DISCLOSE YOUR PERSONAL INFORMATION?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">8.1</span>
                  We collect, use and disclose your Personal Information so we can:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'consider your request for products and services, including your eligibility'],
                    ['(b)', 'process your application and provide you with the products and services'],
                    ['(c)', 'provide information on other products and services offered by or through us'],
                    ['(d)', 'confirm your identity'],
                    ['(e)', 'manage our relationship with you'],
                    ['(f)', 'complying with our legal obligations'],
                    ['(g)', 'monitor and evaluate products and services'],
                    ['(h)', 'gather and aggregate information for statistical, prudential, actuarial and research purposes'],
                    ['(i)', 'assist you with queries'],
                    ['(j)', 'take measures to detect and prevent fraud']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">8.2</span>
                  We may not be able to provide you with the products or services you are seeking if you provide incomplete or inaccurate information.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section F - Integrity of Your Information */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION F – INTEGRITY OF YOUR INFORMATION</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">9. QUALITY OF INFORMATION</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">9.1</span>
                  We ensure that the Personal Information we collect, use or disclose is accurate, up to date, complete and relevant.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">9.2</span>
                  Please contact us if any of the details you have provided to us change or if you believe that the information we have about you is not accurate or up to date.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">9.3</span>
                  We may also take steps to update information we hold, for example, an address, by collecting Personal Information from publicly available sources such as telephone directories or electoral rolls.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">10. HOW DO WE PROTECT AND HOLD YOUR PERSONAL INFORMATION?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.1</span>
                  We are committed to ensuring that we protect any Personal Information we hold from misuse, interference, loss, unauthorised access, modification and disclosure.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.2</span>
                  For this purpose, we have a range of practices and policies in place to provide a robust security environment. We ensure the on-going adequacy of these measures by regularly reviewing them.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.3</span>
                  We have the following security measures in place to protect against misuse, loss and alteration of Personal Information under our control. Our security measures include, but are not limited to:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'educating our staff as to their obligations with regard to your personal information'],
                    ['(b)', 'requiring our staff to use passwords when accessing our systems'],
                    ['(c)', 'encrypting data sent from your computer to our systems during Internet transactions and customer access codes transmitted across networks'],
                    ['(d)', 'employing firewalls, intrusion detection systems and virus scanning tools to protect against unauthorised persons and viruses from entering our systems'],
                    ['(e)', 'using dedicated secure networks or encryption when we transmit electronic data for purposes of outsourcing'],
                    ['(f)', 'providing secure storage for physical records'],
                    ['(g)', 'employing physical and electronic means such as alarms, cameras and guards (as required) to protect against unauthorised access to buildings']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.4</span>
                  Where Personal Information we hold is identified as no longer needed for any purpose, we ensure it is effectively and securely destroyed, for example, by shredding or pulping in the case of paper records or by degaussing (demagnetise of the medium using alternating electric currents) and other means in the case of electronic records and equipment.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">10.5</span>
                  The Personal Information retained by us could include transactional and financial information along with contact details. The Personal Information does include the records that have been stored on the secure server. Where we retain adequate records for legal and accounting purposes, the Personal Information is stored and held securely in controlled facilities.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section G - Disclosure of Personal Information */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION G – DISCLOSURE OF PERSONAL INFORMATION</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">11. WHO DO WE SHARE YOUR PERSONAL INFORMATION WITH?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">11.1</span>
                  We may share your Personal Information with third parties to help deliver or support the provision of products or services to you.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">11.2</span>
                  In all circumstances where your Personal Information may become known to our contractors, agents and outsourced service providers, there are confidentiality arrangements in place. Contractors, agents and outsourced service providers are not able to use or disclose Personal Information for any purposes other than our own.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">11.3</span>
                  We take our obligations to protect your Personal Information very seriously we make every effort to deal only with parties who share and demonstrate the same attitude.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">11.4</span>
                  Depending on the product or service you have, the entities we exchange your Personal Information with include but are not limited to:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'brokers and agents'],
                    ['(b)', 'affiliated product and service providers and external product and service providers for whom we act as agent (so that they may provide you with the product or service you seek or in which you have expressed an interest)'],
                    ['(c)', 'auditors we appoint to ensure the integrity of our operations'],
                    ['(d)', 'any person acting on your behalf, including your solicitor, settlement agent, accountant, executor, administrator, trustee or guardian'],
                    ['(e)', 'your referee (to confirm details about you)'],
                    ['(f)', 'if required or authorised to do so, regulatory bodies and government agencies'],
                    ['(g)', 'credit reporting bodies'],
                    ['(h)', 'debt collectors'],
                    ['(i)', 'insurers, including proposed insurers and insurance reference agencies (where we are considering whether to accept a proposal of insurance from you and, if so, on what terms)'],
                    ['(j)', 'medical practitioners (to verify or clarify, if necessary, any health information you may provide)'],
                    ['(k)', 'other financial institutions and organisations at their request if you seek credit from them (so that they may assess whether to offer you credit)'],
                    ['(l)', 'investors, advisers, trustees and ratings agencies where credit facilities and receivables are pooled and sold (securitised)'],
                    ['(m)', 'other organisations who in conjunction with us provide products and services (so that they may provide their products and services to you)'],
                    ['(n)', 'professional associations or organisations with whom we conduct an affinity relationship (to verify your membership of those associations or organisations)']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">11.5</span>
                  We may also disclose your Personal Information to others where:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'we are required to disclose information by law e.g. under court orders or statutory notices pursuant to taxation or social security laws or under laws relating to sanctions, antimoney laundering or counter-terrorism financing'],
                    ['(b)', 'you may have expressly consented to the disclosure or your consent may be reasonably inferred from the circumstances'],
                    ['(c)', 'we are otherwise permitted to disclose the information under applicable Privacy Laws']
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
              <h3 className="text-xl font-semibold text-white mb-4">12. DO WE DISCLOSE YOUR PERSONAL INFORMATION OVERSEAS?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">12.1</span>
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
                  <span className="inline-block w-8 font-semibold text-secondary">12.2</span>
                  We only disclose your Personal Information when permitted to do so by the Privacy Act and after we ensure that:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'the overseas recipient does not breach the APPs'],
                    ['(b)', 'you are able to take action to enforce the protection of a law or binding scheme that has the effect of protecting the information in a way that is at least substantially similar to the way in which the APPs protect the information'],
                    ['(c)', 'you have consented to the disclosure after we expressly informed you that there is no guarantee that the overseas recipient does not breach the APPs'],
                    ['(d)', 'the disclosure of the information is required or authorised by or under an Australian law or a court/tribunal order']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">12.3</span>
                  We may store your Personal Information in cloud-based software or other types of networked or electronic systems. As electronic or networked systems can be accessed from various countries via an internet connection, it's not always practicable to know in which country your Personal Information may be held. If your Personal Information is stored in this way, disclosures may occur in countries other than those listed.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">12.4</span>
                  Overseas organisations may be required to disclose information we share with them under a foreign law. In those instances, we are not responsible for that disclosure.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">13. DO WE USE OR DISCLOSE YOUR PERSONAL INFORMATION FOR DIRECT MARKETING?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">13.1</span>
                  We only use or disclose the Personal information we hold about you for the purpose of direct marketing if we have received the Personal Information from you and you have not requested not to receive such information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">13.2</span>
                  Direct marketing includes, but is not limited to, contacting our clients to provide you with information on our products and services that may interest you.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">13.3</span>
                  If you wish to opt-out of receiving marketing information altogether, you can:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'call us on info@auzwideloans.com.au and'],
                    ['(b)', 'write to us at 325 Pacific Highway, Lake Munmorah, NSW 2259']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">13.4</span>
                  In direct marketing communication we always inform you of your right to opt out of receiving direct marketing communications.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section H - Access to and Correction of Your Personal Information */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION H – ACCESS TO AND CORRECTION OF YOUR PERSONAL INFORMATION</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">14. HOW CAN YOU ACCESS YOUR PERSONAL INFORMATION?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">14.1</span>
                  You can request us to provide you with access to the Personal Information we hold about you.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">14.2</span>
                  Requests for access to limited amounts of Personal Information, such as checking to see what address or telephone number we have recorded, can generally be handled over the telephone.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">14.3</span>
                  Following receipt of your request, we provide you with an estimate of the access charge and confirm that you want to proceed.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">14.4</span>
                  We do not charge you for making the request for access, however access charges may apply to cover our costs in locating, collating and explaining the information you requested. The charges are based on a rate of $120 per hour.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">14.5</span>
                  We do respond to your request as soon as possible and in the manner requested by you. We endeavour to comply with your request within fourteen (14) days of its receipt but, if that deadline cannot be met owing to exceptional circumstances, your request is dealt with within thirty (30) days. It helps us provide access if you can tell us what you are looking for.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">14.6</span>
                  Your identity is confirmed before access is provided.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">15. CAN WE REFUSE TO GIVE ACCESS?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">15.1</span>
                  In particular circumstances we are permitted by law to deny your request for access or limit the access we provide. We let you know why your request is denied or limited if this is the case. For example, we are not required to give you access where giving you access to your Personal Information would pose a serious threat to any person's life, health or safety or giving access would be unlawful or where we reasonably conclude your request to be frivolous or vexatious.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">15.2</span>
                  If we refuse to give access to the Personal Information or to give access in the manner requested by you, we will give you a written notice setting out the reasons for the refusal, the mechanisms available to complain and any other relevant matter.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">16. CORRECTION</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">16.1</span>
                  We are committed to and do take all reasonable steps in respect of maintaining accurate, timely, relevant, complete and appropriate information about our clients, website users and other people that we deal with in our business.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">16.2</span>
                  We correct all Personal information that we believe to be inaccurate, out of date, incomplete, irrelevant or misleading given the purpose for which that information is held or if you request us to correct the information.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">16.3</span>
                  If we correct your Personal Information that we previously disclosed to another APP entity you can request us to notify the other APP entity of the correction. Following such a request, we will give that notification unless it is impracticable or unlawful to do so.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">16.4</span>
                  We respond to any requests for correction within a reasonable time of receipt of the request. A reasonable time period is no longer than thirty (30) days after the request being received.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">17. REFUSAL TO CORRECT INFORMATION</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">17.1</span>
                  If we refuse to correct the Personal Information as requested by you, we give you a written notice setting out the reasons for the refusal. Such reasons set out the grounds for refusal, the mechanisms available to complain and any other relevant matter.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">18. REQUEST TO ASSOCIATE A STATEMENT</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">18.1</span>
                  If we refuse to correct the Personal Information as requested by you, you can request us to associate with the information a statement that the information is inaccurate, out of date, incomplete, irrelevant or misleading. We will then associate the statement in such a way that makes the statement apparent to users of the information.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section I - Notifiable Data Breaches */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION I – NOTIFIABLE DATA BREACHES</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">19. NOTIFIABLE DATA BREACHES SCHEME</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">19.1</span>
                  From February 2018, the Privacy Act includes a new Notifiable Data Breaches ("NDB") scheme which requires us to notify you and the Office of the Australian Information Commissioner ("OAIC") of certain data breaches that is likely to result in serious harm to affected individuals and provide recommendations of steps you can take to limit the impacts of the breach.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">19.2</span>
                  If we believe there has been a data breach that impacts your Personal Information and creates a likely risk of serious harm, we notify you and the OAIC as soon as practicable and keep in close contact with you about the nature of the breach, the steps we are taking and what you can do to reduce the impacts to your privacy.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">19.3</span>
                  If you believe that any Personal Information we hold about you has been impacted by a data breach, you can contact us using the contact details set out as per clause 21 below.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section J - Making a Privacy Complaint */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION J – MAKING A PRIVACY COMPLAINT</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">20. COMPLAINTS</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">20.1</span>
                  We offer a free internal complaint resolution scheme to all of our customers. Should you have a privacy complaint, please contact us to discuss your concerns. Our contact details set out as per clause 21 below.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">20.2</span>
                  To assist us in helping you, we ask you to follow a simple three-step process:
                </p>
                <ul className="space-y-2 ml-8">
                  {[
                    ['(a)', 'gather all supporting documents relating to the complaint'],
                    ['(b)', 'contact us and we review your situation and if possible, resolve your complaint immediately'],
                    ['(c)', 'if the matter is not resolved to your satisfaction, please contact our Directors/Compliance Officer on 0438 762 492 or put your complaint in writing and send it to Strawberry Loans, 325 Pacific Highway, Lake Munmorah, NSW 2259']
                  ].map(([label, text], idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                      <span className="flex-1">{text};</span>
                    </li>
                  ))}
                </ul>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">20.3</span>
                  We rectify any breach if the complaint is justified and take necessary steps to resolve the issue.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">20.4</span>
                  In certain situations, to deal with a complaint it may be necessary to consult with third parties. However, please note any disclosure of Personal Information to third parties is provided with your authority and consent.
                </p>
                <p>
                  <span className="inline-block w-8 font-semibold text-secondary">20.5</span>
                  After a complaint has been received, we send you a written notice of acknowledgement setting out the process. The complaint is investigated, and the decision is sent to you within thirty (30) days unless you have agreed to a longer time. If a complaint cannot be resolved within the agreed time frame or a decision could not be made within thirty (30) days of receipt, a notification is sent out to you setting out the reasons and specifying a new date when you can expect a decision or resolution.
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-2">
                  <p>
                    <span className="inline-block w-8 font-semibold text-secondary">20.6</span>
                    If you are not satisfied with our internal privacy practices or the outcome in respect to complaint, you may approach the OAIC with your complaint:
                  </p>
                  <div className="ml-8 space-y-1">
                    <p className="font-semibold text-white">Office of the Australian Information Commissioner</p>
                    <p><span className="text-secondary font-semibold">Address:</span> GPO Box 5218, Sydney NSW 2001</p>
                    <p><span className="text-secondary font-semibold">Phone:</span> 1300 363 992</p>
                    <p><span className="text-secondary font-semibold">Email:</span> enquiries@oaic.gov.au</p>
                    <p><span className="text-secondary font-semibold">Website:</span> oaic.gov.au</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section K - Contact Us */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">SECTION K – CONTACT US</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">21. CONTACT DETAILS</h3>
              <p className="mb-4 text-gray-300 leading-relaxed">
                <span className="inline-block w-8 font-semibold text-secondary">21.1</span>
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

export default PrivacyStatement;
