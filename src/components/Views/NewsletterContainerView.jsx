/**
 * NewsItemView view component.
 * @module Components/Views/NewsletterContainerView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { UniversalLink } from '@plone/volto/components';
import NewsletterCreationForm from './NewsletterCreationForm';
import './newsletter.less';
/**
 * ContractView view component class.
 * @function NewsletterContainerView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const NewsletterContainerView = (props) => {
    let lang = useSelector((state) => state.intl.locale);
    const { content } = props;
    moment.locale(lang);

    return (
        <Container className="view-wrapper grid stackable newsletter-container">
            <Grid.Row>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={10}>
                    {content.title && (
                        <h1 className="documentFirstHeading">
                            {content.title}
                        </h1>
                    )}
                    {content.description && (
                        <p className="documentDescription">
                            {content.description}
                        </p>
                    )}
                    <NewsletterCreationForm props={props} />
                    {content.items?.length > 0 && (
                        <>
                            <div className="newletter-elements">
                                <h2>Newsletter elements</h2>
                                <ul>
                                    {content.items.map((newsletter, index) => (
                                        <>
                                            <li>
                                                <UniversalLink
                                                    href={newsletter['@id']}
                                                >
                                                    {newsletter.title}
                                                </UniversalLink>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
            </Grid.Row>
        </Container>
    );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
NewsletterContainerView.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};

export default NewsletterContainerView;
