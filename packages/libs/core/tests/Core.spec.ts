import { module_name } from '../src/utils/Core';

describe('core', () => {
  it('should work', () => {
    expect(module_name()).toEqual('core');
  });
});
