
export default async function ServiceDetailsPage({ params }) {
  const { id } = await params;
  const service = await fetch(`http://localhost:5000/service/${id}`).then(
    (res) => res.json()
  );
  const {
    serviceName,
    category,
    providerName,
    email,
    created_at,
    description,
    price,
    serviceImg,
  } = service || {};

  console.log(service);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 bg-base-100 shadow-sm">
        <figure className="mx-auto">
          <img src={serviceImg} alt={serviceName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{serviceName}</h2>
          <p className="text-base-content font-semibold">{description}</p>
          <p className="text-base-content font-semibold">
            category : {category}
          </p>
          <p className="text-base-content font-semibold">
            created_at : {created_at}
          </p>
          <p className="text-base-content font-semibold">
            providerName : {providerName}
          </p>
          <p className="text-base-content font-semibold">email : {email}</p>
          <p className="text-base-content font-semibold">price : ${price}</p>
        </div>
      </div>
    </>
  );
}
