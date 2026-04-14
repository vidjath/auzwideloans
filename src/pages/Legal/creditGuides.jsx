import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { motion } from 'framer-motion';

const CreditGuide = () => {
  return (
    <LegalPageTemplate 
      title="Credit Guides"
      subtitle="Strawberry Loans Pty Ltd"
    >
      <div className="prose prose-invert max-w-none">

        {/* Company Info Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 rounded-2xl border border-white/10 bg-black backdrop-blur-md overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-6 p-8">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase">Company</p>
                <p className="font-semibold text-white">Strawberry Loans Pty Ltd</p>
                <p className="text-xs text-gray-400 uppercase mt-2">ABN</p>
                <p className="font-semibold text-white">74 621 474 655</p>
                <p className="text-xs text-gray-400 uppercase mt-2">Australian Credit Licence</p>
                <p className="font-semibold text-white">519253</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase">Represented by</p>
                <p className="font-semibold text-white">Auzwide Pty Ltd</p>
                <p className="text-xs text-gray-400 uppercase mt-2">ACN</p>
                <p className="font-semibold text-white">688 716 841</p>
                <p className="text-xs text-gray-400 uppercase mt-2">AUTHORISED CREDIT REPRESENTATIVE</p>
                <p className="font-semibold text-white">574043</p>
              </div>
            </div>
          </div>
            <div className="bg-secondary/20 border-t border-white/10 px-8 py-4">
                <p className="text-sm text-gray-300 font-medium">
              <span className="text-secondary">Date Updated:</span> November 2025
            </p>
          </div>

          <div className="bg-secondary/10 border-t border-white/10 px-8 py-6 text-gray-300 text-sm">
            <p>
              We are required to give you this guide by law. It acknowledges your right to ask us about any assessment we may make, our financial services and where appropriate, the recommendation of using one credit product over another. In the unlikely event you may be dissatisfied with what we do or have done, this guide also provides direction on what you need to do to remedy your dissatisfaction. It also outlines any fees or commissions paid by you to the authorised credit representative for acting as a credit representative.
            </p>
          </div>
        </motion.div>

        {/* Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">Credit Suitability and Assessment</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>Before we can recommend any financial product to you, the law requires that we make an assessment of your current financial situation and objectives to ensure any credit product we may offer meets your needs. To do this, we will make reasonable enquiries and ask you to provide verifiable information directly or, where we deem it appropriate, we may obtain it from others whom we may contact. Some of these steps may be required by law.</p>
            <p className="text-white font-semibold">Please note we will not allow you to enter into a credit contract or increase a credit limit on any existing credit contract if:</p>
            <ul className="space-y-2 ml-4">
              <li>• It's likely you could not fulfill or only do so with substantial hardship, your financial obligations to us under the contract;</li>
              <li>• You could only meet your financial objective to us by selling your family's main home;</li>
              <li>• The credit contract will not meet your requirements or objectives;</li>
              <li>• The National Consumer Credit Protection Act 2009 (Cth) prohibits us from doing so.</li>
            </ul>
          </div>
        </motion.section>

        {/* Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">Assessment Copy</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>Should you want a written copy of our assessment, free of any charge, you may ask us to provide it:</p>
            <ul className="space-y-2 ml-4">
              <li>• before you either enter into a credit contract or we increase your credit limit on any existing credit contract you may have with us; or</li>
              <li>• at any time up to seven (7) years from the date you signed the contract or obtained the credit limit increase on a particular credit contract with us.</li>
            </ul>
            <p>The law imposes time limits on us giving you this information. We have seven (7) business days from when you make your request to supply it if your enquiry is made within two (2) years of the date you entered into the credit contract, otherwise we have twenty one (21) business days to do so. If we have bought your debt from your original credit provider, we have an additional eight (8) and four (4) days to comply.
                <br/>Note: - We are not obliged to give you a copy of the assessment where we do not provide you with the credit or increase the credit limit.</p>
          </div>
        </motion.section>

        {/*Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">Dispute Resolution</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>We believe that business relationships are built through trust, openness, honesty, integrity, consistency and respect towards others. Sometimes, though, there may be differences of opinion, particularly when things don't quite work out the way you intended when you took out the credit contract. We recognise that communication is the key to resolving these differences and the steps below will assist both of us quickly get our relationship back on track.</p>
            
            <div className="space-y-6 mt-6">
              <div>
                <p className="text-white font-bold">Step 1</p>
                <p>If you are dissatisfied with something we've done, we encourage you to phone us and explain your concern. We can usually resolve the matter amicably, without delay.</p>
              </div>

              <div>
                <p className="text-white font-bold">Step 2</p>
                <p>If you're still not happy with our response, you should contact our Internal Dispute Resolution (IDR) Manager, Claire Poolman by telephoning (02) 9982 1293 as soon as possible. We may ask that you put your complaint in writing to us so that we may investigate it further. You can email it to us on clairelawrence79@hotmail.com.</p>
              </div>

              <div>
                <p className="text-white font-bold">Step 3</p>
                <p>Should you still be dissatisfied after using both of the above steps, you may contact our ASIC-approved External Dispute Resolution (EDR) provider, Australian Financial Complaints Authority. You can contact them at no cost by writing to GPO Box 3, Melbourne Victoria 3001, telephoning 1800 931 678 (free call), emailing info@afca.org.au, or via their website, https://www.afca.org.au.</p>
              </div>
            </div>

            <p className="mt-6 italic text-sm">Please note that you must have gone through our IDR process first before doing so. If you fail to do so, the matter will be referred back to us to resolve in the first instance.</p>
          </div>
        </motion.section>

                {/* Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">This credit guide is provided by Auzwide Pty Ltd</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>(Authorised Credit Representative Number: 574043), an authorised credit representative for Strawberry Loans Pty Ltd Australian Credit Licence 519253.</p>
            <p>We are required to give you this guide by law. It acknowledges your right to ask us about any assessment we may make, our financial services and where appropriate, the recommendation of using one credit product over another. In the unlikely event you may be dissatisfied with what we do or have done, this guide also provides direction on what you need to do to remedy your dissatisfaction. It also outlines any fees or commissions paid by you to the authorised credit representative for acting as a credit representative.</p>
          </div>
        </motion.section>

                {/* Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">Credit Suitability and Assessment (Representative)</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>Before we can recommend any financial product to you (such as a credit contract), we will make an assessment about your current financial situation and objectives to ensure any credit product we may offer meets your needs. We make reasonable enquiries and ask you to provide verifiable information.</p>
            <p className="text-white font-semibold">Please note that we will not allow you to enter into a credit contract if we believe:</p>
            <ul className="space-y-2 ml-4">
              <li>• It's likely you could not fulfill or only do so with substantial hardship, your financial obligations to us under the contract;</li>
              <li>• You could only meet your financial objective to us by selling your family's main home;</li>
              <li>• The credit contract will not meet your requirements or objectives;</li>
              <li>• The National Consumer Credit Protection Act 2009 (Cth) prohibits us from doing so.</li>
            </ul>
          </div>
        </motion.section>

                {/* Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">Assessment Copy (Representative)</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>Should you want a written copy of our assessment, free of any charge, you may ask us to provide it:</p>
            <ul className="space-y-2 ml-4">
              <li>• before you either enter into a credit contract or we increase your credit limit on any existing credit contract you may have with us; or</li>
              <li>• at any time up to seven (7) years from the date you signed the contract or obtained the credit limit increase on a particular credit contract with us.</li>
            </ul>
            <p>The law imposes time limits on us giving you this information. We have seven (7) business days from when you make your request to supply it if your enquiry is made within two (2) years of the date you entered into the credit contract, otherwise we have twenty one (21) business days to do so. If we have bought your debt from your original credit provider, we have an additional eight (8) and four (4) days to comply.
                <br/>Note: - We are not obliged to give you a copy of the assessment where we do not provide you with the credit or increase the credit limit.</p>
          </div>
        </motion.section>

        {/* Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">Authorised Credit Representative</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>As the credit provider is an Australian Credit Licensee, it takes full responsibility for the approved credit activities it has authorised us to provide as its credit representative in accordance with the National Consumer Credit legislation.</p>
            <p>We are authorised to engage in credit activities on behalf of the credit provider including assessing the suitability of the provision of credit and exercising the rights of a credit provider in relation to a credit contract or proposed credit contract.</p>
          </div>
        </motion.section>

        {/* Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">Commission</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>There are no fees or charges payable by you to us for acting as a credit representative of Strawberry Loans Pty Ltd. We do not receive any commission on fees and charges paid to parties other than the lender. Depending on the amount of the loan, the rate of interest and the term, the exact amount of commission payable to us is undeterminable.</p>
          </div>
        </motion.section>

        {/* Section */}
        <motion.section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-2xl font-bold text-secondary uppercase">Dispute Resolution</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10 text-gray-300">
            <p>We believe that business relationships are built through trust, openness, honesty, integrity, consistency and respect towards others. Sometimes, though, there may be differences of opinion, particularly when things don't quite work out the way you intended when you took out the credit contract. We recognise that communication is the key to resolving these differences and the steps below will assist both of us quickly get our relationship back on track.</p>
            
            <div className="space-y-6 mt-6">
              <div>
                <p className="text-white font-bold">Step 1</p>
                <p>If you are dissatisfied with something we've done, we encourage you to phone us and explain your concern. We can usually resolve the matter amicably, without delay.</p>
              </div>

              <div>
                <p className="text-white font-bold">Step 2</p>
                <p>If you're still not happy with our response, you should contact our Internal Dispute Resolution team by telephoning 1800 123 456 as soon as possible. We may ask that you put your complaint in writing to us so that we may investigate it further. Alternatively, you can email it to us at dushyant4545@yahoo.com.</p>
              </div>

              <div>
                <p className="text-white font-bold">Step 3</p>
                <p>Should you still be dissatisfied after using both of the above steps, you may contact our External Dispute Resolution provider, the Australian Financial Complaints Authority. You can contact them at no cost by writing to GPO Box 3 Melbourne VIC 3000, phone them on 1800 931 678 or email them at info@afca.org.au.</p>
              </div>
            </div>

            <p className="mt-6 italic text-sm">Please note that you must have gone through our IDR process first before doing so. If you fail to do so, the matter will be referred back to us to resolve in the first instance.</p>
          </div>
        </motion.section>

      </div>
    </LegalPageTemplate>
  );
};

export default CreditGuide;