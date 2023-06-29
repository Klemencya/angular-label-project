import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [
    {
      name: 'Components',
      route: 'components',
      include: 'src/app/components/**/*',
    },
    {
      name: 'Directives',
      route: 'directives',
      include: 'src/app/directives/**/*',
    }
	],
};

export default Api;
