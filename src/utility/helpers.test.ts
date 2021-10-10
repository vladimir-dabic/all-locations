import { formatDate } from './helpers';

describe('dateFormat function', () => {
  it.each`
    input                         | expected
    ${''}                         | ${''}
    ${null}                       | ${''}
    ${undefined}                  | ${''}
    ${'2021-03-05T09:10:35.462Z'} | ${'10:10am (GMT+01:00)'}
    ${'2021-03-04T14:09:13.414Z'} | ${'3:09pm (GMT+01:00)'}
    ${'2018-09-05T01:17:35.519Z'} | ${'3:17am (GMT+02:00)'}
    ${'2021-08-05T06:45:19.441Z'} | ${'8:45am (GMT+02:00)'}
  `(
    'should return $expected when the input is $input',
    ({ input, expected }) => {
      const result = formatDate(input);
      expect(result).toBe(expected);
    },
  );
});
