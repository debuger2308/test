import { RowsInfo } from "../../Types/RowsInfo";
import Row from "../Row/Row";






interface Props {
    RowsInfo: RowsInfo[]
}

const Table = ({ RowsInfo }: Props) => {

    return (
        <>
            <h1 className="table__title">Refferals - 345</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="table__title-row">Refferal event</th>
                        <th className="table__title-row">Advocate</th>
                        <th className="table__title-row">Friend</th>
                        <th className="table__title-row">Refferal status</th>
                    </tr>
                </thead>
                <tbody>
                    {RowsInfo.map((RowInfo, id) => {
                        return <Row key={id} RowInfo={RowInfo} />
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table;