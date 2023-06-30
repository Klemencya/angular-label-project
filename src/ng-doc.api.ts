import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [
    {
      name: 'Components',
      route: 'components',
      include: 'src/app/components/**/*.ts',
    }
	],
};

export default Api;
