/**
 * NewsItemView view component.
 * @module Components/Views/NewsletterCreationForm
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsitems } from '../../actions';
import { createNewsletter } from '../../actions';
import { Button } from 'semantic-ui-react';
import moment from 'moment';
import HtmlTemplateView from './HtmlTemplateView';
import { Toast } from '@plone/volto/components';
import { toast } from 'react-toastify';
import { renderToString } from 'react-dom/server';

/**
 * ContractView view component class.
 * @function NewsletterCreationForm
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const NewsletterCreationForm = () => {
    const dispatch = useDispatch();
    let lang = useSelector((state) => state.intl.locale);
    moment.locale(lang);
    useEffect(() => {
        dispatch(getNewsitems(30, lang));
    }, [dispatch]);
    const newsitems = useSelector((state) => state.newsitems.newsitems);
    const [newsSelection, setNewsSelection] = useState([]);

    const selectNews = (newsitem, checked) => {
        if (checked) {
            setNewsSelection(newsSelection.concat(newsitem['@id']));
        } else {
            setNewsSelection(
                newsSelection.filter((arr_id) => arr_id !== newsitem['@id']),
            );
        }
    };
    const createNewsletterHandler = () => {
        const text = renderToString(<HtmlTemplateView></HtmlTemplateView>);
        dispatch(createNewsletter(location.pathname, text)).then((response) => {
            toast.success(
                <Toast success autoClose={5000} title={response.message} />,
            );
        });
        setNewsSelection([]);
    };
    return (
        <>
            {newsitems?.length > 0 && (
                <>
                    <div className="newsitems">
                        <h2>Newsitems list</h2>
                        <ul>
                            {newsitems?.map((newsitem, index) => (
                                <>
                                    <li key={index}>
                                        <Checkbox
                                            onChange={(e, data) =>
                                                selectNews(
                                                    newsitem,
                                                    data.checked,
                                                )
                                            }
                                            checked={newsSelection.includes(
                                                newsitem['@id'],
                                            )}
                                            label={newsitem.title}
                                            value={newsitem['@id']}
                                        >
                                            {newsitem.title}
                                        </Checkbox>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                    <Button
                        disabled={newsSelection.length === 0}
                        onClick={() => createNewsletterHandler()}
                    >
                        Create newsletter
                    </Button>
                </>
            )}
        </>
    );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */

export default NewsletterCreationForm;
