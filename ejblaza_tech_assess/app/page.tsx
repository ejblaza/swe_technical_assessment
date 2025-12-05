// import Image from "next/image";
import Link from "next/link";
import TableVehicleInfo from "./_components/tablefunctions"
import cars from "./_lib/data"
import "./styles.css"



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center" >
      <main className=" min-h-screen w-full flex-col items-center justify-between px-16 ">        
        <div className="content">
          <button className="addCarButton"><Link href={"./vehicle/new"}>Add New Car</Link></button>
          <table className="tableVehicle">
            <thead><tr>
              <th>Vehicle ID</th>
              <th>VIN</th>
              <th>Preview</th>
            </tr></thead>
            <tbody>
              {cars.map(car => 
                (<TableVehicleInfo car={car} key={car.vehicleId}/>)
              )}
            </tbody>           
          </table>
        </div>
      </main>
    </div>
  );
}
