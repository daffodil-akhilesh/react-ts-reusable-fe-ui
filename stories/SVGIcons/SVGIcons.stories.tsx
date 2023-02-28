import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import LeftArrowSVGComp from "../../packages/SvgIcons/src/LeftArrowIcon";


export default {
  title: 'SVGs',
  component: LeftArrowSVGComp,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
