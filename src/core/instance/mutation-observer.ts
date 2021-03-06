import { HostElement, PlatformApi } from '../../util/interfaces';
import { render } from './render';


/**
 * Create a mutation observer for the elm.
 *
 * @param plt platform api
 * @param elm the element to create an observer for
 */
export function createMutationObserver(plt: PlatformApi, elm: HostElement): void {
  if (plt.isClient) {
    const elementReset = createElementReset(plt, elm);

    elm._observer = new MutationObserver(mutations => {
      mutations.forEach(elementReset);
    });
  }
}

function createElementReset(plt: PlatformApi, elm: HostElement): () => void {
  return () => {
    const cmpMeta = plt.getComponentMeta(elm);
    const componentConstructor = plt.getComponentMeta(elm).componentConstructor;
    elm._vnode = null;
    plt.connectHostElement(cmpMeta, elm);
    stopObserving(plt, elm);
    render(plt, elm, componentConstructor, false);
    startObserving(plt, elm);
  };
}

/**
 * Start the observer that each element has
 *
 * @param elm the element to watch
 */
export function startObserving(plt: PlatformApi, elm: HostElement): void {
  if (plt.isClient && elm._observer) {
    return elm._observer.observe(elm, {
      'childList': true
    });
  }
}

export function stopObserving(plt: PlatformApi, elm: HostElement): void {
  if (plt.isClient && elm._observer) {
    return elm._observer.disconnect();
  }
}
