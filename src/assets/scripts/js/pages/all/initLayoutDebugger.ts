import { LayoutDebugger } from '../../libs/LayoutDebugger/LayoutDebugger';

export function initLayoutDebugger() {
  window.addEventListener('load', () => new LayoutDebugger());
}
