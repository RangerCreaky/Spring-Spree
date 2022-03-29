import React from "react";
import { FaqContainer, QueryContainer, Query, SideBar } from "./Faq.styles";

const Faq = () => {
    return(
        <FaqContainer>
            <SideBar>
                <h1>Frequently Asked Questions (FAQs)</h1>
                <a href="#about">About</a>
                <a href="#reg">Registration</a>
                <a href="#comp">Events & Competitions</a>
                <a href="#accom">Food & Accomodation</a>
                <a href="#proshow">Pro Shows</a>
            </SideBar>
            <QueryContainer>
            <h1 id="about">About</h1>
            <Query>
                <h2>What is Springspree?</h2>
                <p>Spring Spree is the annual cultural festival held at the <strong>National Institute of Technology, Warangal</strong>. This cultural fest holds the distinction of being one of South India's largest.  This fest has gone a long way since its humble beginnings in 1978, with a footfall of over 10,000 people and participation from around 600 universities and growing. Today's Spring Spree offers a diverse range of activities to appeal to a wide range of personalities. It includes music, dancing, literature, painting, and gaming of all kinds.</p>
            </Query>
            <Query>
                <h2>When is the fest?</h2>
                <p>The fest is celebrated for three consecutive days from April 8 to April 10 2022.</p>
            </Query>
            <Query>
                <h2>What are the common events?</h2>
                <p>The major spotlight events include:
                    <ul>
                        <li>Idol (A Singing Competition)</li>
                        <li>Director's Cut (A Short Film Contest)</li>
                        <li>Allure (A Fashion Show)</li>
                        <li>Q-Factor (A Quiz Competition)</li>
                        <li>NIT-MUN (A Model United Nations)</li>
                    </ul>
                </p>
            </Query>
            <Query>
                <h2>What is the mode of conduction of the fest (Online or Offiline)?</h2>
                <p>Fest (Spring Spree'22) is being conducted offline.</p>
            </Query>

            <h1 id="reg">Registration</h1>
            <Query>
                <h2>What is the process of registration?</h2>
                <p>Registration can be done on this website (<a href="https://springspree22.in">springspree22.in</a>) by filling up your details, as well offline by registering on the spot.</p>
            </Query>
            <Query>
                <h2>How do I confirm my registration?</h2>
                <p>You will receive an email confirmation about your registration.</p>
            </Query>
            <Query>
                <h2>How much is the entry fee?</h2>
                <p>There will be a fixed entry fee for other than NIT Warangal students to attend spree. Everyone should pay the fee for participating in any event mentioned by the respective event managers.</p>
            </Query>
            <Query>
                <h2>Who can attend the fest?</h2>
                <p>College students from any institute (as well as those past the 12th grade but have not chosen a college yet) are permitted to participate in Spring Spree 2022.</p>
            </Query>

            <h1 id="comp">Events & Competitions</h1>
            <Query>
                <h2>What all events and competitions will be there?</h2>
                <p>There will be spotlight events, club events,workshops and music and dance competitions and many exciting events.</p>
            </Query>
            <Query>
                <h2>Will there be any fee to attend an event?</h2>
                <p>Yes, there will be fee to attend few events.</p>
            </Query>
            <Query>
                <h2>How to register for the particular event or competition?</h2>
                <p>Registration is online for a few events and offline for a few. Stay tuned for the further updates.</p>
            </Query>
            <Query>
                <h2>Will there be any cash prizes?</h2>
                <p>Yes, there are exciting cash prizes and goodies.</p>
            </Query>
            <Query>
                <h2>Who decides the winners and what will be the judging creteria?</h2>
                <p>Event Managers will decide the winners and candidates will be evaluated in each round. The one with the highest score is declared as the winner.</p>
            </Query>

            <h1 id="accom">Food & Accomodation</h1>
            <Query>
                <h2>Will I get food and accomodation?</h2>
                <p>Yes, both food and accomodation will be taken care by the spree team once after you register for the fest.</p>
            </Query>
            <Query>
                <h2>Is the fest open to attend for any outsiders?</h2>
                <p>Yes, the fest is open for all.</p>
            </Query>
            

            <h1 id="proshow">Pro Shows</h1>
            <Query>
                <h2>What are Pro Shows?</h2>
                <p>Proshows are your chance to see your favorite celebrities live. These are concerts lined up on each night of Spree.</p>
            </Query>
            <Query>
                <h2>Who are the celebrities which are going to perform at the star nights of Spring Spree 2022?</h2>
                <p>These will be updated on the website soon, so stay tuned.
Follow our social media (<a href="https://www.facebook.com/nitw.springspree">Facebook</a> and <a href="https://www.instagram.com/springspree_nitw">Instagram</a>).</p>
            </Query>
            </QueryContainer>
            
        </FaqContainer>
    )
}

export default Faq;
