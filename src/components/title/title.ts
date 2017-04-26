import { Component, h, Ionic } from '../../index';


/**
 * @name Title
 * @description
 * `ion-title` is a component that sets the title of the `Toolbar` or `Navbar`.
 *
 * @usage
 *
 * ```html
 * <ion-header>
 *
 *   <ion-navbar>
 *     <ion-title>Settings</ion-title>
 *   </ion-navbar>
 *
 * </ion-header>
 * ```
 *
 * Or to create a navbar with a toolbar as a subheader:
 *
 * ```html
 * <ion-header>
 *
 *   <ion-navbar>
 *     <ion-title>Main Header</ion-title>
 *   </ion-navbar>
 *
 *   <ion-toolbar>
 *     <ion-title>Subheader</ion-title>
 *   </ion-toolbar>
 *
 * </ion-header>
 * ```
 *
 * @demo /docs/demos/src/title/
 */
@Component({
  tag: 'ion-title',
  styleUrls: {
    ios: 'title.ios.scss',
    md: 'title.md.scss',
    wp: 'title.wp.scss'
  },
  shadow: false
})
export class ToolbarTitle {
  constructor() {
    // toolbar && toolbar._setTitle(this);
    // navbar && navbar._setTitle(this);
  }

  render() {
    return h(this,
      h('div',
        Ionic.theme(this, 'toolbar-title'),
        h('slot')
      )
    );
  }

  // /**
  //  * @hidden
  //  */
  // getTitleText() {
  //   return this._elementRef.nativeElement.textContent;
  // }
}