import {publicLocks} from '../lib';

it('Basic Categories of Public Locks', async () => {
    const reply = await publicLocks.categories(process.env.TOKEN || '');
    expect(reply.length).toBeGreaterThan(0);
});