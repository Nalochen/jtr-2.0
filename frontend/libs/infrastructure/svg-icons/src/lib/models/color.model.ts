export const colorMap = {
  'color-primary': '#005ea8',
  'color-primary-light': '#0271C2',
  'color-primary-darker': '#063773',

  'color-dark': '#000',
  'color-light': '#b4b4b4',
  'color-lighter': '#dcdcdc',
  'color-inverted': '#fff',
  'color-dark-green': '#008300',
  'color-dark-red': '#c82d2d',
  'color-light-red': '#e30613',

  'color-secondary': '#666',
  'color-positive': '#7ab51d',
  'color-error': '#e30613',
  'color-warning': '#f6b800',
  'color-orange': '#f07c00',
  'color-teal': '#C1E3E3',
  'color-dark-teal': '#005C61',
  'color-dark-gray': '#666',

  'text-primary': '#333',
  'text-dark': '#333',
  'text-secondary': '#666',
  'text-light': '#999',

  'background-primary': '#fff',
  'background-secondary': '#ecf7fd',
  'background-notice': '#cae7a8',
  'background-grey': '#efeff4',
  'background-light-grey': '#f4f4f4',

  'efeedback-very-negative': '#a41916',
  'efeedback-negative': '#f08315',
  'efeedback-neutral': '#f0c221',
  'efeedback-positive': '#7ab51d',
  'efeedback-very-positive': '#429635',

  'color-cta': '#0271C2',
  'color-cta-active': '#015FA4',

  'color-link': '#005ea8',
  'color-link-hover': '#C05702',
};

export type Color = keyof typeof colorMap | string;
