import { join } from 'frontend-api-client';
import { safe as $ } from 'safe-monada';

const currentOrigin = $(global.location).$('origin').$();

export const routeMaker = route => join(currentOrigin, route);
export const redirectByRoute = route => {
  if (route) global.location = routeMaker(route);
};
