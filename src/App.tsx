import Table from "./components/Table/Table"
import "./reset.css"
import "./style.css"

const RowsInfo = [
  {
    RefEventType: "Purchase",
    AdvocateMail: "autiuser23254@gmail.com",
    FriendMail: "frto3453t324@gmail.com",
    RefStatusTitle: "Pending",
    Date: "06/17/2020 at 7:13 PM PDT",
    AdvocateType: "Advocate",
    FriendType: "Friend",
    RefStatusSubtitle: "Passed fraud checks",
    Price: `120$`,
  },
  {
    RefEventType: "Purchase",
    AdvocateMail: "autiuser23254@gmail.com",
    FriendMail: "frto3453t324@gmail.com",
    RefStatusTitle: "Pending",
    Date: "06/17/2020 at 7:13 PM PDT",
    AdvocateType: "Advocate",
    FriendType: "Friend",
    RefStatusSubtitle: "Marked as fraud",
    Price: `100$`,
  },
  {
    RefEventType: "Purchase",
    AdvocateMail: "autiuser23254@gmail.com",
    FriendMail: "frto3453t324@gmail.com",
    RefStatusTitle: "Pending",
    Date: "06/17/2020 at 7:13 PM PDT",
    AdvocateType: "Advocate",
    FriendType: "Friend",
    RefStatusSubtitle: "Passed fraud checks",
    Price: `80$`,
  },
]

function App() {

  return (
    <>
      <Table RowsInfo={RowsInfo} />
    </>
  )
}

export default App
