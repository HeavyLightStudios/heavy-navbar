import { TestWindow } from '@stencil/core/testing';
import { HeavyNavbar } from './heavy-navbar';

describe('heavy-navbar', () => {
  it('should build', () => {
    expect(new HeavyNavbar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLHeavyNavbarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [HeavyNavbar],
        html: '<heavy-navbar></heavy-navbar>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('');
    });

    // it('should work with both a first and a last name', async () => {
    //   element.first = 'Peter';
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    // });
  });
});
