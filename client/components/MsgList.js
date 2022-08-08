import MsgItem from "./MsgItem";

const UserIds = ["roy", "jay"];
const getRandomUserId = () => UserIds[Math.round(Math.random())];

const mags = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: 50 - 1,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + i * 100 * 60,
    text: `${50 - i} mock text`,
  }));
/*
const msgs = [
  {
    id: 1,
    userId: getRandomUserId(),
    timeStamp: 1234567890123,
    text: "1 mock text",
  },
];
*/

const MsgList = () => (
  <ul className="messages">
    {mags.map((x) => (
      <MsgItem key={x.id} {...x} />
    ))}
  </ul>
);

export default MsgList;
