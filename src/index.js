const micro = require("micro");
const replies = require("./replies");

const SOUND = {
  fire: '<speaker audio="alice-sounds-nature-fire-1.opus">',
};

const server = micro(async (req, res) => {
  const { request, session, state } = await micro.json(req);

  const sessionState = (state && state.session) || {};

  return session.new
    ? replies.welcome()
    : replies.reply(request.command, sessionState);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(
    `Server started on http://localhost:${PORT}, tunnel: http://localhost:4040`
  );
});
