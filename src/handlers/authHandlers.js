import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

export const loginHandler = async (event, context) => {
  const ctrl = ctrlWrapper(template_1);
  return await ctrl(event, context);
};
