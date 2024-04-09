export default function MonitoringCard({ name, address, port, state, endPoint }) {
    return (
      <div className="ml-10 bg-greyColor rounded-lg w-1/3 h-1/6 flex items-center justify-between">
      <h1 className="ml-5">Monitoring de {name}</h1>
      <p>endpoint : {endPoint}</p>
        <div className="text-left">
          <p>adresse : {address}</p>
          <p>port : {port}</p>
        </div>
        <div className={`h-16 w-16 mr-10 rounded-full ${state ? 'bg-green-600' : 'bg-red-600'} `}></div>
      </div>
    );
  }