import {NgDocDependencies} from '@ng-doc/core';
import {LabelPageModule} from './ng-doc.module';

import {LabelDemoComponent} from "./demo/label-demo/label-demo.component";

const LabelPageDependencies: NgDocDependencies = {
	module: LabelPageModule,
	// Add your demos that you are going to use in the page here
	demo: {LabelDemoComponent},
};

export default LabelPageDependencies;
