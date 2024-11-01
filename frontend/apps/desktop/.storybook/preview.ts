import docJson from '../documentation.json'; // The path to your generated json file from Compodoc contains all your documentation information.
import { setCompodocJson } from '@storybook/addon-docs/angular';
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import type { Preview } from '@storybook/angular';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'iphone6',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
