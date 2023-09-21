import { useEffect, useState } from "react";
import { RowsInfo } from "../../Types/RowsInfo";



interface IProps {
    RowInfo: RowsInfo
}

const Row = ({ RowInfo }: IProps) => {

    const [isMarkedFraud, setIsMarkedFraud] = useState(false)
    
    useEffect(()=>{
        if(RowInfo.RefStatusSubtitle === "Marked as fraud") setIsMarkedFraud(true)
    }, [])

    return (<>
        <tr className="row__title">
            <td>{RowInfo.RefEventType}</td>
            <td>{RowInfo.AdvocateMail}</td>
            <td>{RowInfo.FriendMail}</td>
            <td>{RowInfo.RefStatusTitle}</td>
        </tr>
        <tr className="row__subtitle">
            <td>{RowInfo.Date}</td>
            <td>{RowInfo.AdvocateType}</td>
            <td>{RowInfo.FriendType}</td>
            <td style={ isMarkedFraud ? {color:"red"} : {}}>
                {RowInfo.RefStatusSubtitle}
            </td>
        </tr>
        <tr className="tow__price">
            <td>{RowInfo.Price}</td>
        </tr>
    </>);
}

export default Row;