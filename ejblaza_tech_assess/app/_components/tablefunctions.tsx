import React from "react";
import Link from "next/link";

type Props = {
  car: {
    vehicleId: string, vin: string
  }
}

const TableVehicleInfo = ({car: {vehicleId, vin}}: Props) => {
  return (
    <tr>
      <td>{vehicleId}</td>
      <td>{vin}</td>
      <td className="viewlink">
        <Link href={`/vehicle/${encodeURIComponent(vehicleId)}`}>View</Link>
      </td>
    </tr>
  );
};

export default TableVehicleInfo;
