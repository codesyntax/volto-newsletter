import NewsletterContainerView from './components/Views/NewsletterContainerView';
import NewsletterView from './components/Views/NewsletterView';
import reducers from './reducers';
const applyConfig = (config) => {
  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      NewsletterContainer: NewsletterContainerView,
      Newsletter: NewsletterView,
    },
  };
  config.addonReducers = {
    ...config.addonReducers,
    ...reducers,
  };
  return config;
};

export default applyConfig;
