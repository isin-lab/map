

const { ErrorRepository } = require('../app'); // Импорт класса Team из модуля app


describe('ErrorRepository', () => {
  let errorRepository;

  beforeEach(() => {
    errorRepository = new ErrorRepository();
    errorRepository.addError(404, 'Not Found');
    errorRepository.addError(500, 'Internal Server Error');
    errorRepository.addError(403, 'Forbidden');
  });

  test('returns the correct error description for a known code', () => {
    const code = 404;
    const expected = 'Not Found';
    const result = errorRepository.translate(code);
    expect(result).toEqual(expected);
  });

  test('returns "Unknown error" for an unknown code', () => {
    const code = 401;
    const expected = 'Unknown error';
    const result = errorRepository.translate(code);
    expect(result).toEqual(expected);
  });
});


