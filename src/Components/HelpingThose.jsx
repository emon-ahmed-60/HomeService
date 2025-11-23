export default function HelpingThose() {
  return (
    <>
      {" "}
      <h1 className="font-bold text-3xl text-base-content text-center mt-8">
        Helping Those Who Need It Most
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-8">
        <div className="card bg-base-100 card-md shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
          <div className="card-body">
            <div className="bg-primary rounded-sm p-2 w-12 flex justify-center items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house-icon lucide-house"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <h2 className="card-title text-xl">Home</h2>
            <p className="text-base-content">
              Providing essential support and resources to families and
              individuals, ensuring every home becomes a place of comfort,
              safety, and hope.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 card-md shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
          <div className="card-body">
            <div className="bg-primary rounded-sm p-2 w-12 flex justify-center items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-monitor-cloud-icon lucide-monitor-cloud"
              >
                <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
                <path d="M12 17v4" />
                <path d="M8 21h8" />
                <rect x="2" y="3" width="20" height="14" rx="2" />
              </svg>
            </div>
            <h2 className="card-title text-xl">Workspace</h2>
            <p className="text-base-content">
              Empowering communities by offering productive workspaces and
              opportunities, helping people grow skills, earn livelihoods, and
              achieve their potential.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 card-md shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
          <div className="card-body">
            <div className="bg-primary rounded-sm p-2 w-12 flex justify-center items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-store-icon lucide-store"
              >
                <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
                <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
                <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
              </svg>
            </div>
            <h2 className="card-title text-xl">Store</h2>
            <p className="text-base-content">
              Making essential goods accessible to those in need, from groceries
              to daily necessities, so everyone can live with dignity and ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
