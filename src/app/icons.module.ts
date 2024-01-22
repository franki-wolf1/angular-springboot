import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { IconCamera, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub
};

@NgModule({
  imports: [
    TablerIconsModule.pick(TablerIcons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }

// NOTES:
// 1. We add TablerIconsModule to the 'exports', since the <i-tabler> component will be used in templates of parent module
// 2. Don't forget to pick some icons using TablerIconsModule.pick({ ... })