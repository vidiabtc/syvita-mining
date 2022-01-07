export const handle = async ({ request, resolve }) => {
  const response = await resolve(request);
  console.log('ETST') 

  return {
    ...response.headers
  }
}