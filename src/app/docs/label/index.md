# {{ NgDocPage.title }}

Как создать демо на примере компонента Label

## Создание новых файлов

Нам необходимо создать 2 файла: `ng-doc.dependencies.ts` и `ng-doc.module.ts` рядом
с файлом нашего гайда `ng-doc.page.ts`

Для этого можно использовать следующую команду, которая :

```bash
ng g @ng-doc/builder:page Label -d
```

Должны создаться 4 файла, парочка из которых представлены ниже

Примерно так должен выглядть `ng-doc.dependencies.ts`
```ts
import {NgDocDependencies} from '@ng-doc/core';
import {LabelPageModule} from './ng-doc.module';

const LabelPageDependencies: NgDocDependencies = {
	module: LabelPageModule,
	// Add your demos that you are going to use in the page here
	demo: {},
};

export default LabelPageDependencies;
```

А вот так `ng-doc.module.ts`
```ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
	imports: [CommonModule],
	// Declare you demo components here
	declarations: [],
})
export class LabelPageModule {}
```

## Создание Demo

1) В нашей папке docs/label создаем еще папку demo
2) Переходим в эту папку и вводим команду `ng g component LabelDemo --skip-tests `
3) Наслаждаемся компонентом, который сам создался и который сам подключился в ng-doc.module.ts

Теперь переходим в `ng-doc.dependencies.ts` и регистрируем наш компонент в `demo`. Должно получиться
примерно следующее

```ts
import {NgDocDependencies} from '@ng-doc/core';
import {LabelPageModule} from './ng-doc.module';

import {LabelDemoComponent} from "./demo/label-demo/label-demo.component";

const LabelPageDependencies: NgDocDependencies = {
	module: LabelPageModule,
	// Регестрируем компонент
	demo: {LabelDemoComponent},
};

export default LabelPageDependencies;
```

## Отображение в гайде

{{ NgDocActions.demo("LabelDemoComponent") }}

