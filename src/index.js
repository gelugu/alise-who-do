const micro = require("micro");
const replies = require("./replies");

const server = micro(async (req, _) => {
  const { request, session, state } = await micro.json(req);

  const sessionState = (state && state.session) || {};

  return session.new
    ? replies.welcome()
    : replies.reply(request.command, sessionState);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  if (!process.env.PORT) console.log("tunnel: http://localhost:4040");
});
