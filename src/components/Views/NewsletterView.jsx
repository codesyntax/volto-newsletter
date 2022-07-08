/**
 * NewsItemView view component.
 * @module Components/Views/NewsletterView
 */

import React, { useState, useEffect } from 'react';
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
    const [inputFrom, setinputFrom] = useState({
        value: '',
        error: false,
        icon: 'arrow right',
    });
    const [inputTo, setinputTo] = useState({
        value: '',
        error: false,
        icon: 'arrow right',
    });
    const [inputSubject, setinputSubject] = useState('');

    function handleChangeInputFrom(event) {
        setinputFrom({
            value: event.target.value,
            error: false,
            icon: 'arrow right',
        });
    }

    const handleBlurFrom = () => {
        if (!validateEmail(inputFrom.value)) {
            setinputFrom({
                value: inputFrom.value,
                error: true,
                icon: 'cancel red',
            });
        } else {
            setinputFrom({
                value: inputFrom.value,
                error: false,
                icon: 'check green',
            });
        }
    };

    const handleBlurTo = () => {
        if (!validateEmail(inputTo.value)) {
            setinputTo({
                value: inputTo.value,
                error: true,
                icon: 'cancel red',
            });
        } else {
            setinputTo({
                value: inputTo.value,
                error: false,
                icon: 'check green',
            });
        }
    };

    function handleChangeinputTo(event) {
        setinputTo({
            value: event.target.value,
            error: false,
            icon: 'arrow right',
        });
    }

    function handleChangeinputSubject(event) {
        setinputSubject(event.target.value);
    }
    const enabled =
        validateEmail(inputFrom.value) &&
        validateEmail(inputTo.value) > 0 &&
        inputSubject.length > 0;

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
    const sendButtonHandler = (event) => {
        event.preventDefault();
        const validatedFrom = validateEmail(inputTo.value);
        const validatedTo = validateEmail(inputFrom.value);
        if (validatedFrom && validatedTo) {
            dispatch(
                sendNewsletter(
                    location.pathname,
                    inputFrom.value,
                    inputTo.value,
                    inputSubject,
                ),
            );
            setinputFrom({
                value: '',
                error: false,
                icon: 'arrow right',
            });
            setinputTo({
                value: '',
                error: false,
                icon: 'arrow right',
            });
            setinputSubject('');
        } else {
            toast.error(
                <Toast error autoClose={3000} title={'No Validated emails'} />,
            );
            if (!validatedFrom) {
                setinputFrom({
                    value: inputFrom.value,
                    error: true,
                    icon: 'error',
                });
            }
            if (!validatedTo) {
                setinputTo({
                    value: inputTo.value,
                    error: true,
                    icon: 'error',
                });
            }
        }
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
                    <form onSubmit={sendButtonHandler}>
                        <Input
                            icon={inputFrom.icon}
                            iconPosition="left"
                            label={{ tag: true, content: 'From' }}
                            labelPosition="right"
                            placeholder="info@newsletter.com"
                            onChange={handleChangeInputFrom}
                            onBlur={handleBlurFrom}
                            value={inputFrom.value}
                            error={inputFrom.error}
                            type="email"
                        />
                        <Input
                            icon={inputTo.icon}
                            iconPosition="left"
                            label={{ tag: true, content: 'To' }}
                            labelPosition="right"
                            placeholder="group@postaria.com"
                            onChange={handleChangeinputTo}
                            value={inputTo.value}
                            error={inputTo.error}
                            onBlur={handleBlurTo}
                            type="email"
                        />
                        <Input
                            placeholder="Udal buletina"
                            onChange={handleChangeinputSubject}
                            value={inputSubject}
                        />
                        <Button disabled={!enabled} type="submit">
                            Send
                        </Button>
                    </form>
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
