import { Msd } from "./Msd";

export function UserList() {
  const people1 = [
    {
      name: "dhoni",
      pic: "https://wallpapercave.com/wp/wp6860301.jpg"

    },
    {
      name: "raina",
      pic: "https://wallpapercave.com/wp/wp7468985.jpg"
    },
    {
      name: "jadeja",
      pic: "https://imgk.timesnownews.com/story/Jadeja_CSK_bcci_0.png"
    }
  ];
  return (
    <div>
      {people1.map((usr) => (
        <Msd name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}
