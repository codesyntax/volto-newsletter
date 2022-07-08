/**
 * NewsItemView view component.
 * @module Components/Views/NewsletterView
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import { Tab } from 'semantic-ui-react';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { Input, Icon } from 'semantic-ui-react';
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
    const [inputTo, setinputTo] = useState('');
    const [inputSubject, setinputSubject] = useState('');
    const [errorFrom, seterrorFrom] = useState(false);
    const [errorTo, seterrorTo] = useState(false);

    function handleChangeInputFrom(event) {
        seterrorFrom(false);
        setinputFrom(event.target.value);
    }

    function handleChangeinputTo(event) {
        seterrorTo(false);
        setinputTo(event.target.value);
    }

    function handleChangeinputSubject(event) {
        setinputSubject(event.target.value);
    }
    const enabled =
        inputFrom.length > 0 && inputTo.length > 0 && inputSubject.length > 0;

    function validateEmail(text) {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return reg.test(text);
    }
    useEffect(() => {
        !newsletter_send.loading &&
            newsletter_send.loaded &&
            toast.success(
                <Toast
                    success
                    autoClose={3000}
                    title={newsletter_send.message}
                />,
            );

        newsletter_send.error &&
            toast.error(
                <Toast
                    error
                    autoClose={3000}
                    title={newsletter_send.message}
                />,
            );
    }, [newsletter_send]);
    const sendButtonHandler = () => {
        const validatedFrom = validateEmail(inputTo);
        const validatedTo = validateEmail(inputFrom);
        if (validatedFrom && validatedTo) {
            dispatch(
                sendNewsletter(
                    location.pathname,
                    inputFrom,
                    inputTo,
                    inputSubject,
                ),
            );
            setinputFrom('');
            setinputTo('');
            setinputSubject('');
        } else {
            toast.error(
                <Toast error autoClose={3000} title={'No Validated emails'} />,
            );
            if (!validatedFrom) {
                seterrorFrom(true);
            }
            if (!validatedTo) {
                seterrorTo(true);
            }
        }
    };
    const panes = [
        {
            menuItem: 'Preview',
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
            menuItem: 'Send Newsletter',
            render: () => (
                <Tab.Pane className="Tabs">
                    <h2>Send the newsletter</h2>
                    <Input
                        iconPosition="left"
                        placeholder="info@newsletter.com"
                        onChange={handleChangeInputFrom}
                        value={inputFrom}
                        error={errorFrom}
                    >
                        <Icon name="at" />
                        <input />
                    </Input>

                    <Input
                        iconPosition="left"
                        placeholder="group@postaria.com"
                        onChange={handleChangeinputTo}
                        value={inputTo}
                        error={errorTo}
                    >
                        <Icon name="at" color={'grey'} />
                        <input />
                    </Input>

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
