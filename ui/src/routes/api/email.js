export const post = (request) => {
  const email = request.body.get("email")
  return {
    body: {
      email
    }
  }
}