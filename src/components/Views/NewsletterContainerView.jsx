/**
 * NewsItemView view component.
 * @module Components/Views/NewsletterContainerView
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { UniversalLink } from '@plone/volto/components';
import NewsletterCreationForm from './NewsletterCreationForm';
import './newsletter.less';
import { searchContent } from '@plone/volto/actions';
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
    const newsletters = useSelector(
        (state) => state?.search?.subrequests?.newsletters?.items,
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            searchContent(
                window.location.pathname,
                {
                    'path.depth': 1,
                    portal_type: 'Newsletter',
                    sort_on: 'created',
                    sort_order: 'reverse',
                    sort_limit: 10,
                },
                'newsletters',
            ),
        );
        return () => {
            dispatch(searchContent([]));
        };
    }, [dispatch]);
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
                    {newsletters?.length > 0 && (
                        <>
                            <div className="newletter-elements">
                                <h2>Last 10 newsletter elements</h2>
                                <ul>
                                    {newsletters.map((newsletter, index) => (
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
