import { ToMbPipe } from './to-mb.pipe';

describe('ToMbPipe', () => {
  describe('ToMbPipe isolated test', () => {
    it('create an instance', () => {
      const pipe = new ToMbPipe();
      expect(pipe.transform(123456789)).toEqual('117.74MB');
      expect(pipe.transform(987654321)).toEqual('941.90MB');

      expect(pipe.transform(123456789, 'Megabytes')).toEqual('117.74Megabytes');
      expect(pipe.transform(987654321, 'Mbytes')).toEqual('941.90Mbytes');
    });
  });
});
