import { callLoginApi, getTraineeData, postTraineeData } from '../libs/Utils/API';

describe('Login using async/await', () => {
  it('Should be logged in successfully', async () => {
    const logIn = await callLoginApi('head.trainer@successive.tech');
    expect(logIn).toBeDefined();
  });
  it('Should be logged in successfully', async () => {
    const getData = await getTraineeData({ limit: 0, slip: 0 });
    expect(getData).toBeDefined();
  });
  it('Should be logged in successfully', async () => {
    const register = await postTraineeData('Test, test@test.com, test');
    expect(register).toBeDefined();
  });
});
