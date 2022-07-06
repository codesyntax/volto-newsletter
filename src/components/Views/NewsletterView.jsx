/**
 * NewsItemView view component.
 * @module Components/Views/NewsletterView
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import { Tab } from 'semantic-ui-react';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { sendNewsletter } from '../../actions';
import { Toast } from '@plone/volto/components';
import { toast } from 'react-toastify';
/**
 * ContractView view component class.
 * @function NewsletterView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const NewsletterView = ({ content }) => {
    const dispatch = useDispatch();
    const newsletter_send = useSelector((store) => store.newsletter_send);
    const [inputFrom, setinputFrom] = useState('');
    function handleChangeInputFrom(event) {
        setinputFrom(event.target.value);
    }

    const [inputTo, setinputTo] = useState('');
    function handleChangeinputTo(event) {
        setinputTo(event.target.value);
    }

    const [inputSubject, setinputSubject] = useState('');
    function handleChangeinputSubject(event) {
        setinputSubject(event.target.value);
    }
    const enabled =
        inputFrom.length > 0 && inputTo.length > 0 && inputSubject.length > 0;

    const sendButtonHandler = () => {
        dispatch(
            sendNewsletter(location.pathname, inputFrom, inputTo, inputSubject),
        ).then(() => {
            toast.success(
                <Toast
                    success
                    autoClose={5000}
                    title={newsletter_send.message}
                />,
            );
        });
        setinputFrom('');
        setinputTo('');
        setinputSubject('');
    };
    const panes = [
        {
            menuItem: 'Aurrebista',
            render: () => (
                <Tab.Pane className="Tabs">
                    {content.text && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: flattenHTMLToAppURL(content.text.data),
                            }}
                        />
                    )}
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Bidali',
            render: () => (
                <Tab.Pane className="Tabs">
                    <Input
                        icon="arrow right"
                        iconPosition="left"
                        label={{ tag: true, content: 'From' }}
                        labelPosition="right"
                        placeholder="info@newsletter.com"
                        onChange={handleChangeInputFrom}
                        value={inputFrom}
                    />
                    <Input
                        icon="arrow right"
                        iconPosition="left"
                        label={{ tag: true, content: 'To' }}
                        labelPosition="right"
                        placeholder="group@postaria.com"
                        onChange={handleChangeinputTo}
                        value={inputTo}
                    />
                    <Input
                        placeholder="Udal buletina"
                        onChange={handleChangeinputSubject}
                        value={inputSubject}
                    />
                    <Button
                        disabled={!enabled}
                        onClick={() => sendButtonHandler()}
                    >
                        Send
                    </Button>
                </Tab.Pane>
            ),
        },
    ];
    return (
        <>
            <Container className="view-wrapper grid stackable">
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={10}>
                    <Tab panes={panes} />
                </Grid.Column>
                <Grid.Column width={1}></Grid.Column>
            </Container>
        </>
    );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
NewsletterView.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};

export default NewsletterView;
