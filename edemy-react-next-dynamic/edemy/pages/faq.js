import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubscribeForm from '../components/Common/SubscribeForm';

const Faq = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Frequently Asked Questions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ's" 
            />  

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="tab faq-accordion-tab">
                        <Tabs>
                            <TabList>
                                <Tab><i className='bx bx-flag'></i> <span>Getting Started</span></Tab>
                                <Tab><i className='bx bxs-badge-dollar'></i> <span>Pricing & Planes</span></Tab>
                                <Tab><i className='bx bx-shopping-bag'></i> <span>Sales Question</span></Tab>
                                <Tab><i className='bx bx-book-open'></i> <span>Usage Guides</span></Tab>
                                <Tab><i className='bx bx-info-circle'></i> <span>General Guide</span></Tab>
                            </TabList>
                        
                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem  uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a study abroad program on eDemy.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
 
                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a study abroad program on eDemy.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a study abroad program on eDemy.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
 
                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a study abroad program on eDemy.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem  uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a study abroad program on eDemy.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>

            <SubscribeForm />
        </>
    )
}

export default Faq;