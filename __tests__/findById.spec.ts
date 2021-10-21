import {publicLocks} from '../lib';

it('Basic Fetching of Public Lock', async () => {
    const reply = await publicLocks.findById(process.env.TOKEN || '', '617156e3fbeda0001b86a3b8');

    expect(reply.name).toEqual('Automated Testing Lock');
});