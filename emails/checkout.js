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
    MjmlTable,
    MjmlWrapper,
    MjmlText,
} from 'nextmail/mjml-react';

export default function Newsletter() {
    return (
        <Mjml>
            <MjmlBody backgroundColor='rgb(244, 244, 244)'>
                <MjmlWrapper>
                    <MjmlSection backgroundColor='white'>
                        <MjmlColumn>
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
                                Checkout Notification
                            </MjmlText>
                            <MjmlDivider borderColor='#F45E43'></MjmlDivider>
                            <MjmlText
                                fontSize='18px'
                                color='black'
                                lineHeight='25px'
                                fontFamily='helvetica'
                            >
                                Hello Jenjen's Luxury Wigs, a customer just
                                checked out some wigs &#128512;
                            </MjmlText>
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection backgroundColor='white'>
                        <MjmlColumn>
                            <MjmlTable containerBackgroundColor='pink'>
                                <tr
                                    style={{
                                        borderBottom: '1px solid white',
                                        textAlign: 'left',
                                        padding: '15px 0',
                                    }}
                                >
                                    <th
                                        style={{
                                            padding: '10px 15px',
                                            fontSize: '20px',
                                        }}
                                    >
                                        Wig
                                    </th>
                                    <th
                                        style={{
                                            padding: '10px 15px',
                                            fontSize: '20px',
                                        }}
                                    >
                                        Price
                                    </th>
                                </tr>
                                <tr style={{ borderBottom: '1px solid white' }}>
                                    <td
                                        style={{
                                            padding: '10px 15px',
                                            fontSize: '18px',
                                        }}
                                    >
                                        Bob
                                    </td>
                                    <td
                                        style={{
                                            padding: '10px 15px',
                                            fontSize: '18px',
                                        }}
                                    >
                                        $300
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid white' }}>
                                    <td
                                        style={{
                                            padding: '10px 15px',
                                            fontSize: '18px',
                                        }}
                                    >
                                        Veneza
                                    </td>
                                    <td
                                        style={{
                                            padding: '10px 15px',
                                            fontSize: '18px',
                                        }}
                                    >
                                        $200
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                            padding: '10px 15px',
                                            fontWeight: 'bold',
                                            fontSize: '20px',
                                        }}
                                    >
                                        Total
                                    </td>
                                    <td
                                        style={{
                                            padding: '10px 15px',
                                            fontWeight: 'bold',
                                            fontSize: '20px',
                                        }}
                                    >
                                        $500
                                    </td>
                                </tr>
                            </MjmlTable>
                        </MjmlColumn>
                    </MjmlSection>
                    <MjmlSection backgroundColor='pink'>
                        <MjmlColumn>
                            <MjmlSocial
                                fontSize='15px'
                                align='center'
                                iconSize='30px'
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
                                    href='tel:+12674038663'
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
