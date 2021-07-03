import React from 'react';
import {
    Mjml,
    MjmlBody,
    MjmlColumn,
    MjmlSection,
    MjmlImage,
    MjmlSocial,
    MjmlSocialElement,
    MjmlDivider,
    MjmlWrapper,
    MjmlText,
} from 'nextmail/mjml-react';

export default function Newsletter() {
    return (
        <Mjml>
            <MjmlBody backgroundColor='rgb(244, 244, 244)'>
                <MjmlWrapper>
                    <MjmlSection
                        backgroundColor='white'
                        backgroundSize='center'
                        paddingTop='50px'
                    >
                        <MjmlColumn paddingTop='0px'>
                            <MjmlImage
                                width='100px'
                                src='https://drive.google.com/uc?export=view&id=1P0oVjPA9dfO3Yq7SSukPOCfXidAracpQ'
                            ></MjmlImage>
                            <MjmlText
                                fontWeight='bold'
                                color='black'
                                fontSize='20px'
                                align='center'
                            >
                                Newsletter Notification
                            </MjmlText>
                            <MjmlDivider borderColor='#F45E43'></MjmlDivider>
                            <MjmlText
                                fontSize='18px'
                                color='black'
                                lineHeight='25px'
                                fontFamily='helvetica'
                            >
                                I'm so happy right now &#128512;{' '}
                            </MjmlText>
                            <MjmlText
                                fontSize='18px'
                                color='black'
                                lineHeight='25px'
                                fontFamily='helvetica'
                            >
                                Dear customer, thank you for subscribing to my
                                newsletter get to hear about new wigs &#x1f469;
                                and wig treatment.
                            </MjmlText>
                            <MjmlText
                                fontSize='18px'
                                color='black'
                                lineHeight='30px'
                                fontFamily='helvetica'
                            >
                                I promise not to bore you.
                            </MjmlText>
                            <MjmlText
                                fontSize='18px'
                                color='black'
                                lineHeight='10px'
                                fontFamily='helvetica'
                            >
                                Best Regards.
                            </MjmlText>
                            <MjmlText
                                fontSize='18px'
                                color='black'
                                lineHeight='10px'
                                fontFamily='helvetica'
                                font-style='italic'
                            >
                                Jenjen's Luxury wigs.
                            </MjmlText>
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection backgroundColor='pink'>
                        <MjmlColumn>
                            <MjmlSocial
                                fontSize='15px'
                                align='center'
                                icon-size='30px'
                                mode='horizontal'
                            >
                                <MjmlSocialElement
                                    name='instagram'
                                    href='https://www.instagram.com/jenjensluxurywigs/'
                                ></MjmlSocialElement>
                                <MjmlSocialElement
                                    name='facebook'
                                    href='https://web.facebook.com/jenjensluxurywigs.azonobi'
                                ></MjmlSocialElement>
                            </MjmlSocial>
                        </MjmlColumn>
                        <MjmlColumn>
                            <MjmlText
                                fontWeight='bold'
                                align='center'
                                fontSize='16px'
                            >
                                <a
                                    style={{ color: 'blue' }}
                                    href='https://www.jenjensluxury.com'
                                >
                                    Jenjensluxury.com
                                </a>
                            </MjmlText>
                            <MjmlText
                                fontWeight='bold'
                                align='center'
                                fontSize='16px'
                            >
                                <a
                                    style={{ color: 'blue' }}
                                    href='tel:+1 (267) 403-8663'
                                >
                                    +1 (267) 403-8663
                                </a>
                            </MjmlText>
                        </MjmlColumn>
                    </MjmlSection>
                </MjmlWrapper>
            </MjmlBody>
        </Mjml>
    );
}
