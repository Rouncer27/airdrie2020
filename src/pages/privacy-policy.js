import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import { HeroTitle } from "../components/styles/commons/Titles"
import { StandardParagraphs } from "../components/styles/commons/Paragraphs"

const PrivacyPolicyStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    max-width: 95rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 100rem;
  }

  @media (min-width: 1325px) {
    max-width: 115rem;
  }

  h1,
  h2 {
    ${HeroTitle};
    width: 100%;
  }

  p {
    ${StandardParagraphs};
  }
`

const PrivacyPolicy = props => {
  return (
    <Layout location={props.location.pathname}>
      <SEO
        title="Privacy Policy - Airdrie Sports"
        description="Protecting your personal information Your privacy is important to us. It is Airdrie Sports’s policy to respect your privacy regarding any information we may collect while operating our website."
        location={props.location.pathname}
      />
      <PrivacyPolicyStyled>
        <div>
          <h1>Privacy Policy</h1>
        </div>
        <div>
          <h2>Protecting your personal information</h2>
          <p>
            Your privacy is important to us. It is Airdrie Sports’s policy to
            respect your privacy regarding any information we may collect while
            operating our website. Accordingly, we have developed this privacy
            policy in order for you to understand how we collect, use,
            communicate, disclose and otherwise make use of personal
            information. We have outlined our privacy policy below.
          </p>
          <ul>
            <li>
              We will collect personal information by lawful and fair means and,
              where appropriate, with the knowledge or consent of the individual
              concerned.
            </li>
            <li>
              Before or at the time of collecting personal information, we will
              identify the purposes for which information is being collected.
            </li>
            <li>
              We will collect and use personal information solely for fulfilling
              those purposes specified by us and for other ancillary purposes,
              unless we obtain the consent of the individual concerned or as
              required by law.
            </li>
            <li>
              Personal data should be relevant to the purposes for which it is
              to be used, and, to the extent necessary for those purposes,
              should be accurate, complete, and up-to-date.
            </li>
            <li>
              We will protect personal information by using reasonable security
              safeguards against loss or theft, as well as unauthorized access,
              disclosure, copying, use or modification.
            </li>
            <li>
              We will make readily available to customers information about our
              policies and practices relating to the management of personal
              information.
            </li>
            <li>
              We will only retain personal information for as long as necessary
              for the fulfilment of those purposes.
            </li>
          </ul>
          <p>
            We are committed to conducting our business in accordance with these
            principles in order to ensure that the confidentiality of personal
            information is protected and maintained. Airdrie Sports’s may change
            this privacy policy from time to time at Airdrie Sports’s sole
            discretion.
          </p>
          <p>
            We do not automatically gather any personal information from you,
            such as your name, phone number, email, or address. This information
            is only obtained if you supply it voluntarily, usually through
            contacting us via email or registering in a secure portion of the
            site (contact forms). By choosing to provide us with your Personal
            Information, you are consenting to its use in accordance with the
            principles outlined in this Privacy Policy and as outlined at the
            time you are asked to provide any Personal Information.
          </p>
          <p>
            This site has reasonable security measures in place to protect
            against the loss, misuse and interception by third parties. Airdrie
            Sports assumes no liability for interception, alteration or misuse
            of information transmitted over the Internet. Only employees who
            need the information to perform a specific job have access to
            personal information. Email transmission and messages sent via the
            internet can be accessed by other Internet users. If you want to
            keep certain information confidential you may contact us by
            telephone, in person, or via mail.
          </p>
          <h2>
            We Monitor Website Traffic and How we use non-personal information
          </h2>
          <p>
            Like most web servers on the Internet, this website’ servers
            maintain access logs that record web browser activity. These logs
            associate an Internet Protocol (IP) address with each request for
            content from the servers. When you visit this web site, our web
            server automatically collects a limited amount of standard
            information essential to the operation and evaluation of the web
            site. This information includes:
          </p>
          <ul>
            <li>the page from which you arrived,</li>
            <li>the date and time of your page request,</li>
            <li>
              the IP address your computer is using to receive information,
            </li>
            <li>the type and version of your browser, and</li>
            <li>the name and size of the file you request.</li>
          </ul>
          <p>
            This information is collected in order to help make our site more
            useful to visitors, to learn about the number of visitors to our
            site, and to learn about the types of technology our visitors use.
            We do not track information about individuals and their visit.
          </p>
          <h2>Cookies</h2>
          <p>
            We may use ‘cookies’ that identify you as a return visitor. A cookie
            is a piece of data that a website can send to your browser, which
            may then store the cookie on your hard drive. Cookies do not contain
            any personally identifying information. Browsers allow you to
            disable cookie collection if you wish, or inform you when a cookie
            is being stored on your hard drive.
          </p>
          <h2>Links to other websites</h2>
          <p>
            Our website may contain links to enable you to visit other websites
            of interest easily. However, once you have used these links to leave
            our site, you should note that we do not have any control over that
            other website. Therefore, we cannot be responsible for the
            protection and privacy of any information which you provide whilst
            visiting such sites and such sites are not governed by this privacy
            statement. You should exercise caution and look at the privacy
            statement applicable to the website in question.
          </p>
          <h2>Unsubscribe From Electronic Communications</h2>
          <p>
            Subscribers to our e-newsletters can withdraw their consent to
            receive electronic communications at any time by clicking the
            unsubscribe link at the bottom of the email, or by notifying
            hello@airdrie2020.com
          </p>
          <p>
            What about spam? You will not receive marketing e-mail from Airdrie
            Sports unless you have consented to receive it. From time to time we
            may use e-mail as a way to keep in touch with our existing customers
            and other interested individuals. However, we do not send ‘spam’
            (unsolicited marketing e-mail). If you agree to receive e-mail
            communications from us, every e-mail message we send you will
            include an e-mail address to which you can respond. If at any time
            you decide you do not want to receive marketing e-mail from us,
            simply let us know and we will remove your name and e-mail address
            from our marketing lists. We will do the same with your mailing
            address and telephone number on request.
          </p>
          <p>
            For questions or comments regarding this public website privacy
            statement please contact us by email: hello@airdrie2020.com
          </p>
        </div>
      </PrivacyPolicyStyled>
    </Layout>
  )
}

export default PrivacyPolicy
