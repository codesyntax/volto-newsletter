/**
 * NewsItemView view component.
 * @module Components/Views/HtmlTemplateView
 */
import moment from 'moment';
/**
 * ContractView view component class.
 * @function HtmlTemplateView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const cssStyle = {
    body: {
        fontFamily: "'Mulish',Verdana,Arial,sans-serif",
        padding: '0 !important',
        margin: '0 !important',
        display: 'block !important',
        minWidth: '100% !important',
        width: '100% !important',
        background: '#333545',
        WebkitTextSizeAdjust: 'none',
    },
    main: { padding: '0px 0px 20px 0px' },
    td: {
        width: '650px',
        minWidth: '650px',
        fontSize: '0pt',
        lineHeight: '0pt',
        padding: '0',
        margin: '0',
        fontWeight: 'normal',
    },
    backgroundColor: { backgroundColor: '#BD097F' },
    newsletterDate: {
        height: '30px',
        color: 'white',
        fontSize: '0.8rem',
        lineHeight: '1.1rem',
        textAlign: 'right',
        paddingRight: '1rem',
        backgroundColor: '#BD097F',
    },
    headerImage: {
        fontSize: '0pt',
        lineHeight: '0pt',
        backgroundColor: '#FFFFFF',
    },
    tdPadding: { padding: '50px 30px 0 30px' },
    newsTitle: {
        color: '#000000',
        fontFamily: "'Poppins', Verdana, Arial, Sans-serfi",
        fontWeight: '600',
        letterSpacing: '5px',
        fontSize: '1.2rem',
        lineHeight: '1.4rem',
        paddingBottom: '2rem',
        textTransform: 'uppercase',
    },
    newsPaddingBottom: { paddingBottom: '2rem' },
    rtl: { direction: 'rtl' },
    newsMain: {
        verticalAlign: 'top',
        fontSize: '0pt',
        lineHeight: '0pt',
        padding: '0',
        margin: '0 20px 0 0',
        fontWeight: 'normal',
        direction: 'ltr',
    },
    newsImage: { fontSize: '0pt', lineHeight: '0pt', textAlign: 'left' },
    newsText: {
        verticalAlign: 'top',
        fontSize: '0pt',
        lineHeight: '0pt',
        padding: '0',
        margin: '0',
        fontWeight: 'normal',
        direction: 'ltr',
    },
    moreNewsContainer: { padding: '10px 0px 0px 30px' },
    moreNewsTd: {
        fontFamily: "'Mulish',Verdana,Arial, sans-serif",
        fontSize: '14px',
        lineHeight: '18px',
        textAlign: 'center',
        borderRadius: '3px',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '15px',
        paddingLeft: '15px',
        backgroundColor: '#bd097f',
    },
    moreNewsLink: { color: '#fff', textDecoration: 'none' },
    footerContainer: { padding: '10px 0' },
    footerTitle: {
        color: '#ffffff',
        fontFamily: "'Mulish',Verdana,Arial, sans-serif",
        fontSize: '14px',
        lineHeight: '22px',
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: '10px 0',
    },
    footerInformation: {
        color: '#ffffff',
        fontFamily: "'Mulish',Verdana,Arial, sans-serif",
        fontSize: '14px',
        lineHeight: '22px',
        textAlign: 'center',
    },
    textdecorationnone: { textDecoration: 'none' },
    textcolorwhite: { color: 'white' },
};
const HtmlTemplateView = ({ newsitems, title, content }) => {
    moment.locale(content.language.token);
    return (
        <>
            <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta
                        httpEquiv="Content-type"
                        content="text/html; charset=utf-8"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="format-detection" content="date=no" />
                    <meta name="format-detection" content="address=no" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="x-apple-disable-message-reformatting" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600&family=Poppins:wght@200;300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    ></link>
                    <title>{title}</title>
                </head>
                <body className="body" style={cssStyle.body}>
                    <table
                        width="100%"
                        border="0"
                        cellSpacing="0"
                        cellPadding="0"
                        bgcolor="#F2F2F2"
                    >
                        <tr>
                            <td align="center" valign="top">
                                <table
                                    width="100%"
                                    border="0"
                                    cellSpacing="0"
                                    cellPadding="0"
                                >
                                    <tr>
                                        <td
                                            align="center"
                                            className="main"
                                            style={cssStyle.main}
                                        >
                                            <table
                                                width="650"
                                                border="0"
                                                cellSpacing="0"
                                                cellPadding="0"
                                                className="mobile-shell"
                                            >
                                                <tr>
                                                    <td
                                                        className="td"
                                                        style={cssStyle.td}
                                                    >
                                                        <table
                                                            width="100%"
                                                            border="0"
                                                            cellSpacing="0"
                                                            cellPadding="0"
                                                        >
                                                            <tr>
                                                                <td
                                                                    bgcolor="#BD097F"
                                                                    style={
                                                                        cssStyle.newsletterDate
                                                                    }
                                                                >
                                                                    {title}
                                                                </td>
                                                            </tr>
                                                            {content.newsletter_header_image_url && (
                                                                <tr>
                                                                    <td
                                                                        style={
                                                                            cssStyle.headerImage
                                                                        }
                                                                        bgcolor="#ffffff"
                                                                    >
                                                                        <img
                                                                            src={
                                                                                content.newsletter_header_image_url
                                                                            }
                                                                            width="650"
                                                                            height="100"
                                                                            border="0"
                                                                            alt=""
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </table>

                                                        <table
                                                            width="100%"
                                                            border="0"
                                                            cellSpacing="0"
                                                            cellPadding="0"
                                                            bgcolor="#ffffff"
                                                        >
                                                            <tr>
                                                                <td
                                                                    className=""
                                                                    style={
                                                                        cssStyle.tdPadding
                                                                    }
                                                                >
                                                                    <table
                                                                        width="100%"
                                                                        border="0"
                                                                        cellSpacing="0"
                                                                        cellPadding="0"
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                style={
                                                                                    cssStyle.newsTitle
                                                                                }
                                                                            >
                                                                                {
                                                                                    content.newsletter_news_title
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                        {newsitems?.map(
                                                                            (
                                                                                newsitem,
                                                                                index,
                                                                            ) => (
                                                                                <>
                                                                                    <tr
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <td
                                                                                            style={
                                                                                                cssStyle.paddingBottom
                                                                                            }
                                                                                        >
                                                                                            <table
                                                                                                dir="rtl"
                                                                                                style={
                                                                                                    cssStyle.rtl
                                                                                                }
                                                                                                width="100%"
                                                                                                cellSpacing="0"
                                                                                                cellPadding="0"
                                                                                                border="0"
                                                                                                bgcolor="#ffffff"
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <th
                                                                                                            className="column-dir"
                                                                                                            dir="ltr"
                                                                                                            style={
                                                                                                                cssStyle.newsMain
                                                                                                            }
                                                                                                            width="280"
                                                                                                        >
                                                                                                            <table
                                                                                                                width="100%"
                                                                                                                cellSpacing="0"
                                                                                                                cellPadding="0"
                                                                                                                border="0"
                                                                                                            >
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td
                                                                                                                            className="fluid-img"
                                                                                                                            style={
                                                                                                                                cssStyle.newsImage
                                                                                                                            }
                                                                                                                        >
                                                                                                                            <img
                                                                                                                                src={
                                                                                                                                    newsitem
                                                                                                                                        .image
                                                                                                                                        .scales
                                                                                                                                        .preview
                                                                                                                                        .download
                                                                                                                                }
                                                                                                                                alt=""
                                                                                                                                border="0"
                                                                                                                                width="300"
                                                                                                                            />
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </th>

                                                                                                        <th
                                                                                                            className="column-dir"
                                                                                                            dir="ltr"
                                                                                                            style={
                                                                                                                cssStyle.newsText
                                                                                                            }
                                                                                                        >
                                                                                                            <table
                                                                                                                width="100%"
                                                                                                                cellspacing="0"
                                                                                                                cellpadding="0"
                                                                                                                border="0"
                                                                                                            >
                                                                                                                <tbody>
                                                                                                                    <tr
                                                                                                                        style={{
                                                                                                                            verticalAlign:
                                                                                                                                'top',
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <td
                                                                                                                            class=""
                                                                                                                            style={{
                                                                                                                                paddingRight:
                                                                                                                                    '10px',
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            <table
                                                                                                                                width="100%"
                                                                                                                                cellspacing="0"
                                                                                                                                cellpadding="0"
                                                                                                                                border="0"
                                                                                                                            >
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td
                                                                                                                                            class="content-inner"
                                                                                                                                            style={{
                                                                                                                                                color:
                                                                                                                                                    'black',
                                                                                                                                                verticalAlign:
                                                                                                                                                    'top',
                                                                                                                                            }}
                                                                                                                                        >
                                                                                                                                            <table
                                                                                                                                                width="100%"
                                                                                                                                                cellspacing="0"
                                                                                                                                                cellpadding="0"
                                                                                                                                                border="0"
                                                                                                                                            >
                                                                                                                                                <tbody>
                                                                                                                                                    <tr>
                                                                                                                                                        <td
                                                                                                                                                            class=""
                                                                                                                                                            style={{
                                                                                                                                                                textAlign:
                                                                                                                                                                    'left',
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            <h2
                                                                                                                                                                style={{
                                                                                                                                                                    fontWeight:
                                                                                                                                                                        'bold',
                                                                                                                                                                    marginTop:
                                                                                                                                                                        '0',
                                                                                                                                                                    fontFamily:
                                                                                                                                                                        "'Poppins',Verdana,Arial,sans-serif",
                                                                                                                                                                    fontSize:
                                                                                                                                                                        '1rem',
                                                                                                                                                                    lineHeight:
                                                                                                                                                                        '1.4rem',
                                                                                                                                                                }}
                                                                                                                                                            >
                                                                                                                                                                <a
                                                                                                                                                                    style={{
                                                                                                                                                                        color:
                                                                                                                                                                            '#BD097F',
                                                                                                                                                                        textDecoration:
                                                                                                                                                                            'none',
                                                                                                                                                                    }}
                                                                                                                                                                    href={
                                                                                                                                                                        newsitem[
                                                                                                                                                                            '@id'
                                                                                                                                                                        ]
                                                                                                                                                                    }
                                                                                                                                                                >
                                                                                                                                                                    {
                                                                                                                                                                        newsitem.title
                                                                                                                                                                    }
                                                                                                                                                                </a>
                                                                                                                                                            </h2>
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                    <tr>
                                                                                                                                                        <td
                                                                                                                                                            class=""
                                                                                                                                                            style={{
                                                                                                                                                                textAlign:
                                                                                                                                                                    'left',
                                                                                                                                                                fontFamily:
                                                                                                                                                                    "'Mulish',Verdana,Arial,sans-serif",
                                                                                                                                                                fontSize:
                                                                                                                                                                    '0.9rem',
                                                                                                                                                                lineHeight:
                                                                                                                                                                    '1.2rem',
                                                                                                                                                                color:
                                                                                                                                                                    '#666',
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            {moment(
                                                                                                                                                                newsitem.effective,
                                                                                                                                                            ).format(
                                                                                                                                                                'LL',
                                                                                                                                                            )}
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                    <tr>
                                                                                                                                                        <td
                                                                                                                                                            class=""
                                                                                                                                                            style={{
                                                                                                                                                                textAlign:
                                                                                                                                                                    'left',
                                                                                                                                                                fontFamily:
                                                                                                                                                                    "'Mulish',Verdana,Arial,sans-serif",
                                                                                                                                                                fontSize:
                                                                                                                                                                    '0.9rem',
                                                                                                                                                                lineHeight:
                                                                                                                                                                    '1.4rem',
                                                                                                                                                            }}
                                                                                                                                                        >
                                                                                                                                                            {
                                                                                                                                                                newsitem.description
                                                                                                                                                            }
                                                                                                                                                        </td>
                                                                                                                                                    </tr>
                                                                                                                                                </tbody>
                                                                                                                                            </table>
                                                                                                                                        </td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </th>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table
                                                                                                cellSpacing="0"
                                                                                                cellPadding="10"
                                                                                                border="0"
                                                                                            >
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </>
                                                                            ),
                                                                        )}
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style={
                                                                        cssStyle.moreNewsContainer
                                                                    }
                                                                >
                                                                    <table
                                                                        width="160"
                                                                        cellSpacing="0"
                                                                        cellPadding="0"
                                                                        border="0"
                                                                    >
                                                                        <tbody>
                                                                            <tr>
                                                                                <td
                                                                                    style={
                                                                                        cssStyle.moreNewsTd
                                                                                    }
                                                                                >
                                                                                    <a
                                                                                        href={
                                                                                            content.newsletter_news_url
                                                                                        }
                                                                                        style={
                                                                                            cssStyle.textdecorationnone
                                                                                        }
                                                                                        target="_blank"
                                                                                    >
                                                                                        <span
                                                                                            style={
                                                                                                cssStyle.moreNewsLink
                                                                                            }
                                                                                        >
                                                                                            {
                                                                                                content.newsletter_news_morelinktext
                                                                                            }
                                                                                        </span>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table
                                                                        width="10"
                                                                        cellSpacing="10"
                                                                        cellPadding="0"
                                                                        border="0"
                                                                    >
                                                                        <tbody>
                                                                            <tr>
                                                                                <td></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                        <table
                                                            width="100%"
                                                            border="0"
                                                            cellSpacing="0"
                                                            cellPadding="0"
                                                            style={
                                                                cssStyle.backgroundColor
                                                            }
                                                        >
                                                            <tr>
                                                                <td
                                                                    className="footer"
                                                                    style={
                                                                        cssStyle.footerContainer
                                                                    }
                                                                >
                                                                    <table
                                                                        width="100%"
                                                                        border="0"
                                                                        cellSpacing="0"
                                                                        cellPadding="0"
                                                                    >
                                                                        {content.newsletter_footer_title && (
                                                                            <tr>
                                                                                <td
                                                                                    style={
                                                                                        cssStyle.footerTitle
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        content.newsletter_footer_title
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                        )}

                                                                        {content.newsletter_footer_address && (
                                                                            <tr>
                                                                                <td
                                                                                    style={
                                                                                        cssStyle.footerInformation
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        content.newsletter_footer_address
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                        {content.newsletter_footer_telephone && (
                                                                            <tr>
                                                                                <td
                                                                                    style={
                                                                                        cssStyle.footerInformation
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        content.newsletter_footer_telephone
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        </>
    );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */

export default HtmlTemplateView;
