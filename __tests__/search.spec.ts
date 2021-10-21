import {publicLocks} from '../lib';

it('Basic Searching of Public Lock', async () => {
    const reply = await publicLocks.search(process.env.TOKEN || '', {criteria: {}, limit: 1});
    expect(reply.count).toBeGreaterThanOrEqual(1);
    expect(reply.hasMore).toEqual(true);
    expect(reply.results).toHaveLength(1);
});