import { test, expect, request } from '@playwright/test';

test.describe('@api @users Local API Users Endpoint', () => {

  test('@api @post POST create user returns 201 and correct body', async () => {
    const apiRequest = await request.newContext({
      baseURL: 'http://localhost:3001',
      extraHTTPHeaders: { 'Content-Type': 'application/json' }
    });

    const response = await apiRequest.post('/users', {
      data: {
        name: 'QA Tester',
        job: 'Automation Engineer'
      }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('QA Tester');
    expect(body.job).toBe('Automation Engineer');
    expect(body.id).toBeTruthy(); // json-server auto-generates ID
  });
});

