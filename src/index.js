import NewsletterContainerView from './components/Views/NewsletterContainerView';
import reducers from './reducers';
const applyConfig = (config) => {
  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      NewsletterContainer: NewsletterContainerView,
    },
  };
  config.addonReducers = {
    ...config.addonReducers,
    ...reducers,
  };
  return config;
};

export default applyConfig;
